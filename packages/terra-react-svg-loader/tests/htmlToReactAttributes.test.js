import htmlToReactAttributes from '../src/htmlToReactAttributes';

// Enforced rules can be found here: https://facebook.github.io/react/docs/dom-elements.html
describe('htmlToReactAttributes', () => {
  it('should transform class to className', () => {
    expect(htmlToReactAttributes('class')).toBe('className');
  });

  it('should transform for to htmlFor', () => {
    expect(htmlToReactAttributes('for')).toBe('htmlFor');
  });

  it('should camelCase fill-rule', () => {
    expect(htmlToReactAttributes('fill-rule')).toBe('fillRule');
  });

  it('should not transform aria-', () => {
    expect(htmlToReactAttributes('aria-role')).toBe('aria-role');
  });

  it('should not transform data-', () => {
    expect(htmlToReactAttributes('data-columns')).toBe('data-columns');
  });
});
