import { BlurView } from "@react-native-community/blur";
import { Box, Image, VStack, ZStack, Text, HStack } from "native-base";
import React from "react";
import { Header } from "../components/Header";
import Input from "../components/Input";


function Payment() {
    return (
        <VStack flex={1}
            bg={{
                linearGradient: {
                    colors: ['darkpurple', 'middleblue'],
                    start: [0, 0.3],
                    end: [0, 1]
                }
            }}
            

            px={6}
        >
            <Header
                title="Payment method"
                mostraBotao
            // mostraBotao={true}
            />
            <ZStack
                w='full'
                h={200}
            >
                <Image source={require('../assets/card.png')} w={332} h={200} alt="Card" opacity={0.8} />
                <HStack px={4} w='full' mt={4} justifyContent='space-between'>
                    <Image
                        source={require('../assets/wifi.png')} w={5} h={5} alt="wifi"
                    />
                    <Image
                        source={require('../assets/visa.png')}
                        w={12.0}
                        h={4}
                        mr={4}
                        alt='bandeira cartão'
                    />
                </HStack>
                <VStack
                    w='full'
                    px={4}>
                    <Text
                        color='white'

                        fontSize='22'
                        mt={16}
                        letterSpacing='2xl'
                        fontFamily={'heading'}
                    >1234 5678 9012 3456</Text>
                    <Text
                        color='white'
                        fontSize='10'
                        opacity={0.5}
                    >
                        Cardholder name
                    </Text>
                    <Text
                        color='white'
                        fontSize='16'
                        fontFamily={'heading'}
                    >
                        Rian Valente
                    </Text>
                    <HStack alignItems={"flex-end"} w='full'>
                        <VStack>
                            <Text
                                color='white'
                                fontSize='10'
                                opacity={0.5}
                            >
                                Expiration date
                            </Text>
                            <Text
                                color='white'
                                fontSize='16'
                                fontFamily={'heading'}
                            >
                                14/10
                            </Text>
                        </VStack>
                        <VStack ml={8}>
                            <Text
                                color='white'
                                fontSize='10'
                                opacity={0.5}
                            >
                                CVC
                            </Text>
                            <Text
                                color='white'
                                fontSize='16'
                                fontFamily={'heading'}
                            >
                                123
                            </Text>
                        </VStack>
                        <Image source={require('../assets/chip.png')}
                            w={30}
                            h={25}
                            ml={32}
                        />

                    </HStack>
                </VStack>
            </ZStack>

            <Input
            placeholder="Cardnumber"
            pin
            />

        </VStack>
    );
}

export default Payment;