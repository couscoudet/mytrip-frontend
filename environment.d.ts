export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_GOOGLE_API_KEY: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
