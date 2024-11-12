import LoginButton  from "../components/LoginButton.tsx";
import { Box, Input, FormControl, FormLabel, Stack, Heading } from '@chakra-ui/react';
const Login: React.FC  = () => {

    const handleLoginClick = (provider: string) => {
        console.log(`${provider} 로그인 클릭`);
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

            {/* 카카오 로그인 버튼 */}
            <LoginButton provider="kakao" onClick={() => handleLoginClick('카카오')} />

            {/* 구글 로그인 버튼 */}
            <LoginButton provider="google" onClick={() => handleLoginClick('구글')} />
        </Stack>
    </Box>
    );
};

export default Login;