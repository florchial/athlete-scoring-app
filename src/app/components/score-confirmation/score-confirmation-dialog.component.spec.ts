import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreConfirmationDialogComponent } from './score-confirmation-dialog.component';

describe('ScoreConfirmationComponent', () => {
  let component: ScoreConfirmationDialogComponent;
  let fixture: ComponentFixture<ScoreConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreConfirmationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
