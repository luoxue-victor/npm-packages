## 使用

```js
const usePort = require('use-port');
const server = async () => {
  const port = await usePort(1234)

  console.log(port) // 如果被占用就是使用 1235，依次递增
}
```