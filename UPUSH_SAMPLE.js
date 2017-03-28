// run: nodemon UPUSH.js

require(process.env['UPPERCASE_IO_PATH'] + '/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'UPUSH_SAMPLE',
		isDevMode : true
	},
	NODE_CONFIG : {
		UPUSH : {
			isDebugMode : true,
			Android : {
				serverKey : '{{SERVER API ACCESS KEY}}'
			},
			IOS : {
				certFilePath : '{{CERT(.pem) FILE PATH}}',
				keyFilePath : '{{KEY(.pem) FILE PATH}}',
				password : '{{비밀번호 있으면 지정}}'
			}
		}
	}
});
