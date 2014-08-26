UPUSH.IOS_PUSH = METHOD(function() {
	'use strict';

	var
	//IMPORT: apn
	apn = require('apn'),

	// connection
	connection;

	if (NODE_CONFIG.UPUSH !== undefined && NODE_CONFIG.UPUSH.ios !== undefined) {

		connection = new apn.Connection({
			gateway : 'gateway.sandbox.push.apple.com',
			cert : NODE_CONFIG.UPUSH.ios.certFilePath,
			key : NODE_CONFIG.UPUSH.ios.keyFilePath
		});
	}

	return {

		run : function(params) {
			//REQUIRED: params
			//REQUIRED: params.token
			//OPTIONAL: params.badge
			//OPTIONAL: params.sound
			//OPTIONAL: params.message
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
			noti.payload = params.data;

			connection.pushNotification(noti, device);
		}
	};
});
