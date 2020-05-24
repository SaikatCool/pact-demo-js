
const { Verifier } = require('@pact-foundation/pact');


describe("Pact Verification", () => {
    it("validates the expectations of UI", () => {
        const opts = {
            logLevel: "INFO",
            providerBaseUrl: "http://localhost:3000",
            provider: "dogservice",
            providerVersion: "0.0.1",
            pactBrokerUrl: process.env.pact_broker_url || "http://localhost:8081",
            pactBrokerUsername: process.env.pact_broker_username || 'pact_workshop',
            pactBrokerPassword: process.env.pact_broker_password || 'pact_workshop',
            publishVerificationResult: true
        };

        return new Verifier(opts).verifyProvider().then(output => {
            console.log(output);
        });
    }, 60000);
});