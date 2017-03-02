import React from 'react';

import GithubSVG from './custom_icons/github.svg';
import FontAwesomeSVG from './custom_icons/font-awesome.svg';
import GrommetSVG from './custom_icons/grommet.svg';
import RedditSVG from './custom_icons/reddit.svg';

const IconCustomClass = () => (
  <div>
    <GithubSVG className="github-class-name" />
    <FontAwesomeSVG className="font-awesome-class-name" />
    <GrommetSVG className="grommet-awesome-class-name" />
    <RedditSVG className="reddit-class-name" />
  </div>
);

export default IconCustomClass;
