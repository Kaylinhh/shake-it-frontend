import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryModeComponent } from './story-mode.component';

describe('StoryModeComponent', () => {
  let component: StoryModeComponent;
  let fixture: ComponentFixture<StoryModeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryModeComponent]
    });
    fixture = TestBed.createComponent(StoryModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
