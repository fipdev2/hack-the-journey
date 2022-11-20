import { Box, HStack, Icon, IInputProps, Input as NBInput } from 'native-base'
import React from 'react';
import { FontAwesome5, Fontisto, MaterialIcons } from '@expo/vector-icons'
import { IHStackProps, InterfaceHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import { IInputComponentType } from 'native-base/lib/typescript/components/primitives/Input/types';


interface InputProps extends IHStackProps {
    placeholder: string;
    date?: boolean;
    plane?: boolean;
    pin?: boolean;
    value?: string;
    onChangeText?: (text: string) => void
}



function Input({ placeholder, date, plane, pin, onChangeText, value, ...rest }: InputProps,
    { ...all }: IInputComponentType
) {
    return (
        <HStack w='full'
            borderWidth={1}
            borderColor='white'
            borderRadius={30}
            alignItems='center'
            px={4}
            {...rest}
        >
            {date && <Icon as={Fontisto} name={'date'} color='white' />}
            {plane && <Icon as={FontAwesome5} name={'plane-departure'} color='white' />}
            {pin && <Icon as={MaterialIcons} name={'location-pin'} color='white' />}
            <NBInput
                placeholder={placeholder}
                borderColor='none'
                borderWidth={0}
                bgColor='none'
                w='full'
                color='white'
                fontSize={16}
                onChangeText={onChangeText}
                value={value}
                {...all}
            />
        </HStack>

    );
}

export default Input;