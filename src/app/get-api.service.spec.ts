import { TestBed } from '@angular/core/testing';

import { GetApiService } from './get-api.service';
import { HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import { of } from 'rxjs';


describe('GetApiService', () => {
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
  });

  it('should return a list of users', () => {

    // Spy on and mock HTTP client

    // Need to mock and test delete function

    httpClient = TestBed.get(HttpClient);

    const usersMock = [
      {
        "_id": "123abc",
        "name": "Mike Jones",
        "email": "mikejones@test.com",
        "password": "xyl2345",
        "isAdmin": false,
        "isManager": false
      },

      {
        "_id": "123def",
        "name": "Wayne Carter",
        "email": "waynecarter@test.com",
        "password": "xyl098",
        "isAdmin": false,
        "isManager": true
      },

      {
        "_id": "123ghi",
        "name": "Mac Dre",
        "email": "macdre@test.com",
        "password": "xyl2345",
        "isAdmin": true,
        "isManager": true
      },

      {
        "_id": "123jkl",
        "name": "Fat Joe",
        "email": "fatjoe@test.com",
        "password": "xyl0384",
        "isAdmin": false,
        "isManager": false
      }
    ];

    spyOn(httpClient, 'get').and.returnValue(of(usersMock));

    //Use our service to get users

    let getApiService = TestBed.get(GetApiService);
    const spy = jasmine.createSpy('spy');
    getApiService.mockApiCall$().subscribe(spy);

    //Verify that the service returned mocked data

    expect(spy).toHaveBeenCalledWith(usersMock);

    //Verify that the service called the proper HTTP endpoint

    expect(httpClient.get).toHaveBeenCalledWith('assets/users.json');

  });
});
