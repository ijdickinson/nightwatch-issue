// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': browser => {
    browser
      .url('https://google.com')
      .waitForElementPresent('h1', 5000)
      .end()
  }
}
