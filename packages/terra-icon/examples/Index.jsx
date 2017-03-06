/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-site/src/PropsTable';
import Markdown from 'terra-site/src/Markdown';
import ReadMe from '../docs/README.md';
// Component Source
// eslint-disable-next-line import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions
import IconSrc from '!raw-loader!../src/Icon.jsx';
// Example Files
// import IconAria from './IconAria';
// import IconCustom from './IconCustom';
// import IconCustomClass from './IconCustomClass';
// import IconHeightWidth from './IconHeightWidth';
// import IconStatic from './IconStatic';
import IconThemeable from './IconThemeable';

const IconExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props" src={BadgeSrc} />
    <h2 id="themeable">Themeable Icons</h2>
        <IconThemeable />
    // <h2 id="static">Static Icons</h2>
    //     <IconStatic />
    // <h2 id="aria">Accessibility</h2>
    //     <IconAria />
    // <h2 id="custom-class">Custom Class</h2>
    //     <IconCustomClass />
    // <h2 id="height-width">Size</h2>
    //     <IconHeightWidth />
    // <h2 id="custom">Custom Icons</h2>
    //     <IconCustom />
  </div>
);

export default IconExamples;
