import {
  Box,
  VStack,
  Image,
  Text,
  Stack,
  Container,
  View,
  Icon,
  IconButton,
} from "native-base";
import React from "react";
import Button from "../components/Button";
import { FontAwesome5, SimpleLineIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function ExploreFrance() {
  const { navigate } = useNavigation();

  return (
    <VStack
      flex={1}
      bg={{
        linearGradient: {
          colors: ["darkpurple", "middleblue"],
          start: [0, 0],
          end: [0, 1],
        },
      }}
      justifyContent={"space-around"}
      alignItems={"center"}
      paddingBottom={20}
    >
      <Container marginTop="10%">
        <Text fontSize={"lg"} fontFamily={"thin"} color="white">
          Explore
        </Text>
      </Container>
      <View flexDirection={"row"} justifyContent={"space-between"}>
        <View justifyContent={"center"}>
          <TouchableOpacity
            onPress={() => {
              navigate("explorejapan");
            }}
          >
            <Icon
              as={FontAwesome5}
              name={"chevron-circle-left"}
              size={"xl"}
              opacity={"0.5"}
            />
          </TouchableOpacity>
        </View>

        <Image
          width={"228"}
          height={"481"}
          source={require("../assets/Paris.png")}
          alt="logo"
        />
        <View justifyContent={"center"}>
          <TouchableOpacity
            onPress={() => {
              navigate("explorejapan");
            }}
          >
            <Icon
              as={FontAwesome5}
              name={"chevron-circle-right"}
              size={"xl"}
              opacity={"0.5"}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Text fontFamily={"heading"} color={"white"} fontSize={"xl"}>
        France
      </Text>
      <Button
        text="Confirm Location"
        mt={2}
        leftIcon={<Icon as={SimpleLineIcons} name="location-pin" />}
        width={"67%"}
        borderRadius={"10"}
        fontSize={"21"}
        onPress={() => {
          //navigate('/')
        }}
      />
    </VStack>
  );
}
export default ExploreFrance;
