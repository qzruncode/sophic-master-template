// 本地chrome调试
// /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:3001/
function registerSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/sw.js", { scope: '/' })
      .then((registration) => {
        let serviceWorker;
        if (registration.installing) {
          serviceWorker = registration.installing;
        } else if (registration.waiting) {
          serviceWorker = registration.waiting;
        } else if (registration.active) {
          serviceWorker = registration.active;
        }
        if (serviceWorker) {
          serviceWorker.addEventListener("statechange", function (e) {
            console.log("sw的状态改变：" + e.target.state);
          });
        }
      });
    navigator.serviceWorker.onmessage = (e) => {
      console.log("onmessage", e);
      const { data } = e;
      if (data.type === "FetchError") {
        // 请求失败;
      } else if (data.type === "NetWorkError") {
        // 断网
      } else if (data.type === "RefreshClient") {
        // 刷新页面，有新版本的sw安装
        location.reload();
      }
    };
  } else {
    console.log("sw不支持");
  }
}
