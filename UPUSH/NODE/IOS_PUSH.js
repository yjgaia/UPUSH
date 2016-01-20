UPUSH.IOS_PUSH = METHOD(function() {
	'use strict';

	var
	//IMPORT: apn
	apn = require('apn'),

	// connection
	connection;

	if (NODE_CONFIG.UPUSH !== undefined && NODE_CONFIG.UPUSH.ios !== undefined) {

		connection = new apn.Connection({
			cert : NODE_CONFIG.UPUSH.ios.certFilePath,
			key : NODE_CONFIG.UPUSH.ios.keyFilePath,
			production : NODE_CONFIG.UPUSH.isDebugMode !== true,
			passphrase : NODE_CONFIG.UPUSH.ios.password
		});
	}

	return {

		run : function(params) {
			//REQUIRED: params
			//REQUIRED: params.token
			//OPTIONAL: params.badge
			//OPTIONAL: params.sound
			//REQUIRED: params.message
			//OPTIONAL: params.data

			var
			// token
			token = params.token,

			// device
			device = new apn.Device(token),

			// noti
			noti = new apn.Notification();

			noti.badge = params.badge;
			noti.sound = params.sound;
			noti.alert = params.message;
			noti.payload = params.data === undefined ? {} : params.data;

			connection.pushNotification(noti, device);
		}
	};
});
