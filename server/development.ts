/* * */

import FASTIFY from '@/services/FASTIFY.js';

/* * */

FASTIFY.server.get('/dev/android/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 1,
				build_min: null,
				message_id: 'DEV-ANDROID-0082',
				message_url: 'https://alpha.carrismetropolitana.pt/app-android/startup/message-1',
				presentation_type: 'breaking',
			},
			{
				build_max: 1,
				build_min: 2,
				message_id: 'DEV-ANDROID-0005',
				message_url: 'https://alpha.carrismetropolitana.pt/app-android/startup/message-1',
				presentation_type: 'changelog',
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
				message_id: 'DEV-IOS-0082',
				message_url: 'https://alpha.carrismetropolitana.pt/app-ios/startup/message-1',
				presentation_type: 'breaking',
			},
			{
				build_max: 1,
				build_min: 2,
				message_id: 'DEV-IOS-0005',
				message_url: 'https://alpha.carrismetropolitana.pt/app-ios/startup/message-1',
				presentation_type: 'changelog',
			},
		]);
});
