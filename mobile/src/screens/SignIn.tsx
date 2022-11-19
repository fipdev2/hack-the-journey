import { Box, VStack, Image, Text, Center, View, Icon } from "native-base";
import Button from "../components/Button";
import { Fontisto } from '@expo/vector-icons'
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/Auth";
import React from "react";


function SignIn() {
    // const [isLoading, setIsLoading] = useState(false)

    const { signIn, usuario, isUserLoading } = useContext(AuthContext)
    console.log(usuario)

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
            justifyContent={'center'}
            alignItems={'center'}
            px={6}
        >
            <Image
                // size={'sm'}
                width={127.96}
                height={157.97}
                alignSelf={'center'}
                alt={'asdhjl'}
                source={require('../assets/logo.png')}
            />
            <Text
                fontFamily={'heading'}
                fontSize='4xl'
                color={'white'}
                lineHeight='32'
                mt={6}
                textAlign='center'
            >
                Welcome, {'\n'}passenger

            </Text>
            <Text
                fontFamily={'thin'}
                fontSize='16'
                color={'white'}
                lineHeight='18'
                mt={6}
                textAlign='center'
            >
                We help you to make the perfect {'\n'}flight for your trip, inside or outside{'\n'}
                our metaverse!

            </Text>
            <View
                mt={32}
                height='px'
                bgColor={'white'}
                width={'100%'}
                opacity={0.22}
            />
            <Button
                text="Sign in with Google"
                mt={24}
                leftIcon={<Icon as={Fontisto} name='google' />}
                isLoading={isUserLoading}
                onPress={() => signIn()}
            />
        </VStack>
    );
}

export default SignIn;

