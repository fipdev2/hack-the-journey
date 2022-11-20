import { BlurView } from "@react-native-community/blur";
import { Box, Image, VStack, ZStack, Text, HStack, Icon, useToast } from "native-base";
import React, { useState } from "react";
import Button from "../components/Button";
import { Header } from "../components/Header";
import Input from "../components/Input";
import { Fontisto } from '@expo/vector-icons'
import { api } from "../services/api";


function Payment() {
    const [cardNumber, setCardNumber] = useState('0000 0000 0000 0000');
    const [cardholder, setCardHolder] = useState('xxxxxxxxx')
    const [expiration, setExpiration] = useState('MM/AA')
    const [cvc, setCvc] = useState('000')

    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()

    async function createPayment() {
        const payment = {
            origem: '',
            destino: '',
            dataDeIda: '',
            dataDeVolta: '',
            formaDePagamento: 'cartão de crédito',
            valor: '10000',
        }
        try {
            setIsLoading(true)
            if (!cardNumber.trim()) {
                return toast.show({
                    bgColor: 'red.500',
                    title: 'Invalid card number',
                    placement: 'top'
                })
            }
            if (!cardholder.trim()) {
                return toast.show({
                    bgColor: 'red.500',
                    title: 'Please inform your name',
                    placement: 'top'
                })
            }
            await api.post('/passagem', payment)
            toast.show({
                bgColor: 'green.500',
                title: 'Payment completed successfully',
                placement: 'top'
            })

        }
        catch (e) {
            console.log(e)
            toast.show({
                bgColor: 'red.500',
                title: 'An error occured during the payment proccess',
                placement: 'top'
            })
        }
        finally {
            setIsLoading(false)
        }
    }

    return (
        <VStack
            flex={1}

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
                    >{cardNumber}</Text>
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
                        {cardholder}
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
                                {expiration}
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
                                {cvc}
                            </Text>
                        </VStack>
                        <Image source={require('../assets/chip.png')}
                            w={30}
                            h={25}
                            ml={32}
                            alt='card chip'
                        />

                    </HStack>
                </VStack>
            </ZStack>

            <Input
                mt={8}
                placeholder="Cardnumber"
                onChangeText={setCardNumber}
            />

            <Input
                mt={8}
                placeholder="Cardholder name"
                onChangeText={setCardHolder}
            />

            <HStack mt={8} w='full'>
                <Input
                    flex={1}
                    placeholder="Expiration date"
                    onChangeText={setExpiration}
                    mr={1}
                />
                <Input
                    flex={1}
                    ml={1}
                    placeholder="CVC"
                    onChangeText={setCvc}
                />
            </HStack>
            <Box
                my={8}
                height='px'
                width='full'
                bgColor='white'
                opacity={0.22}
            />
            <Button
                onPress={createPayment}
                text={"Buy ticket!"}
                rightIcon={
                    <Icon
                        as={Fontisto}
                        name="plane-ticket"
                        size='2xl'
                    />
                } />
        </VStack>
    );
}

export default Payment;