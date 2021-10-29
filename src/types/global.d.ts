declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly PUBLIC_PATH: string
    readonly APP_VERSION: string
  }
}
