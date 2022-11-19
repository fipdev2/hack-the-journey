import { Button as NBButton, IButtonProps, Text } from 'native-base'
import React from 'react';

interface ButtonProps extends IButtonProps {
    text: string,
}


function Button({ text, ...rest }: ButtonProps) {
    return (
        <NBButton
        w={'full'}
        h={12}
        bg={'lightblue'}
            _loading={{ _spinner: { color: 'white' } }}
            {...rest}
        >
            <Text
            fontFamily={'heading'}
            fontSize={'18'}
            color='white'
            >
                {text}
            </Text>
        </NBButton>
    );
}

export default Button;