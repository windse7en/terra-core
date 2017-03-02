import nodeToJsxNode from '../src/nodeToJsxNode';

describe('nodeToJsxNode', () => {
  it('white-listed attributes should change to jsx', () => {
    const input = '<path fill-rule="evenodd" />';
    document.body.innerHTML = input;
    expect(nodeToJsxNode(document.body.children[0])).toBe('<path fillRule="evenodd" ></path>');
    expect(nodeToJsxNode(document.body.children[0])).toMatchSnapshot();
  });
  it('non-hyphenated attributes should stay the same', () => {
    const input = '<path fill="#232" />';
    document.body.innerHTML = input;
    expect(nodeToJsxNode(document.body.children[0])).toBe('<path fill="#232" ></path>');
    expect(nodeToJsxNode(document.body.children[0])).toMatchSnapshot();
  });
  it('attribute class should change to className', () => {
    const input = '<path class="math" />';
    document.body.innerHTML = input;
    expect(nodeToJsxNode(document.body.children[0])).toBe('<path className="math" ></path>');
    expect(nodeToJsxNode(document.body.children[0])).toMatchSnapshot();
  });
});
