/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
/* eslint-enable import/no-extraneous-dependencies */

import GithubSVG from './custom_icons/github.svg';
import FontAwesomeSVG from './custom_icons/font-awesome.svg';
import GrommetSVG from './custom_icons/grommet.svg';
import RedditSVG from './custom_icons/reddit.svg';

storiesOf('Custom SVG', module)
  .add('Github', () => (
    <GithubSVG />
  ))
  .add('Github bidi', () => (
    <GithubSVG isBidi />
  ))
  .add('Font Awesome', () => (
    <FontAwesomeSVG />
  ))
  .add('Font Awesome bidi', () => (
    <FontAwesomeSVG isBidi />
  ))
  .add('Grommet', () => (
    <GrommetSVG />
  ))
  .add('Grommet bidi', () => (
    <GrommetSVG isBidi />
  ))
  .add('Reddit', () => (
    <RedditSVG />
  ))
  .add('Reddit bidi', () => (
    <RedditSVG isBidi />
  ));
