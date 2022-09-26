import { SharedModule } from './../shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinesweeperComponent } from './minesweeper.component';

describe('MinesweeperComponent', () => {
  let component: MinesweeperComponent;
  let fixture: ComponentFixture<MinesweeperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [MinesweeperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MinesweeperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
