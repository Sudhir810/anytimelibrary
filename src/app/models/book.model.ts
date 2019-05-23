export class Book {
    bookId: number;
    bookTitle: string;
    topic: string;
    author: string;
    cost: number;
    imgUrl: string;
    issued: boolean;

    constructor(bookid: number,
       bookTitle: string,
       topic: string,
       author: string,
       cost: number,
       imgUrl: string,
       issued: boolean) {
      this.bookId    = bookid;
      this.bookTitle = bookTitle;
      this.topic     = topic;
      this.author    = author;
      this.cost      = cost;
      this.imgUrl    = imgUrl;
      this.issued    = issued;
    }
}
