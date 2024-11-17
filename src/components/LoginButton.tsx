import React from "react";
import { Button } from '@chakra-ui/react';

interface LoginButtonProps{
    provider : 'kakao' | 'google', // 로그인 가능한 제공자 타입 지정.
    onClick: () => void;
}


const LoginButton: React.FC<LoginButtonProps> = ({ provider, onClick }) => {
    const getButtonText = () =>{
        switch (provider) {
            case "kakao":
                return "카카오 로그인";
            case "google":
                return "구글 로그인";
            default :
                return '로그인';
        }
    };

    const getButtonColor = () =>{
        switch (provider){
            case "kakao":
                return 'yellow';
            case "google":
                return 'blue';
            default :
                return 'teal';
        }
    }

    return (
        <Button colorScheme={getButtonColor()} width="100%" onClick={onClick}>
            {getButtonText()}
        </Button>
    );
};


export default LoginButton;