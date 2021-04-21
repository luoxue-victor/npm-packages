const detect = require('detect-port');

const usePort = async (port = 1234) => {
  try {
    const _port = await detect(port);

    if (_port === port) {
      return port
    } else {
      return await usePort(++port)
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = usePort