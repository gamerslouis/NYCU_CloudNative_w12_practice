type Books = [number, number, number, number, number];

const BASE_PRICE = 100;

const DiscountRate = [0, 1, 0.95, 0.9, 0.8, 0.75];

export class Calculator {
  cal(books: Books): number {
    let bookqueue = [...books];
    bookqueue.sort();
    let totalPrice = 0;

    while (bookqueue.length > 0) {
      if (bookqueue[0] === 0) {
        bookqueue = bookqueue.splice(1);
        continue;
      }
      if (this.isAllSame(bookqueue)) {
        totalPrice +=
          BASE_PRICE *
          DiscountRate[bookqueue.length] *
          bookqueue.length *
          bookqueue[0];
        break;
      } else {
        totalPrice +=
          BASE_PRICE *
          DiscountRate[bookqueue.length] *
          bookqueue.length *
          bookqueue[0];
        const toReduce = bookqueue[0];
        bookqueue = bookqueue.map((val) => val - toReduce);
      }
    }
    return totalPrice;
  }

  isAllSame(arr: Array<number>) {
    for (const val of arr) {
      if (val !== arr[0]) return false;
    }
    return true;
  }
}
