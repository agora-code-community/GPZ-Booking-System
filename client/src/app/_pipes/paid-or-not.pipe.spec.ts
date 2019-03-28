import { PaidOrNotPipe } from './paid-or-not.pipe';

describe('PaidOrNotPipe', () => {
  it('create an instance', () => {
    const pipe = new PaidOrNotPipe();
    expect(pipe).toBeTruthy();
  });
});
