type Books = [number, number, number, number, number];

const BASE_PRICE = 100;

const DiscountRate = [0, 1, 0.95, 0.9, 0.8, 0.75];

export class Calculator {
  cal(books: Books): number {
    let bookqueue = books.filter((v) => v !== 0);
    bookqueue.sort();

    let totalPrice = 0;

    while (bookqueue.length > 0) {
      if (bookqueue[0] === 0) {
        bookqueue = bookqueue.splice(1);
        continue;
      }
      totalPrice += this.simpleDiscountTotal(bookqueue[0], bookqueue.length);
      const toReduce = bookqueue[0];
      bookqueue = bookqueue.map((val) => val - toReduce);
      bookqueue = bookqueue.filter((v) => v !== 0);
    }
    return totalPrice;
  }

  simpleDiscountTotal(numPerBook: number, numBookCategory: number) {
    return (
      BASE_PRICE *
      DiscountRate[numBookCategory] *
      (numPerBook * numBookCategory)
    );
  }
}
