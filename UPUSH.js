// run: nodemon UPUSH.js

require(process.env['UPPERCASE_IO_PATH'] + '/BOOT.js');

BOOT({
	CONFIG : {
		isDevMode : true
	},
	NODE_CONFIG : {
		UPUSH : {
			ios : {
				certFilePath : '{{CERT(.pem) FILE PATH}}',
				keyFilePath : '{{KEY(.pem) FILE PATH}}'
			},
			android : {
				serverKey : '{{SERVER API ACCESS KEY}}'
			}
		}
	}
});
