import { Room, Client, SortOptions, ServerError } from 'colyseus';
import { Logger } from '@nestjs/common';

export class MinesweeperRoom extends Room {
  static filterBy = ['difficulty'];
  static sortBy: SortOptions = { difficulty: 'asc' };

  // When room is initialized
  onCreate(options: any) {
    this.setMetadata({ creator: options.player });
    Logger.log('Room created', { options });
  }

  // When client successfully join the room
  onJoin(client: Client, options: any, auth: any) {
    Logger.log('Joined room');
  }

  /**Simply check if the user is logged in */
  onAuth(client, options, request) {
    if (options.player) {
      return true;
    } else {
      throw new ServerError(403, 'Need to log in');
    }
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
