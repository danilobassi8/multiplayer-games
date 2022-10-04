import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MatchMakerService } from './services/matchMaker.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [ MatchMakerService],
})
export class AppModule {}
