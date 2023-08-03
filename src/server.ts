import { Server } from 'http';
import mongoose from 'mongoose';

import app from './app';
import config from './config';
import { errorLogger, infoLogger } from './shared/logger';

process.on('uncaughtException', error => {
  errorLogger.error(error);
  process.exit(1);
});

let server: Server;

// Database connection
async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    infoLogger.info('Successfully database connected!');

    // Start the server
    server = app.listen(config.port, () => {
      infoLogger.info(`Server is running on port ${config.port}`);
    });
  } catch (error) {
    errorLogger.error('Failed to connect database', error);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

main();

process.on('SIGTERM', () => {
  infoLogger.info('SIGTERM is received!');
  if (server) {
    server.close();
  }
});
