# [ngx-prevent-scroll](https://github.com/sergiocarneiro/ngx-prevent-scroll)

[![npm version](https://badge.fury.io/js/ngx-prevent-scroll.svg)](https://www.npmjs.com/package/ngx-prevent-scroll)

*ngx-prevent-scroll* is a simple angular directive that allows to prevent an element from scrolling **whenever the user is focusing** *(mouseenter / touchstart)* the element where this directive was applied.

-----------

# Setup

Install via npm:
```
npm install --save ngx-prevent-scroll
```

Include the alignment module in the imports list of your app's module:
```js
import { PreventScrollModule } from "ngx-prevent-scroll";

@NgModule({
    imports: [
        PreventScrollModule
    ]
})
```

-----------

# Usage

### - Self
Default case when no input is passed.

```html
<div preventScroll></div>
```

### - Body
Pass the keyword `body` as the directive's input.

```html
<body>
    <div preventScroll="body"></div>
</body>
```

### - Specific element by ID
Add an ID to the target element and then pass it as the directive's input.

```html
<body>
    <div preventScroll="content"></div>
    <div id="content"></div>
</body>
```

-----------

# Advanced

### - Dynamic target
This also works for dynamic targets without any additional configuration.

```html
<div [preventScroll]="someTarget"></div>
```