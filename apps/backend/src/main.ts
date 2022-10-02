import { Logger } from '@nestjs/common';
import { MinesweeperRoom } from './GameRooms/Minesweeper.room';
import { NestFactory } from '@nestjs/core';
import { Server } from 'colyseus';
import { AppModule } from './app/app.module';

const GAME_ROOMS = [MinesweeperRoom];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3333;

  const gameServer = new Server();

  GAME_ROOMS.forEach((room) => {
    Logger.log(`-- Registering room: ${room.name}`);
    gameServer
      .define(room.name, room)
      .filterBy(room.filterBy || [])
      .sortBy(room.sortBy || { clients: 'desc' });
  });

  // attach Colyseus into the existing http server from NestJS
  gameServer.attach({ server: app.getHttpServer() });
  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
