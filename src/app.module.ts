import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { BooksModule } from './books/books.module';
import { logger } from "./logger.middleware";
import { BooksController } from './books/books.controller';

@Module({
  imports: [BooksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer
        .apply(logger)
        .forRoutes(BooksController);
  }
}
