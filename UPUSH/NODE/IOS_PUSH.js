/*
 * iOS 기기를 대상으로 푸시메시지를 발송합니다.
 */
UPUSH.IOS_PUSH = METHOD(() => {

	let apn = require('apn');
	
	let connection;

	if (NODE_CONFIG.UPUSH !== undefined && NODE_CONFIG.UPUSH.IOS !== undefined) {

		connection = new apn.Connection({
			cert : READ_FILE({
				path : NODE_CONFIG.UPUSH.IOS.certFilePath,
				isSync : true
			}),
			key : READ_FILE({
				path : NODE_CONFIG.UPUSH.IOS.keyFilePath,
				isSync : true
			}),
			production : NODE_CONFIG.UPUSH.isDebugMode !== true,
			passphrase : NODE_CONFIG.UPUSH.IOS.password
		});
		
		connection.on('error', (error) => {
			UPUSH.SHOW_ERROR('IOS_PUSH', error.toString());
		});
	}

	return {

		run : (params) => {
			//REQUIRED: params
			//REQUIRED: params.token
			//OPTIONAL: params.badge
			//OPTIONAL: params.sound
			//REQUIRED: params.message
			//OPTIONAL: params.data

			let token = params.token;

			let device = new apn.Device(token);

			let noti = new apn.Notification();
			
			noti.badge = params.badge;
			noti.sound = params.sound;
			noti.alert = params.message;
			noti.payload = params.data === undefined ? {} : params.data;

			connection.pushNotification(noti, device);
		}
	};
});
