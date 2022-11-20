import { Button, IButtonProps, ITextProps, Text } from 'native-base';
import * as React from 'react';

type text = ITextProps



interface MBtnProps extends IButtonProps {
    text: string
}

function MiniButton({ text, ...rest }: MBtnProps,
    { ...all }: ITextProps) {
    return (
        <Button
            bgColor='lightblue'
            w={32}
            h={10}
            borderRadius={8}
            alignItems='center'
            justifyContent='center'
            _pressed={{ bg: '#155E75' }}
            {...rest}
        >
            <Text
                color='white'
                fontFamily={'heading'}
                {...all}
            >
                {text}</Text>
        </Button>

    );
}

export default MiniButton;