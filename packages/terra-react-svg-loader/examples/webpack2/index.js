import React from 'react';
import ReactDOM from 'react-dom';
import IconGithub from './github.svg';
import IconTerra from 'terra-icon/lib/icon/static/deviceAlert.svg';

const App = (
  <div>
    <h1>terra-react-svg-loader example</h1>
    <h2>Default</h2>
    <IconGithub />
    <h2>Specify height and width</h2>
    <IconGithub height="30" width="30" />
    <h2>SVG mirrors when dir="rtl"</h2>
    <bdo dir="rtl" >
      <IconGithub isBidi />
    </bdo>
    <h2>Add aria-label</h2>
    <IconGithub aria-label="Increased Accessibility" />
    <h2>Svg from terra-icon</h2>
    <IconTerra height="50" width="50"/>
  </div>
);

ReactDOM.render(App, document.getElementById('root'));
