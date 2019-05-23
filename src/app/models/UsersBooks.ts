export class UsersBooks {
    email: string;
    books: [
     {
        bookId: number;
        bookTitle: string;
        topic: string;
        author: string;
        cost: number;
        imgUrl: string;
        issued: boolean;
      }
    ];
    key: string;
    constructor(){}
}
