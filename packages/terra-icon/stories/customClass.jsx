/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
/* eslint-enable import/no-extraneous-dependencies */

import GithubSVG from './custom_icons/github.svg';
import FontAwesomeSVG from './custom_icons/font-awesome.svg';
import GrommetSVG from './custom_icons/grommet.svg';
import RedditSVG from './custom_icons/reddit.svg';

storiesOf('Custom Class', module)
  .add('Github', () => (
    <GithubSVG className="github-class-name" />
  ))
  .add('Font Awesome', () => (
    <FontAwesomeSVG className="font-awesome-class-name" />
  ))
  .add('Grommet', () => (
    <GrommetSVG className="grommet-awesome-class-name" />
  ))
  .add('Reddit', () => (
    <RedditSVG className="reddit-class-name" />
  ));
