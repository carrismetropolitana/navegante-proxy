/* * */

import FASTIFY from '@/services/FASTIFY.js';

/* * */

const android = async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 1,
				build_min: null,
				message_id: 'ANDROID-0082',
				presentation_type: 'breaking',
				url_host: 'https://alpha.carrismetropolitana.pt/',
				url_path: '/app-android/startup/message-1',
			},
			{
				build_max: 1,
				build_min: 2,
				message_id: 'ANDROID-0005',
				presentation_type: 'changelog',
				url_host: 'https://alpha.carrismetropolitana.pt/',
				url_path: '/app-android/startup/message-1',
			},
		]);
};

const ios = async (_, reply) => {
	return reply
		.code(200)
		.header('Content-Type', 'application/json; charset=utf-8')
		.send([
			{
				build_max: 1,
				build_min: null,
				message_id: 'IOS-0082',
				presentation_type: 'breaking',
				url_host: 'https://alpha.carrismetropolitana.pt/',
				url_path: '/app-ios/startup/message-1',
			},
			{
				build_max: 1,
				build_min: 2,
				message_id: 'IOS-0005',
				presentation_type: 'changelog',
				url_host: 'https://alpha.carrismetropolitana.pt/',
				url_path: '/app-ios/startup/message-1',
			},
		]);
};

/* * */

FASTIFY.server.get('/android/v1/startup/message', android);
FASTIFY.server.get('/ios/v1/startup/message', ios);
