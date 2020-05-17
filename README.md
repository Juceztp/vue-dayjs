# vue-dayjs
[![NPM Version][npm-version-image]][npm-url] ![size] ![license]

A small wrapper for integrating dayjs to Vuejs

[Dayjs](https://github.com/iamkun/dayjs) is a minimalist (Fast 2kB) JavaScript library for modern browsers with a largely Moment.js-compatible API. If you use Moment.js, you already know how to use Day.js.


## Usage (Recommended) (Without installing this library)

plugins/Dayjs.js
```bash
import Vue from 'vue';
import dayjs from 'dayjs';

Object.defineProperties(Vue.prototype, {
    $date: {
        get() {
            return dayjs
        }
    }
});
```
main.js
```bash
//Plugins
import '@/plugins/Dayjs';
```

If you need to use an extra plugin from the dayjs library. [example](https://day.js.org/docs/en/plugin/relative-time)

plugins/Dayjs.js
```bash
import Vue from 'vue';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

Object.defineProperties(Vue.prototype, {
    $date: {
        get() {
            return dayjs
        }
    }
});
```

## Usage

```bash
npm install vue-dayjs-plugin
```


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