import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Sbornik } from './data/Sbornik';

@Controller('books')
export class BooksController {
    constructor(private readonly BooksService: BooksService) {}
    
    //Добавляет новую книгу:
    @Post()
    async create(@Body() createBookDto: Sbornik) {
        this.BooksService.create(createBookDto)
    }
    
    //Возвращает список всех книг:
    @Get()
    async findAll() {
        const book = new Sbornik;
        this.BooksService.create(book);
        return this.BooksService.findAll();
    }

    //Возвращает книгу по id:
    @Get()
    getBook(@Body() id: string) {
        return this.BooksService.getBook(id);
    }


}