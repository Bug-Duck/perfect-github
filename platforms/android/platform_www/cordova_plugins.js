cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-secure-storage.SecureStorage",
      "file": "plugins/cordova-plugin-secure-storage/www/securestorage.js",
      "pluginId": "cordova-plugin-secure-storage",
      "clobbers": [
        "SecureStorage"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-secure-storage": "3.0.2",
    "cordova-plugin-console": "1.1.0"
  };
});