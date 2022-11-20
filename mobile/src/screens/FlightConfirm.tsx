import * as React from 'react';
import { VStack, Image, HStack, Text, Icon, Box } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Header } from '../components/Header';
import Button from '../components/Button';

function FlightConfirm() {
    return (
        <VStack
            px={6}
            flex={1}
            bg={{
                linearGradient: {
                    colors: ['darkpurple', 'middleblue'],
                    start: [0, 0.3],
                    end: [1, 1]
                }
            }}
        >
            <Header
                title=''
                mostraBotao={false}
            />
            <Image
                source={require('../assets/giphy.gif')}
                w={364}
                h={234.32}
                alt='Plane flying'
            />

            <HStack w='full' alignItems='center' justifyContent='center'>
                <Text
                    fontFamily={'heading'}
                    fontSize={22}
                    color='white'
                >
                    Order done!
                </Text>
                <Icon
                    color={'green.500'}
                    ml={2}
                    size={'xl'}
                    as={AntDesign}
                    name='checkcircle'
                />
            </HStack>
            <Text
                fontFamily={'thin'}
                fontSize={16}
                color='white'
                mt={2}
                mb={24}
                textAlign={'center'}
            >
                Enjoy the flight!
            </Text>
            <Box
                my={8}
                height='px'
                width='full'
                bgColor='white'
                opacity={0.22}
            />
            <Button
                text='Return to MetaGuide!'
            />
        </VStack>
    );
}

export default FlightConfirm;