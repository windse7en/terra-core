import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from 'terra-collapsible-button-view/docs/README.md';

// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import CollapsibleButtonViewSrc from '!raw-loader!terra-collapsible-button-view/src/CollapsibleButtonView';

// Example Files
import CollapsibleButtonViewDemo from './CollapsibleButtonViewDemo';

const CollapsibleButtonViewExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h2 id="example">Example</h2>
    <CollapsibleButtonViewDemo />
  </div>
);

export default CollapsibleButtonViewExamples;
