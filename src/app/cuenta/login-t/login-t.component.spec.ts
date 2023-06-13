import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTComponent } from './login-t.component';

describe('LoginTComponent', () => {
  let component: LoginTComponent;
  let fixture: ComponentFixture<LoginTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
