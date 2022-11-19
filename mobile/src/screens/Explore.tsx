import { Box, VStack, Image, Text, Button, Stack, Container, View, Icon } from "native-base";
import React from "react";


function Explore () {

    return (
        <VStack
            flex={1}
            bg={{
                linearGradient: {
                    colors: ['darkpurple', 'middleblue'],
                    start: [0, 0],
                    end: [0, 1]
                }
            }}
            justifyContent={'space-around'}
            
        >
            <Container alignItems={'center'} marginTop='84'>
                <Text fontSize={'lg'} fontFamily={'heading'} color='white'>Explore</Text>
        
            </Container>
            <View 
            alignItems={'center'}>
            <Image 
            width={'228'} 
            height={'481'} 
            source={require('../assets/Paris.png')} 
            alt='logo'/>
            </View>
            <View 
            alignItems={'center'} 
            justifyContent={'flex-end'}>
            <Button  
            alignItems="center" 
            colorScheme='lightBlue' 
            width='295'>Confirm Location
            </Button>
            </View>

        </VStack>


    )
}
 export default Explore;