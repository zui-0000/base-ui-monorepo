/// <reference types="vite/client" />

type AppEnv = "localDev" | "dev" | "stg" | "prd";

declare const __APP_ENV__: AppEnv;

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
