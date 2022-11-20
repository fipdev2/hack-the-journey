import { VStack, Text, Icon, Box, useToast } from "native-base";
import * as React from 'react';
import Button from "../components/Button";
import { Header } from "../components/Header";
import Input from "../components/Input";
import {
    Ionicons
} from '@expo/vector-icons'
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";



function SearchFlights() {

    const [origem, setOrigem] = useState('')
    const [destino, setDestino] = useState('')
    const [dataDeIda, setDataDeIda] = useState('')
    const [dataDeVolta, setDataDeVolta] = useState('')
    const { navigate } = useNavigation()
    
    const toast = useToast()

    function createFlightData() {
        

        const flightData = {
            origem,
            destino,
            dataDeIda,
            dataDeVolta
        }

        if (!origem.trim()) {
            return toast.show({
                title: 'Please inform an origin',
                bgColor: 'red.500',
                placement: 'top'
            })
        }
        if (!destino.trim()) {
            return toast.show({
                title: 'Please inform a destination',
                bgColor: 'red.500',
                placement: 'top'
            })
        }
        if (!dataDeIda.trim()) {
            return toast.show({
                title: 'Please inform a departure date',
                bgColor: 'red.500',
                placement: 'top'
            })
        }
        toast.show({
            title: 'Exibiting available flights',
            placement: 'top'
        })
        navigate('availableflights', flightData)
    }

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

            }}>
            <Header
                title="Search flight"
                mostraBotao
            />
            <Text
                color={'white'}
                fontSize={16}
                textAlign='center'
                mb={8}
            >
                Every great journey comes {'\n'}from planning and amusement!
            </Text>
            <Input
                onChangeText={setOrigem}
                placeholder={"Enter origin"}
                mt={8}
                pin />

            <Input
                onChangeText={setDestino}
                placeholder={"Enter destination"}
                mt={8}
                plane />

            <Input
                onChangeText={setDataDeIda}
                placeholder={"Departure date"}
                mt={8}
                date />

            <Input
                onChangeText={setDataDeVolta}
                placeholder={"Return date"}
                mt={8}
                date />

            <Box
                my={8}
                height='px'
                width='full'
                bgColor='white'
                opacity={0.22}
            />
            <Button
                onPress={createFlightData}
                text="Search"
                leftIcon={
                    <Icon
                        as={Ionicons
                        }
                        name='search'
                    />
                } />
        </VStack>
    );
}

export default SearchFlights;