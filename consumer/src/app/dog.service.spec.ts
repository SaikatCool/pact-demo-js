import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DogService } from './dog.service';
import { Dog } from './Dog';
import { environment } from 'src/environments/environment';

describe('DogService', () => {
  let dogService: DogService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DogService
      ]
    });
    dogService = TestBed.inject(DogService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should get dogs', () => {
    const data: Dog[] = [{
      avatar: 'data:image/jpeg;base64,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',
      title: 'German Shepard',
      subTitle: 'This is German shepard',
      imageUrl: 'data:image/jpeg;base64,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',
      description: 'Lorem ipsum'
  },
  {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQncqQvpyLPhlAIO2qHlJSzJ_WiarMc4p-FCeIfjesFaPjq5Vxl&usqp=CAU',
      title: 'Golden retriever',
      subTitle: 'This is Golden retriever',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQncqQvpyLPhlAIO2qHlJSzJ_WiarMc4p-FCeIfjesFaPjq5Vxl&usqp=CAU',
      description: 'Lorem ipsum'
  }
    ];
    dogService.getDogs(environment.api_end_point).subscribe((response) => {
      expect(response).toEqual(data);
    });
    const req = httpTestingController.expectOne(environment.api_end_point + '/dogs');
    req.flush(data);
  });
});
