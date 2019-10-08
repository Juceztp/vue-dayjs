# vue-dayjs
[![NPM Version][npm-version-image]][npm-url] ![size] ![license]

A small wrapper for integrating dayjs to Vuejs

[Dayjs](https://github.com/iamkun/dayjs) is a minimalist (Fast 2kB) JavaScript library for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.

## Installation

```bash
npm install vue-dayjs-plugin
```

## Usage 

```js
import VueDayjs from 'vue-dayjs-plugin'

Vue.use(VueDayjs)
```

## Example

### JS
    this.$date('2018-08-08').format('DD/MM/YYYY');
### HTML
    <span> {{ $date('2018-08-08').format('DD/MM/YYYY') }} </span>

## License

[MIT](LICENSE)

[npm-url]: https://npmjs.org/package/vue-dayjs-plugin
[license]: https://badgen.net/npm/license/vue-dayjs-plugin
[dependencies]: https://badgen.net/npm/dependencies/vue-dayjs-plugin
[size]: https://badgen.net/packagephobia/install/vue-dayjs-plugin
[npm-version-image]: https://badgen.net/npm/v/vue-dayjs-plugin