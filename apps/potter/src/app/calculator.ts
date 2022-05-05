type Books = [number, number, number, number, number];

const BASE_PRICE = 100;

const DiscountRate = [0, 1, 0.95, 0.9, 0.8, 0.75];

export class Calculator {
  cal(books: Books): number {
    let bookqueue = books.filter((v) => v !== 0);
    bookqueue.sort();
    let pricequeue: Array<number> = [];

    while (bookqueue.length > 0) {
      if (bookqueue[0] === 0) {
        bookqueue = bookqueue.splice(0);
        continue;
      }
      pricequeue = pricequeue.concat(
        this.makeFilledArray(bookqueue[0], bookqueue.length)
      );
      const toReduce = bookqueue[0];
      bookqueue = bookqueue.map((val) => val - toReduce);
      bookqueue = bookqueue.filter((v) => v !== 0);
    }

    pricequeue = this.handleSpecialCaseThat44isBetterThen53(pricequeue)

    let totalPrice = 0;
    for (const val of pricequeue) {
      totalPrice += this.simpleDiscount(val);
    }

    return totalPrice;
  }

  handleSpecialCaseThat44isBetterThen53(pricequeue: Array<number>) {
    while (pricequeue.indexOf(5) !== -1 && pricequeue.indexOf(3) !== -1) {
      pricequeue = this.removeItemOnce(pricequeue, 5);
      pricequeue = this.removeItemOnce(pricequeue, 3);
      pricequeue = pricequeue.concat([4, 4]);
    }
    return pricequeue
  }

  simpleDiscount(numBookCategory: number) {
    return BASE_PRICE * DiscountRate[numBookCategory] * numBookCategory;
  }

  makeFilledArray(length: number, value: number) {
    return Array(length).fill(value);
  }

  removeItemOnce(arr: Array<number>, value: number) {
    const index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
}
