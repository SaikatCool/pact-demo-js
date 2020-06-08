import {TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {PactWeb, Matchers} from '@pact-foundation/pact-web';
import { DogService } from './dog.service';

describe('Dog service contract tests', () => {
  let provider: PactWeb;


  let dogService: DogService;

  beforeAll(async (done) => {
        provider = new PactWeb({
            port: 1234,
            host: '127.0.0.1',
            log: '.\\log\\pact.log',
            logLevel: 'warn',
            dir: '.\\pacts',
            spec: 2
        });
          // required for slower CI environments
        setTimeout(done, 2000);

          // Required if run with `singleRun: false`
        await provider.removeInteractions();
    });

  afterEach(async () => {
        await provider.verify();
    });

  afterAll(async () => {
        return await provider.finalize();
    });

  beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [
              DogService
            ]
          });
    });

  describe('Contract tests', () => {
      beforeAll(async () => {
        // set up Pact interactions
        await provider.addInteraction({
          state: 'dogs exist',
          uponReceiving: 'get all dogs',
          withRequest: {
              method: 'GET',
              path: '/dogs',
              headers: {
                Accept: 'application/json, text/plain, */*'
              }
          },
          willRespondWith: {
              status: 200,
              headers: {
                  'Content-Type': 'application/json; charset=utf-8'
              },
              body: Matchers.eachLike({
                  avatar: Matchers.like('some image url'),
                  title: Matchers.like('German Shepard'),
                  subTitle: Matchers.like('This is German Shepard'),
                  imageUrl: Matchers.like('some image url'),
                  description: 'Lorem ipsum'

              }, {min: 5}),
          },
      });
      });

      it('Dog details exist', async () => {
        dogService = TestBed.inject(DogService);
        dogService.getDogs(provider.mockService.baseUrl).subscribe((response) => {
            expect(response).toBeDefined();
          });

    });
    });
});

