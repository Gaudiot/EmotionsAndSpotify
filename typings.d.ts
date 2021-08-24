declare var process: Process;

interface Process{
  env: Env
}

interface Env{
  SPOTIFY_REDIRECT_URI: string,
  SPOTIFY_CLIENT_ID: string,
  SPOTIFY_CLIENT_SECRET: string,
  AZURE_KEY: string
}

interface GlobalEnvironment {
  process: Process
}
