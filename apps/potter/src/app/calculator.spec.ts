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
});
