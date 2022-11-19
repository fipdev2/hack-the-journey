import { Button as NBButton, IButtonProps, Text } from 'native-base'

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
            fontSize={'21'}
            color='white'
            >
                {text}
            </Text>
        </NBButton>
    );
}

export default Button;