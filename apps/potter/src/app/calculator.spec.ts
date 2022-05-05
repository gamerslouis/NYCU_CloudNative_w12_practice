import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });

  it('should return origin price if only buy one book', () => {
    expect(new Calculator().cal({
      "a": 1
    }))
  })
});
