UPUSH.ANDROID_PUSH = METHOD(() => {

	let gcm = require('node-gcm');

	let sender;

	if (NODE_CONFIG.UPUSH !== undefined && NODE_CONFIG.UPUSH.android !== undefined) {
		sender = new gcm.Sender(NODE_CONFIG.UPUSH.android.serverKey);
	}

	return {

		run : (params) => {
			//REQUIRED: params
			//REQUIRED: params.regId
			//OPTIONAL: params.data

			let regId = params.regId;

			let message = new gcm.Message({
				delayWhileIdle : false,
				timeToLive : 1800,
				data : params.data
			});

			sender.send(message, [regId], 5, (error, result) => {
				// ignore.
			});
		}
	};
});
