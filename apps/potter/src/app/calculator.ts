type Books = [number, number, number, number, number]

const BASE_PRICE = 100

export class Calculator {
  cal(books: Books): number {
    let totalPrice = 0
    for(const bookNum of books){
        totalPrice += bookNum * BASE_PRICE
    }
    return totalPrice
  }
}
