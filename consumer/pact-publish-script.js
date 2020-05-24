let pact = require('@pact-foundation/pact-node');
let consumer = require('./package.json');

let publishOptions = {
    pactFilesOrDirs: [__dirname + '/pacts'],
    pactBroker: process.env.pact_broker_url || 'http://localhost:8081',
    consumerVersion: consumer.version,
    tags: ['latest'],
    pactBrokerUsername: process.env.pact_broker_username || 'pact_workshop',
    pactBrokerPassword: process.env.pact_broker_password || 'pact_workshop'
  };


  pact.publishPacts(publishOptions).then(function () {
    console.log("Pacts successfully published!");
  });