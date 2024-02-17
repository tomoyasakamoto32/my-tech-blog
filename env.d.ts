declare namespace NodeJS {
  interface ProcessEnv {
    readonly API_KEY: string;
    readonly MICROCMS_SERVICE_DOMAIN: string;
    readonly NEXT_PUBLIC_GA_ID: string;
  }
}
