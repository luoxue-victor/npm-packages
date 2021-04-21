### useGotty

需要安装 gotty

https://github.com/yudai/gotty

```js
const useGotty = require('use-gotty');
const server = async () => {
  const http = await useGotty(process.cwd(), ['sh'], 6666)

  console.log(http)
}
```