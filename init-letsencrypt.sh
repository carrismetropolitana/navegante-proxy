#!/bin/bash


# # #
# SETTINGS

email="carrismetropolitana@gmail.com"
staging=0 # Set to 1 if you're testing your setup to avoid hitting request limits

api_domain_1=proxy.api.app.navegante.carrismetropolitana.pt # The primary domain
api_domain_2=api.app.navegante.pt


# # #
# STARTUP

echo ">>> Cleaning letsencrypt directory..."
sudo rm -Rf "./letsencrypt/"

echo ">>> Downloading recommended TLS parameters ..."
mkdir -p "./letsencrypt"
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "./letsencrypt/options-ssl-nginx.conf"
curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "./letsencrypt/ssl-dhparams.pem"
echo

echo ">>> Creating dummy certificate for "$api_domain_1"..."
mkdir -p "./letsencrypt/live/$api_domain_1"
docker compose run --rm --entrypoint "openssl req -x509 -nodes -newkey rsa:4096 -days 1 -keyout '/etc/letsencrypt/live/$api_domain_1/privkey.pem' -out '/etc/letsencrypt/live/$api_domain_1/fullchain.pem' -subj '/CN=localhost'" certbot
echo

echo ">>> Rebuilding nginx ..."
docker compose up -d --build --force-recreate --remove-orphans nginx
echo


# # #
# API

echo ">>> Preparing for "$api_domain_1" and "$api_domain_2" ..."

echo ">>> Deleting dummy certificate..."
docker compose run --rm --entrypoint "rm -Rf /etc/letsencrypt/live/$api_domain_1 && rm -Rf /etc/letsencrypt/archive/$api_domain_1 && rm -Rf /etc/letsencrypt/renewal/$api_domain_1.conf" certbot
echo

echo ">>> Requesting Let's Encrypt certificate for "$api_domain_1"..."
if [ $staging != "0" ]; then staging_arg="--staging"; fi # Enable staging mode if needed
docker compose run --rm --entrypoint "certbot certonly --webroot -w /var/www/certbot $staging_arg -d $api_domain_1 -d $api_domain_2 --email $email --rsa-key-size 4096 --agree-tos --noninteractive --verbose --force-renewal" certbot
echo


# # #
# CLEANUP

echo ">>> Rebuilding nginx ..."
docker compose up -d --build --force-recreate --remove-orphans nginx
echo

echo ">>> DONE!"