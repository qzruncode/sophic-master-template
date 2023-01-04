const subAppName = 'sophic-master-template'; // 此子应用的名称
const hasMaster = !!(window.appState && window.appState[subAppName]);

if (hasMaster) {
  window.appState[subAppName].uid = '__uid__';
}
