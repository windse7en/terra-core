# Terra Icon

The terra-icon component is used to visually represent a literal or symbolic object intended to initiate an action, communicate a status, or navigate the workflow.

## Getting Started

- Install from [npmjs](https://www.npmjs.com)
  - `npm install terra-icon`
  - `yarn install terra-icon`

## Usage
SVGs in terra-icon are intended to be imported using the [terra-react-svg-loader](https://github.cerner.com/terra/terra-react-svg-loader).
```js
import DeviceAlert from 'terra-icon/lib/icon/static/deviceAlert.svg'

<DeviceAlert />
```

### Color

By default, all Terra icons have a [fill](https://css-tricks.com/almanac/properties/f/fill/) styled to [currentColor](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_keyword).
This allows the color of icons to be set by [color property](https://developer.mozilla.org/en-US/docs/Web/CSS/color), similar to how you would color font-icons.

Specific icons come with predefined colors which should not be changed. Cerner has defined a meaning behind the combination of these icons and their set color.

The following code is an example of how to add color (#C00) to an icon using a custom class:

```css
.u-text-danger {
  color: #C00;
}
```

```jsx
<MyIcon className="u-text-danger" />
```

### Sizing

If an SVG has height and width attributes, the icon will default to the height and width values provided by the SVG.

The following code will default to the height and width provided in the SVG.

```jsx
<MyIcon />
```

If an SVG does not have height or width attributes, the icon will default to be styled with a `width` and `height` of `1em`. By sizing the icons with em units, it allows icons to scale based on font-size, similar to how you would size font-icons.

The following code is an example of how to size an icon to 30px using a custom class.

```
.u-text-large {
  font-size: 30px;
}
```

```jsx
<MyIcon class="u-text-large" />
```

Icons can also be sized using React props. The following code is an example of how to size an icon to 30px using React props. Setting the height and width as a React prop will override all other sizing.

```jsx
<MyIcon height="30" width="30" />
```

Priority of sizing icons
1. React prop width and height.
2. SVG file width and height.
3. Default to 1em and will scale with font-size.


### Bidirectionality

Some icons will mirror when `dir="rtl"`. The mirror behavior of all icons in the terra-icon repository has been determined already. If an SVG has the css class `is-bidi`, it will mirror when `dir="rtl"`. Nothing needs to be done if you are using an SVG from terra-icon.

If you are using an SVG outside of this repository, you can also specify an icon to mirror when dir="rtl" by adding the prop `isBidi`.

The following code is an example of how to set an icon to mirror when dir="rtl".

```jsx
<MyIcon isBidi />
```

If you need help determining if an icon should mirror on RTL, [Material Design](https://material.io/guidelines/usability/bidirectionality.html#bidirectionality-rtl-mirroring-guidelines) provides documentation on RTL behavior.
