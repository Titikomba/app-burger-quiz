import server from 'server'
import expressApp from './app'

// We need to define our function name for express routes to set the correct base path
const functionName = 'server'

// Initialize express app
const app = expressApp(functionName)

// Export lambda handler
exports.handler = serverless(app)
