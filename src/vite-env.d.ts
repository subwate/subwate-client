/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_SERVER_BASE_URL: string;
    readonly VITE_KAKAO_REST_API_KEY: string;
    readonly VITE_GOOGLE_REST_API_KEY: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}