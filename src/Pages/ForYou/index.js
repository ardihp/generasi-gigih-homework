import React, { useEffect, useState } from "react";
import Style from "./style.module.css";
import Profile from "../../components/Profile/Profile";
import { Text } from "@chakra-ui/react";

const cardList = [
  {
    name: "Chilled Songs",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  },
  {
    name: "R&B",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  },
  {
    name: "Late Night Songs",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  },
  {
    name: "Deep Focus",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  },
  {
    name: "Instrumental",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  },
  {
    name: "Studying",
    images: "https://i.scdn.co/image/ab67706c0000da84163aeea48afe86ed0c55bfcd"
  }
];

function Index() {
  const [greetings, setGreerings] = useState("");

  useEffect(() => {
    let data = new Date().getHours();
    if (data >= 19) {
      setGreerings("Good Night");
    } else if (data <= 4) {
      setGreerings("Good Night");
    } else if (data > 4 && data < 11) {
      setGreerings("Good Morning");
    } else if (data >= 11 && data < 17) {
      setGreerings("Good Afternoon");
    } else if (data >= 17 && data < 19) {
      setGreerings("Good Evening");
    }
  }, []);

  return (
    <div className={Style.container}>
      <div
        className={Style.colorHover}
        style={{ backgroundImage: "linear-gradient(#ebe0ff, white)" }}
      ></div>
      <div className={Style.main}>
        <div className={Style.header}>
          <Profile />
        </div>
        <div className={Style.content}>
          <Text fontSize="4xl" fontWeight="900" color="rgb(143, 145, 179)" mb={4}>{greetings}</Text>
          <div className={Style.card}>
            {cardList.map((card, index) => (
              <div className={Style.cardList} key={index}>
                <div className={Style.cardImage}>
                  <img src={card.images} alt={card.name} />
                </div>
                <div className={Style.cardText}>
                  <p>{card.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
