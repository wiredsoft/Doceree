import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/service/login.service';
declare var $: any;

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let router: Router;
  let loginService: LoginService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: ProfileComponent },
        ])
      ]
    })
      .compileComponents();
    router = TestBed.get(Router); // Just if we need to test Route Service functionality
    router.initialNavigation();
    loginService = TestBed.get(LoginService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('Calling Methods', () => {
    it('should onCompleteProfile method called ', () => {
      component.onCompleteProfile();
    });
    it('should tabChange method called ', () => {
      const Index = {
        selectedIndex: 1
      };
      component.tabChange(Index);
      expect(component.selectedIndex)
        .toEqual(Index.selectedIndex);
    });
    it('should tabChange method called ', () => {
      var loadSideBarForProfile = document.createElement('div');
      document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(loadSideBarForProfile);
      component.ngOnInit();
    });

  });
});
