module.exports = {
  src_folders: ["tests"],
  page_objects_path: ["tests/pageObjects"],

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost:8080/',
      desiredCapabilities: {
        browserName: "chrome"
      }
    }
  }
};