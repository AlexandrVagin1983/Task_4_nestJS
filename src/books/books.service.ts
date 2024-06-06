import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Book } from './interfaces/book.interface';
import { CommonService } from "./common.service";
import { Sbornik } from './data/Sbornik';

@Injectable()
export class BooksService {
    constructor(
        @Inject(forwardRef(() => CommonService))
        private readonly commonService: CommonService
    ) {

    }
    private readonly books: Book[] = [];

    //Добавляет новую книгу в массив
    create(book: Book) {
        this.books.push(book);
    }

    //Возвращает массив всех книг
    findAll(): Book[] {
        return this.books;
    }

    //Возвращает книгу по айди
    getBook(id: string) {
        for (let currentBook of this.books) {
            if (currentBook.id == id) {
                return currentBook;
            }
        }
    }

    //обновляет книгу в массиве
    updateBook(id: string, book: Book) {
        for (let currentBook of this.books) {
            if (currentBook.id == id) {
                currentBook = book;
            }
        }
    }
    
    //удаляет книгу в массиве:
    deleteBook(id: string) {
        for (let currentBook of this.books) {
            if (currentBook.id == id) {
                currentBook = new Sbornik;
            }
        }
    }

}