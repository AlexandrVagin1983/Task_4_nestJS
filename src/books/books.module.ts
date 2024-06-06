import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { CommonService } from './common.service';

@Module({
    controllers: [BooksController],
    providers: [BooksService, CommonService],
    exports: [BooksService]
})

export class BooksModule {}