import { useNavigation } from '@react-navigation/native';
import { Image, VStack, ZStack } from 'native-base';
import * as React from 'react';
import Button from '../components/Button';
import { Header } from '../components/Header';
function Airport() {
    const { navigate } = useNavigation()

    return (
        <ZStack
            flex={1}
        >
            <Image
                // bg='cover'
                alt='Cover'
                right={0}
                h='full'
                source={require('../assets/airport.gif')}
            />
            <Header
                title='Airport'
                mostraBotao
            />
            <VStack
                justifyContent='space-evenly'
                h='full'
                w='full'
                py={72}
                px={6}
                flex={1}

            >
                <Button
                    text='Search flights'
                    onPress={() => navigate('searchflights')}
                />

                <Button
                    onPress={() => navigate('explorefrance')}
                    text='Explore'
                />
            </VStack>
        </ZStack>
    );
}

export default Airport;

