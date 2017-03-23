import React from 'react';
import Button from 'terra-button';
import CollapsibleButtonView from 'terra-collapsible-button-view';

const buttonViews = [
	<Button text="Default 1" key="1" />, 
	<Button text="Default 2" key="2" />,
	<Button text="Default 3" key="3" />, 
	<Button text="Default 4" key="4" />,
	<Button text="Default 5" key="5" />, 
	<Button text="Default 6" key="6" />,
	<Button text="Default 7" key="7" />, 
	<Button text="Default 8" key="8" />, 
	<Button text="Default 9" key="9" />];

const CollapsibleButtonViewDemo = () => (
  <CollapsibleButtonView>
  	{buttonViews}
  </CollapsibleButtonView>
);

export default CollapsibleButtonViewDemo;
