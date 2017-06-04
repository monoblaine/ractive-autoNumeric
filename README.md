# About

This is a [Ractive.js](https://ractive.js.org/) decorator for [autoNumeric](https://github.com/autoNumeric/autoNumeric).

# Demo

http://jsfiddle.net/monoblaine/6kb433Lt/21/

# Usage

1. Include source files for ractive.js, jquery.js, autoNumeric.js, ractive-autoNumeric.js, etc.
2. Create your ractive template and the ractive instance:

## Template

```html
<div id="el"></div>

<script type="text/template" id="template">
    <input type="text" as-autoNumeric="'foo', foo">
</script>
```

## Ractive instance

```js
new Ractive({
    el: 'el',
    template: '#template',

    data: {
        foo: 123.45
    }
});
```

# TODO

* Needs to be modularized, ES6-compatible, etc.
