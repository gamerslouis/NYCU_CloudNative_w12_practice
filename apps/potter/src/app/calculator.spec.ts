import { Calculator } from './calculator';

describe('Calculator', () => {
  let calculator: Calculator = new Calculator();

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should create an instance', () => {
    expect(calculator).toBeTruthy();
  });

  it('should return origin price if only buy one book', () => {
    expect(calculator.cal([1, 0, 0, 0, 0])).toBe(100);
    expect(calculator.cal([0, 1, 0, 0, 0])).toBe(100);
    expect(calculator.cal([0, 0, 1, 0, 0])).toBe(100);
    expect(calculator.cal([0, 0, 0, 1, 0])).toBe(100);
    expect(calculator.cal([0, 0, 0, 0, 1])).toBe(100);
  });

  it('should return origin price if only buy one kind of books', () => {
    expect(calculator.cal([2, 0, 0, 0, 0])).toBe(200);
    expect(calculator.cal([0, 3, 0, 0, 0])).toBe(300);
    expect(calculator.cal([0, 0, 4, 0, 0])).toBe(400);
    expect(calculator.cal([0, 0, 0, 5, 0])).toBe(500);
    expect(calculator.cal([0, 0, 0, 0, 6])).toBe(600);
  });

  test('Simple Discounts', () => {
    expect(calculator.cal([1, 1, 0, 0, 0])).toBe(190);
    expect(calculator.cal([1, 1, 0, 1, 0])).toBe(270);
    expect(calculator.cal([1, 1, 1, 0, 1])).toBe(320);
    expect(calculator.cal([1, 1, 1, 1, 1])).toBe(375);
  });

  test('Several Discounts', ()=>{
    expect(calculator.cal([2, 1, 0, 0, 0])).toBe(290);
    expect(calculator.cal([2, 2, 0, 0, 0])).toBe(380);
    expect(calculator.cal([2, 1, 2, 1, 0])).toBe(510);
    expect(calculator.cal([1, 2, 1, 1, 1])).toBe(475);
  })
});
