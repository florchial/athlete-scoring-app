import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgesCountDialogComponent } from './judges-count-dialog.component';

describe('JudgesCountDialogComponent', () => {
  let component: JudgesCountDialogComponent;
  let fixture: ComponentFixture<JudgesCountDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JudgesCountDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgesCountDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
