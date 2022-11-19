import { Box, HStack, Icon, Input as NBInput } from 'native-base'
import React from 'react';
import { FontAwesome5, Fontisto, MaterialIcons } from '@expo/vector-icons'

interface InputProps {
    placeholder: string;
    date?: boolean;
    plane?: boolean;
    pin?:boolean;
}


function Input({ placeholder, date, plane ,pin}: InputProps) {
    return (
        <HStack w='full'
            borderWidth={1}
            borderColor='white'
            borderRadius={30}
            alignItems='center'
            px={4}
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
                color='white' />
        </HStack>

    );
}

export default Input;