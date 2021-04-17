import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: SignupComponent },
        ]) 
      ]
    })
    .compileComponents();
    router = TestBed.get(Router); // Just if we need to test Route Service functionality
    router.initialNavigation();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should signup', () => {
    component.signup();
    expect(component).toBeTruthy();
  });
  it('should onCheck', () => {
    const event = 'demo'
    component.onCheck(event);
    expect(component).toBeTruthy();
  });
});
