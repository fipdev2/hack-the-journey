import React from 'react';


import { useNavigation } from '@react-navigation/native';
import { Text, HStack, Box, Icon, ZStack } from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'



interface Props {
    title: string;
    mostraBotao: boolean;
}

export function Header({ title, mostraBotao = false }: Props) {
    const { navigate } = useNavigation();
    return (
        <ZStack w="full" h={24} bgColor="darkpurple" pb={5} mt={20}>
            {/* <HStack w="full" alignItems="center"> */}
                {
                    mostraBotao ?

                        <TouchableOpacity onPress={() => navigate('payment')} >
                            <Icon as={Feather} name='chevron-left' size={'2xl'} color='white' />
                        </TouchableOpacity>
                        :
                        <Box w={6} h={6} />
                }

                <Text color="white" fontFamily="heading" fontSize="24" textAlign="center" alignSelf={'center'}>
                    {title}
                </Text>
            {/* </HStack> */}
        </ZStack>
    );
}