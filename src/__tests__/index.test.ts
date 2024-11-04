/// <reference types="jest" />
import { gotry, gotryAsync } from '../index';

describe('gotry', () => {
  test('should handle successful execution', () => {
    const [result, error] = gotry(() => 42);
    expect(result).toBe(42);
    expect(error).toBeNull();
  });

  test('should handle errors', () => {
    const [result, error] = gotry(() => {
      throw new Error('Test error');
    });
    expect(result).toBeNull();
    expect(error?.message).toBe('Test error');
  });
});

describe('gotryAsync', () => {
  test('should handle successful async execution', async () => {
    const [result, error] = await gotryAsync(async () => 42);
    expect(result).toBe(42);
    expect(error).toBeNull();
  });

  test('should handle async errors', async () => {
    const [result, error] = await gotryAsync(async () => {
      throw new Error('Test async error');
    });
    expect(result).toBeNull();
    expect(error?.message).toBe('Test async error');
  });
}); 