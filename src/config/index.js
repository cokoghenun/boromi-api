import { merge } from 'lodash'
const env = process.env.NODE_ENV || 'development'

const baseConfig = {
  env,
  isDev: env === 'development',
  port: 4000,
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '100d'
  }
}

let envConfig = {}

switch (env) {
  case 'development':
    envConfig = require('./dev').config
    break
  case 'production':
    envConfig = require('./prod').config
    break
  default:
    envConfig = require('./dev').config
}

export default merge(baseConfig, envConfig)
