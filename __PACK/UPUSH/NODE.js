UPUSH.ANDROID_PUSH=METHOD(()=>{var e=require("fcm-node");let n;return void 0!==NODE_CONFIG.UPUSH&&void 0!==NODE_CONFIG.UPUSH.Android&&(n=new e(NODE_CONFIG.UPUSH.Android.serverKey)),{run:e=>{let i=e.regId,t=e.title,O=e.message;n.send({to:i,notification:{title:t,body:O}},(e,n)=>{})}}}),UPUSH.IOS_PUSH=METHOD(()=>{let e,n=require("@parse/node-apn");if(void 0!==NODE_CONFIG.UPUSH&&void 0!==NODE_CONFIG.UPUSH.IOS)try{e=new n.Provider({cert:READ_FILE({path:NODE_CONFIG.UPUSH.IOS.certFilePath,isSync:!0}),key:READ_FILE({path:NODE_CONFIG.UPUSH.IOS.keyFilePath,isSync:!0}),production:NODE_CONFIG.UPUSH.isDebugMode!==!0,passphrase:NODE_CONFIG.UPUSH.IOS.password})}catch(e){UPUSH.SHOW_ERROR("IOS_PUSH",e.toString())}return{run:i=>{if(void 0!==e){let t=i.token,O=new n.Notification;O.topic=NODE_CONFIG.UPUSH.IOS.appBundleId,O.badge=i.badge,O.sound="ping.aiff",O.alert=i.message,O.payload=void 0===i.data?{}:i.data,O.pushType="alert",e.send(O,[t]).then(e=>{}).catch(e=>{UPUSH.SHOW_ERROR("IOS_PUSH",e.toString())})}}}});