import { VStack, Text, Image, Box, ZStack, Icon } from 'native-base';
import Button from '../components/Button'
import * as React from 'react';
import MiniButton from '../components/MiniButton';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



function MetaGuide() {
    const [airport, setAirport] = useState(false);
    const [isLoading, setIsLoading] = useState(false)
    const { navigate } = useNavigation()
    return (
        <VStack
            flex={1}
            px={6}
            bg={{
                linearGradient: {
                    colors: ['darkpurple', 'middleblue'],
                    start: [0, 0.3],
                    end: [1, 1]
                }
            }}
        >
            <Text
                fontFamily='heading'
                color='white'
                fontSize={32}
                textAlign='center'
                lineHeight={28}
                mt={20}
            >
                Hello,{'\n'}
                passenger!
            </Text>
            <Text
                color='white'
                fontSize={16}
                textAlign='center'
                lineHeight={16}
                mt={4}>
                Where do you want to go?
            </Text>

            <ZStack
                my={12}
                h={362}
                w='full'>
                <Image
                    source={require('../assets/map.png')}

                    w={341.94}
                    h={362}
                    alt='Map'
                />
                <MiniButton
                    onPress={() => setAirport(!airport)}
                    mt={24}
                    ml={4}
                    text='Airport'
                    rightIcon={
                        airport ?
                            <Icon

                                as={Entypo}
                                name='check' />
                            : <Icon />}
                />
                <MiniButton
                    bgColor='gray.500'
                    mt={16}
                    ml={48}
                    text='Home'
                    rightIcon={
                        <Icon
                            as={Entypo}
                            name='lock'
                        />
                    }
                />
            </ZStack>

            <Box
                height='px'
                width='full'
                bgColor='white'
                opacity={0.22}

                mb={8}
            />

            {airport ?
                <Button
                    text='Go!'
                    onPress={() => {
                        setIsLoading(true)
                        setAirport(false)
                        setIsLoading(false)
                        navigate('airport')

                    }}
                />
                :
                <Button
                    bgColor='gray.500'
                    onPress={null}
                    text='Choose a destination!'
                />
            }
        </VStack>

    );
}

export default MetaGuide;