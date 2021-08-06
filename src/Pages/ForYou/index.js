import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import Profile from "../../components/Profile/Profile";
import { Text, Container, Flex, Box, Grid } from "@chakra-ui/react";
import Recommend from "../../components/Recommend";

const cardList = [
  {
    name: "Chilled Songs",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  },
  {
    name: "My Study JAM v2",
    images: "https://i.scdn.co/image/ab67706c0000da8418491675d430712448176b12"
  },
  {
    name: "Late Night Songs",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  },
  {
    name: "Deep Focus",
    images: "https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934"
  },
  {
    name: "Daily Mix 1",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  },
  {
    name: "Daily Mix 2",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  }
];

function Index() {
  const [greetings, setGreerings] = useState("");

  useEffect(() => {
    let data = new Date().getHours();
    if (data >= 19) {
      setGreerings("Good night");
    } else if (data <= 4) {
      setGreerings("Good night");
    } else if (data > 4 && data < 11) {
      setGreerings("Good morning");
    } else if (data >= 11 && data < 17) {
      setGreerings("Good afternoon");
    } else if (data >= 17 && data < 19) {
      setGreerings("Good evening");
    }
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      <Box backgroundImage="linear-gradient(#ebe0ff, white)" height="300" />
      <Box mt="-300">
        <div className={Style.navbar}>
          <Profile />
        </div>
        <Box py={3} px={5}>
          <Text
            fontSize="3xl"
            fontWeight="700"
            color="rgb(143, 145, 179)"
            fontFamily="Poppins, sans-serif"
            mb={4}
          >
            {greetings}
          </Text>
          <Grid templateColumns="repeat(3, 1fr)" gap={5}>
            {cardList.map((card, index) => (
              <Flex
                background="rgba(190, 192, 235, 0.3)"
                _hover={{ background: "rgba(223, 224, 252, 0.8)" }}
                key={index}
                pointerEvents="pointer-events"
                borderRadius="md"
              >
                <div className={Style.cardImage}>
                  <img src={card.images} alt={card.name} />
                </div>
                <Flex align="center" justify="center" ml={4}>
                  <Text
                    color="rgb(143, 145, 179)"
                    fontWeight="800"
                    fontSize="18"
                    fontFamily="Nunito, sans-serif"
                  >
                    {card.name}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Grid>
        </Box>
        <Box px={5} py={2}>
          <Text
            fontSize="xl"
            fontWeight="600"
            color="rgb(143, 145, 179)"
            fontFamily="Poppins, sans-serif"
            mb={1}
          >
            Releases for You
          </Text>
          <Recommend />
        </Box>
      </Box>
    </Container>
  );
}

export default Index;
