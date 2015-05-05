UPUSH.ANDROID_PUSH = METHOD(function() {
	'use strict';

	var
	//IMPORT: node-gcm
	gcm = require('node-gcm'),

	// sender
	sender;

	if (NODE_CONFIG.UPUSH !== undefined && NODE_CONFIG.UPUSH.android !== undefined) {
		sender = new gcm.Sender(NODE_CONFIG.UPUSH.android.serverKey);
	}

	return {

		run : function(params) {
			//REQUIRED: params
			//REQUIRED: params.regId
			//REQUIRED: params.title
			//REQUIRED: params.message

			var
			// reg id
			regId = params.regId,

			// message
			message = new gcm.Message({
				delayWhileIdle : false,
				timeToLive : 1800,
				data : {
					title : params.title,
					message : params.message
				}
			});

			sender.send(message, [regId], 5, function(error, result) {
				// ignore.
			});
		}
	};
});
