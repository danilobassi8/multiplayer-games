import { GameConfig, Matrix } from './../../../../../libs/minesweeper.lib';
import { TestBed } from '@angular/core/testing';

import { MinesweeperDifficulties, MinesweeperService } from './minesweeper.service';

describe('MinesweeperService', () => {
  let service: MinesweeperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinesweeperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Should correctly generate bombs', () => {
    MinesweeperDifficulties.forEach((confString) => {
      console.log({ confString, service });
      const conf = service.gameConfig[confString] as GameConfig;
      const matrix = new Matrix(conf.size, 'test', conf);

      for (let i = 0; i < 1; i) {
        it(`bombs generation with ${confString} config (n=${i})`, () => {
          let totalBombs = 0;
          matrix.forEach((row) =>
            row.forEach((col) => {
              if (col.bomb) totalBombs++;
            })
          );

          expect(totalBombs).toBe(conf.bombs);
        });
      }
    });
  });
});
