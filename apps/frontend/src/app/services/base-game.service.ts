import { AuthService } from '@auth0/auth0-angular';
import * as Colyseus from 'colyseus.js';
import { environment } from '../../environments/environment';
import { defer, from, Subject, switchMap, tap } from 'rxjs';

export class BaseGameService {
  public stateChanges = new Subject();
  public roomMessages = new Subject();

  private client = new Colyseus.Client(`ws://${environment.backend_url}`);
  private currentRoom?: Colyseus.Room;

  constructor(
    public roomGame: string,
    private auth: AuthService,
    private defaultGameOptions = {}
  ) {}

  createRoom(options) {
    return this.auth.user$.pipe(
      switchMap((userObj) => {
        return from(
          this.client
            .create(this.roomGame, { ...this.defaultGameOptions, ...options, player: userObj })
            .then((room) => {
              if (this.currentRoom) {
                this.currentRoom.leave();
              }
              this.currentRoom = room;

              this.currentRoom.onStateChange((state) => this.stateChanges.next(state));
              this.currentRoom.onMessage('*', (msg) => this.roomMessages.next(msg));
            })
        );
      })
    );
  }

  getAvailableRooms() {
    return this.client.getAvailableRooms(this.roomGame);
  }
}
