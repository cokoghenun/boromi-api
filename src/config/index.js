if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const baseConfig = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  env: process.env.NODE_ENV || 'development',
  secrets: {
    jwt: process.env.JWT_SECRET,
    jwtExp: '100d'
  }
}

export default baseConfig
