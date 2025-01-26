/* * */

import FASTIFY from '@/services/FASTIFY.js';

/* * */

FASTIFY.server.get('/dev/android/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 38,
				build_min: null,
				message_id: 'DEV-ANDROID-20250115',
				message_url: 'https://www.carrismetropolitana.pt/app-navegante-android/startup/20250115',
				presentation_type: 'breaking',
			},
		]);
});

FASTIFY.server.get('/dev/ios/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 1,
				build_min: null,
				message_id: 'DEV-IOS-20250115',
				message_url: 'https://www.carrismetropolitana.pt/app-navegante-ios/startup/20250115',
				presentation_type: 'breaking',
			},
		]);
});
