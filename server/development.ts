/* * */

import FASTIFY from '@/services/FASTIFY.js';

/* * */

FASTIFY.server.get('/dev/android/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			/*{
				build_max: 90,
				build_min: null,
				message_id: 'DEV-ANDROID-20260127',
				message_url: 'https://pcgi-stg.tmlmobilidade.pt/app-navegante-android/startup/20260127',
				presentation_type: 'breaking',
			},*/
			{
				build_max: null,
				build_min: 103,
				message_id: 'DEV-navegante-rir-2026',
				message_url: 'https://pcgi-stg.tmlmobilidade.pt/app-navegante-android/startup/rock-in-rio-2026',
				presentation_type: 'changelog',
			},
		]);
});

FASTIFY.server.get('/dev/ios/v1/startup/message', async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			/*{
				build_max: 93,
				build_min: null,
				message_id: 'DEV-IOS-20260128',
				message_url: 'https://pcgi-stg.tmlmobilidade.pt/app-navegante-ios/startup/20260127',
				presentation_type: 'breaking',
			},*/
			{
				build_max: null,
				build_min: 101,
				message_id: 'DEV-navegante-rir-2026',
				message_url: 'https://pcgi-stg.tmlmobilidade.pt/app-navegante-ios/startup/rock-in-rio-2026',
				presentation_type: 'changelog',
			},
		]);
});
