import fs from 'fs';
import transformChildren from '../src/transformChildren';

describe('htmlToReactAttributes', () => {
  it('should return the svg children as string with jsx attributes', () => {
    const alertSvg = fs.readFileSync('tests/icons/alert.svg', 'utf-8');
    document.body.innerHTML = alertSvg;
    expect(transformChildren(document.body.children[0])).toMatchSnapshot();
  });

  it('should return the svg children as string with jsx attributes', () => {
    const guitarSvg = fs.readFileSync('tests/icons/guitar.svg', 'utf-8');
    document.body.innerHTML = guitarSvg;
    expect(transformChildren(document.body.children[0])).toMatchSnapshot();
  });

  it('should return the svg children as string with jsx attributes', () => {
    const redditSvg = fs.readFileSync('tests/icons/reddit.svg', 'utf-8');
    document.body.innerHTML = redditSvg;
    expect(transformChildren(document.body.children[0])).toMatchSnapshot();
  });
});

