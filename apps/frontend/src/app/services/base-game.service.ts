import * as Colyseus from 'colyseus.js';
import { environment } from '../../environments/environment';
import { from } from 'rxjs';

export class BaseGameService {
  public client = new Colyseus.Client(`ws://${environment.backend_url}`);

  constructor(public roomGame: string) {}

  joinOrCreate() {
    return from(this.client.joinOrCreate(this.roomGame));
  }
}
