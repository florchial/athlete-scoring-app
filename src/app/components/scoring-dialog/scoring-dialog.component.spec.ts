import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringDialogComponent } from './scoring-dialog.component';

describe('ScoringDialogComponent', () => {
  let component: ScoringDialogComponent;
  let fixture: ComponentFixture<ScoringDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoringDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoringDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
