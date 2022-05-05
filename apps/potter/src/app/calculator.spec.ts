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
    expect(calculator.cal({
      "a": 1
    }));
  })
});