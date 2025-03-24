/* * */

import FASTIFY from '@/services/FASTIFY.js';

/* * */

FASTIFY.server.get('/android/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 41,
				build_min: null,
				message_id: 'ANDROID-20250115',
				message_url: 'https://www.carrismetropolitana.pt/app-navegante-android/startup/20250115',
				presentation_type: 'breaking',
			},
			// {
			// 	build_max: null,
			// 	build_min: 42,
			// 	message_id: 'ANDROID-nao-aumenta-2025',
			// 	message_url: 'https://www.carrismetropolitana.pt/app-navegante-android/startup/nao-aumenta-2025',
			// 	presentation_type: 'changelog',
			// },
		]);
});

FASTIFY.server.get('/ios/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 38,
				build_min: null,
				message_id: 'IOS-20250115',
				message_url: 'https://www.carrismetropolitana.pt/app-navegante-ios/startup/20250115',
				presentation_type: 'breaking',
			},
			// {
			// 	build_max: null,
			// 	build_min: 39,
			// 	message_id: 'IOS-nao-aumenta-2025',
			// 	message_url: 'https://www.carrismetropolitana.pt/app-navegante-ios/startup/nao-aumenta-2025',
			// 	presentation_type: 'changelog',
			// },
		]);
});
