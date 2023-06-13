import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisarComponent } from './revisar.component';

describe('RevisarComponent', () => {
  let component: RevisarComponent;
  let fixture: ComponentFixture<RevisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
