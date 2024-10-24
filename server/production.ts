/* * */

import FASTIFY from '@/services/FASTIFY.js';

/* * */

FASTIFY.server.get('/android/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 37,
				build_min: null,
				message_id: 'PROD-ANDROID-0082',
				message_url: 'https://cmet.pt/app-navegante-android/startup/default',
				presentation_type: 'breaking',
			},
		]);
});

FASTIFY.server.get('/ios/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 34,
				build_min: null,
				message_id: 'PROD-IOS-0082',
				message_url: 'https://cmet.pt/app-navegante-ios/startup/default',
				presentation_type: 'breaking',
			},
		]);
});
