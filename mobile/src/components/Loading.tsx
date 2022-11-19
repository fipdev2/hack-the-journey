import { Center, Spinner } from "native-base";
import React from "react";

function Loading() {
    return (
        <Center flex={1}
            bg={{
                linearGradient: {
                    colors: ['darkpurple', 'middleblue'],
                    start: [0, 0.3],
                    end: [0, 1]
                }
            }}>
            <Spinner color='white' />
        </Center>
    );
}

export default Loading;