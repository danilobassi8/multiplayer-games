import { Controller, Get, Param } from '@nestjs/common';

import { MatchMakerService } from './services/matchMaker.service';

@Controller()
export class AppController {
  constructor(private matchMaker: MatchMakerService) {}

  @Get()
  helloWorld() {
    return 'Hello there!';
  }

  @Get('/rooms/:roomName')
  getRoomData(@Param() params) {
    return this.matchMaker.queryRoom(params.roomName);
  }
}
