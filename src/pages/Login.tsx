import React from "react";
import { Box, Input, FormControl, FormLabel, Stack, Heading } from "@chakra-ui/react";
import LoginButton from "../components/LoginButton";
import {API_PATHS} from "@/constants/apiPaths.ts";

const Login: React.FC = () => {
    const handleLoginClick = (provider: "kakao" | "google") => {
        const REDIRECT_URI = API_PATHS.AUTH.SOCIAL_LOGIN(provider);


        let loginUrl;
        if(provider === "kakao"){
            loginUrl = API_PATHS.AUTH.KAKAO_LOGIN(REDIRECT_URI);
        }else if(provider =="google"){
            loginUrl = API_PATHS.AUTH.GOOGLE_LOGIN(REDIRECT_URI);
        }else{
            loginUrl = API_PATHS.AUTH.LOCAL_LOGIN;
        }

        if (loginUrl) {
            window.location.href = loginUrl; // 로그인 페이지로 이동
        }
    };

    return (
        <Box maxWidth="500px" mx="auto" p="6" boxShadow="lg" borderRadius="md">
            <Heading as="h3" size="lg" mb="6" textAlign="center">
                로그인
            </Heading>
            <Stack spacing={2}>
                <FormControl>
                    <FormLabel htmlFor="id">아이디</FormLabel>
                    <Input id="id" type="text" />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password">비밀번호</FormLabel>
                    <Input id="password" type="password" />
                </FormControl>
                {/* 로컬 로그인 버튼 */}
                <LoginButton provider="local" onClick={() => console.log("로컬 로그인")} />
                {/* 카카오 로그인 버튼 */}
                <LoginButton provider="kakao" onClick={() => handleLoginClick("kakao")} />
                {/* 구글 로그인 버튼 */}
                <LoginButton provider="google" onClick={() => handleLoginClick("google")} />
            </Stack>
        </Box>
    );
};

export default Login;
