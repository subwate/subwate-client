export const API_BASE_URL = "http://ec2-3-34-92-3.ap-northeast-2.compute.amazonaws.com:8081/";

export const API_PATHS = {
  TODOS: "/todos",
  AUTH: {
    SOCIAL_LOGIN:(provider = ":provider") => `/api/v1/auth/${provider}/callback`,
    LOCAL_LOGIN: "/api/v1/auth/local"
  },
};
