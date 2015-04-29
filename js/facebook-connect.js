﻿if (!/http/i.test(window.location.protocol) && /(iPhone|iPod|iPad|Android)/.test(navigator.userAgent)) {
	CDV = typeof CDV == "undefined" ? {}

	 : CDV;
	var cordova = window.cordova || window.Cordova;
	CDV.FB = {
		init : function (e, t) {
			if (!document.getElementById("fb-root")) {
				var n = document.createElement("div");
				n.id = "fb-root";
				document.body.appendChild(n)
			}
			var r = new XMLHttpRequest;
			cordova.exec(function () {
				var e = JSON.parse(localStorage.getItem("cdv_fb_session") || '{"expiresIn":0}');
				if (e && e.expirationTime) {
					var t = (new Date).getTime();
					if (e.expirationTime > t) {
						updatedExpiresIn = Math.floor((e.expirationTime - t) / 1e3);
						e.expiresIn = updatedExpiresIn;
						localStorage.setItem("cdv_fb_session", JSON.stringify(e));
						FB.Auth.setAuthResponse(e, "connected")
					}
				}
				console.log("Cordova Facebook Connect plugin initialized successfully.")
			}, t ? t : null, "org.apache.cordova.facebook.Connect", "init", [e])
		},
		login : function (e, t, n) {
			e = e || {
				scope : ""
			};
			cordova.exec(function (e) {
				if (e.authResponse && e.authResponse.expiresIn) {
					var n = e.authResponse.expiresIn === 0 ? 0 : (new Date).getTime() + e.authResponse.expiresIn * 1e3;
					e.authResponse.expirationTime = n
				}
				localStorage.setItem("cdv_fb_session", JSON.stringify(e.authResponse));
				FB.Auth.setAuthResponse(e.authResponse, "connected");
				if (t)
					t(e)
			}, n ? n : null, "org.apache.cordova.facebook.Connect", "login", e.scope.split(","))
		},
		logout : function (e, t) {
			cordova.exec(function (t) {
				localStorage.removeItem("cdv_fb_session");
				FB.Auth.setAuthResponse(null, "notConnected");
				if (e)
					e(t)
			}, t ? t : null, "org.apache.cordova.facebook.Connect", "logout", [])
		},
		getLoginStatus : function (e, t) {
			cordova.exec(function (t) {
				if (e)
					e(t)
			}, t ? t : null, "org.apache.cordova.facebook.Connect", "getLoginStatus", [])
		},
		dialog : function (e, t, n) {
			cordova.exec(function (e) {
				if (t)
					t(e)
			}, n ? n : null, "org.apache.cordova.facebook.Connect", "showDialog", [e])
		}
	}
}
