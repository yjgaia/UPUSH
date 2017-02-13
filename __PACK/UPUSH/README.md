# UPUSH
모바일 기기로 푸시 메시지를 보내는 기능을 담고 있습니다.

## 설정
```javascript
BOOT({
	NODE_CONFIG : {
		
		UPUSH : {
			android : {
				serverKey : '{{서버 키}}'
			},
			ios : {
				certFilePath : '{{cert 파일 경로}}',
				keyFilePath : '{{key 파일 경로}},
				password : '{{비밀번호}}'
			}
		}
	}
});
```

## `UPUSH.ANDROID_PUSH({regId:, data:})`
안드로이드 기기를 대상으로 푸시메시지를 발송합니다.
```javascript
UPUSH.ANDROID_PUSH({
	regId : pushKeyData.androidKey,
	data : {
		message : message,
		ntf_title : ntf_title,
		ntf_message : ntf_message
	}
});
```

## `UPUSH.IOS_PUSH({badge:, token:, sound:, message:})`
iOS 기기를 대상으로 푸시메시지를 발송합니다.
```javascript
UPUSH.IOS_PUSH({
	badge : badgeCount,
	token : pushKeyData.iosKey,
	sound : 'ping.aiff',
	message : message
});
```

## 라이센스
[MIT](LICENSE)

## 작성자
[Young Jae Sim](https://github.com/Hanul)