import { insertAfter } from '../src';

describe('insertAfter', () => {
  const element = document.createElement('div');
  const after = document.createElement('p');
  element.appendChild(after);
  const child = document.createElement('p');

  it('should be inserted after', () => {
    const result = insertAfter(child, after);
    expect(result).toBeTruthy();

    expect(after.nextElementSibling).toEqual(child);
  });

  it('should not be inserted after', () => {
    const result = insertAfter(child, element);
    expect(result).toBeFalsy();
  });
});
