
const { Verifier } = require('@pact-foundation/pact');


describe("Pact Verification", () => {
    it("validates the expectations of UI", () => {
        const opts = {
            logLevel: "INFO",
            providerBaseUrl: "http://localhost:3000",
            provider: "dogservice",
            providerVersion: "1.0.0",
            pactUrls: [
                __dirname + '/pacts/ui-dogservice.json'
            ]
        };

        return new Verifier(opts).verifyProvider().then(output => {
            console.log(output);
        });
    }, 60000);
});