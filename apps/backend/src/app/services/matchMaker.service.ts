import { Injectable } from '@nestjs/common';
import { matchMaker } from 'colyseus';

@Injectable()
export class MatchMakerService {
  constructor() {}

  async queryRoom(room: string) {
    return await matchMaker.query({ name: room });
  }
}
