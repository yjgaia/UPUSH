/*
 * 안드로이드 기기를 대상으로 푸시메시지를 발송합니다.
 */
UPUSH.ANDROID_PUSH = METHOD(() => {

	var FCM = require('fcm-node');

	let fcm;

	if (NODE_CONFIG.UPUSH !== undefined && NODE_CONFIG.UPUSH.Android !== undefined) {
		fcm = new FCM(NODE_CONFIG.UPUSH.Android.serverKey);
	}

	return {

		run: (params) => {
			//REQUIRED: params
			//REQUIRED: params.regId
			//REQUIRED: params.title
			//REQUIRED: params.message

			let regId = params.regId;
			let title = params.title;
			let message = params.message;

			fcm.send({
				to: regId,
				notification: {
					title: title,
					body: message
				}
			}, (error, result) => {
				// ignore.
			});
		}
	};
});
