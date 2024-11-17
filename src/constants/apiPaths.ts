
const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL;
const KAKAO_REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
const GOOGLE_REST_API_KEY= import.meta.env.VITE_GOOGLE_REST_API_KEY;

export const API_PATHS = {
  AUTH: {
    SOCIAL_LOGIN: (provider: string) => `${SERVER_BASE_URL}/api/v1/auth/${provider}/callback`,
    LOCAL_LOGIN: `${SERVER_BASE_URL}/api/v1/auth/local`,
    KAKAO_LOGIN: (redirectUrl: string) => `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${redirectUrl}&response_type=code`,
    GOOGLE_LOGIN: (redirectUrl: string) => `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_REST_API_KEY}&redirect_uri=${redirectUrl}&response_type=code&scope=email profile`,
  },
};