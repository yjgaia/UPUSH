UPUSH_SAMPLE.MAIN = METHOD({

	run : (workerData) => {

		if (workerData.id === 1) {

			UPUSH.IOS_PUSH({
				token : '{{TOKEN}}',
				badge : 1,
				sound : 'ping.aiff',
				message : 'test message'
			});

			UPUSH.ANDROID_PUSH({
				regId : '{{REGISTRATION ID}}',
				data : {
					key1 : 'test message'
				}
			});
		};
	}
});
