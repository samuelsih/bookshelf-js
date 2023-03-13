import Hapi from '@hapi/hapi';
import router from './src/routes/index.js';

const launch = async (host, port) => {
  const server = Hapi.server({ port, host });
  server.route(router);

  try {
    await server.start();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error init server: ${error.message}`);
  }

  // eslint-disable-next-line no-console
  console.log(`Listening on ${server.info.host}:${server.info.port}`);
};

launch('localhost', 5000);
