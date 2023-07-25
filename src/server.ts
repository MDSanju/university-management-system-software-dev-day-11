import mongoose from 'mongoose'

import app from './app'
import config from './config'
import { errorLogger, infoLogger } from './shared/logger'

// Database connection
async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    infoLogger.info('Successfully database connected!')

    // Start the server
    app.listen(config.port, () => {
      infoLogger.info(`Server is running on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('Failed to connect database', error)
  }
}

main()
