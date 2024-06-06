import {Book} from "../interfaces/book.interface";

export class Sbornik implements Book {
    public type = 'Sbornik';
    public name = 'Учебник по физике.';
    public id = '1';
}