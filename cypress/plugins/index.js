/// <reference types='cypress' />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // create new config settings
    const { lighthouse, prepareAudit } = require('cypress-audit');
  const configOverride = {};
  if (config.userAgent === 'desktop') {
    configOverride.userAgent =
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9';
    configOverride.viewportWidth = 1920;
    configOverride.viewportHeight = 800;
  } else if (config.userAgent === 'mobile') {
    configOverride.userAgent =
      'Mozilla/5.0 (Linux; Android 7.0; SM-G930V Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.125 Mobile Safari/537.36';
    //configOverride.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) FxiOS/7.5b3349 Mobile/14F89 Safari/603.2.4';
    //configOverride.userAgent = 'Mozilla/5.0 (Linux; U; Android 4.4.2; en-us; SCH-I535 Build/KOT49H) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';
    configOverride.viewportWidth = 414;
    configOverride.viewportHeight = 736;
  }
    on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
    });

    on('task', {
        lighthouse: lighthouse(),
    });
  return { ...config, ...configOverride };
};


