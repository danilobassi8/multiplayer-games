import { Room, Client, SortOptions } from 'colyseus';
import { Logger } from '@nestjs/common';

export class MinesweeperRoom extends Room {
  static filterBy = ['difficulty'];
  static sortBy: SortOptions = { difficulty: 'asc' };

  // When room is initialized
  onCreate(options: any) {
    Logger.log('Room created', { options });
  }

  // When client successfully join the room
  onJoin(client: Client, options: any, auth: any) {
    Logger.log('Joined room');
  }

  // When a client leaves the room
  onLeave(client: Client, consented: boolean) {
    Logger.log('Room leaved');
  }

  // Cleanup callback, called after there are no more clients in the room. (see `autoDispose`)
  onDispose() {
    Logger.log('Room disposed');
  }
}
