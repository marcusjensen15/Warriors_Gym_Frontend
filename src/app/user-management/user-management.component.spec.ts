import { ComponentFixture, TestBed } from '@angular/core/testing';
import { spyOnClass } from 'jasmine-es6-spies';
import { GetApiService} from "../get-api.service";

import { UserManagementComponent } from './user-management.component';

describe('UserManagementComponent', () => {
  let component: UserManagementComponent;
  let fixture: ComponentFixture<UserManagementComponent>;
  let MockUserService: jasmine.SpyObj<GetApiService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserManagementComponent ],
      providers: [ { provide: GetApiService, useFactory: () => spyOnClass(GetApiService) }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent);
    component = fixture.componentInstance;
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('should show users', () =>{
  //
  //   const mockUserService = TestBed.get(MockUserService);
  //   mockUserService.mockApiCall$.and.returnValue(of([
  //       {
  //         "_id": "123abc",
  //         "name": "Mike Jones",
  //         "email": "mikejones@test.com",
  //         "password": "xyl2345",
  //         "isAdmin": false,
  //         "isManager": false
  //       },
  //
  //       {
  //         "_id": "123def",
  //         "name": "Wayne Carter",
  //         "email": "waynecarter@test.com",
  //         "password": "xyl098",
  //         "isAdmin": false,
  //         "isManager": true
  //       },
  //
  //       {
  //         "_id": "123ghi",
  //         "name": "Mac Dre",
  //         "email": "macdre@test.com",
  //         "password": "xyl2345",
  //         "isAdmin": true,
  //         "isManager": true
  //       },
  //
  //       {
  //         "_id": "123jkl",
  //         "name": "Fat Joe",
  //         "email": "fatjoe@test.com",
  //         "password": "xyl0384",
  //         "isAdmin": false,
  //         "isManager": false
  //       }
  //   ]))
  //
  //   fixture.detectChanges();
  //
  //   expect(fixture.nativeElement.querySelectorAll('[data-test="user"]').length).toBe(3);
  // });


  // Need to write a bunch of API tests
});


