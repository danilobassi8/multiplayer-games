import * as Colyseus from 'colyseus.js';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';

export class BaseGameService {
  public client = new Colyseus.Client(`ws://${environment.backend_url}`);

  constructor(public roomGame: string, public defaultGameOptions = {}) {}

  joinOrCreateRoom(options) {
    return from(
      this.client.joinOrCreate(this.roomGame, { ...this.defaultGameOptions, ...options })
    );
  }

  createRoom(options) {
    return from(this.client.create(this.roomGame, { ...this.defaultGameOptions, ...options }));
  }

  getAvailableRooms() {
    return this.client.getAvailableRooms(this.roomGame);
  }
}
