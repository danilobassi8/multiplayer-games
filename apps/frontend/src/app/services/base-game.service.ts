import * as Colyseus from 'colyseus.js';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';

export class BaseGameService {
  public client = new Colyseus.Client(`ws://${environment.backend_url}`);
  private currentRoom?: Colyseus.Room;

  constructor(public roomGame: string, public defaultGameOptions = {}) {}

  createRoom(options) {
    return from(
      this.client.create(this.roomGame, { ...this.defaultGameOptions, ...options }).then((room) => {
        if (this.currentRoom) {
          this.currentRoom.leave();
        }
        console.log('Connected to new room:', room);
        this.currentRoom = room;
      })
    );
  }

  getAvailableRooms() {
    return this.client.getAvailableRooms(this.roomGame);
  }
}
