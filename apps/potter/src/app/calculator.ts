type Books = { [name: string]: number };

const BASE_PRICE = 100

export class Calculator {
  cal(books: Books): number {
    let totalPrice = 0
    for(const book of Object.keys(books)){
        const bookNum = books[book];
        totalPrice += bookNum * BASE_PRICE
    }
    return totalPrice
  }
}
