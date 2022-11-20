import { useRoute } from '@react-navigation/native';
import { VStack } from 'native-base';
import * as React from 'react';
import { Header } from '../components/Header';

interface DataProps {
    "dataDeIda": string | undefined,
    "dataDeVolta": string | undefined,
    "destino": string | undefined,
    "origem": string | undefined,
}

function AvailableFlights() {
    const route = useRoute();
    const [data, setData] = React.useState<any>({});

    React.useEffect(() => {
        setData(route.params)

    }, [])
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
            <Header
                title='Available flights'
                mostraBotao
            />
        </VStack>
    );
}

export default AvailableFlights;