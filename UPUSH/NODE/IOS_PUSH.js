/*
 * iOS 기기를 대상으로 푸시메시지를 발송합니다.
 */
UPUSH.IOS_PUSH = METHOD(() => {

	let apn = require('@parse/node-apn');

	let apnProvider;

	if (NODE_CONFIG.UPUSH !== undefined && NODE_CONFIG.UPUSH.IOS !== undefined) {

		try {

			apnProvider = new apn.Provider({
				cert: READ_FILE({
					path: NODE_CONFIG.UPUSH.IOS.certFilePath,
					isSync: true
				}),
				key: READ_FILE({
					path: NODE_CONFIG.UPUSH.IOS.keyFilePath,
					isSync: true
				}),
				production: NODE_CONFIG.UPUSH.isDebugMode !== true,
				passphrase: NODE_CONFIG.UPUSH.IOS.password
			});

		} catch (error) {
			UPUSH.SHOW_ERROR('IOS_PUSH', error.toString());
		}
	}

	return {

		run: (params) => {
			//REQUIRED: params
			//REQUIRED: params.token
			//OPTIONAL: params.badge
			//OPTIONAL: params.sound
			//REQUIRED: params.message
			//OPTIONAL: params.data

			if (apnProvider !== undefined) {

				let token = params.token;

				let noti = new apn.Notification();

				noti.topic = NODE_CONFIG.UPUSH.IOS.appBundleId;
				noti.badge = params.badge;
				noti.sound = 'ping.aiff';
				noti.alert = params.message;
				noti.payload = params.data === undefined ? {} : params.data;
				noti.pushType = 'alert';

				try {
					apnProvider.send(noti, [token]).then((result) => {
						// ignore.
					}).catch((error) => {
						UPUSH.SHOW_ERROR('IOS_PUSH', error.toString());
					});
				} catch (error) {
					UPUSH.SHOW_ERROR('IOS_PUSH', error.toString());
				}
			}
		}
	};
});
