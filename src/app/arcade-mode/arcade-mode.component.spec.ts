import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcadeModeComponent } from './arcade-mode.component';

describe('ArcadeModeComponent', () => {
  let component: ArcadeModeComponent;
  let fixture: ComponentFixture<ArcadeModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArcadeModeComponent]
    });
    fixture = TestBed.createComponent(ArcadeModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
