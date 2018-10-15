// eslint-disable-next-line camelcase
const selenium_port = process.env.SELENIUM_PORT || 4444

module.exports = {
  test_settings: {
    default: {
      selenium_port
    }
  },
  'selenium': {
    'port': selenium_port
  }
}
