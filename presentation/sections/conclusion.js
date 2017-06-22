import React from "react";
import {
  Layout, Slide, Text, SlideSet, Heading, Appear, Fill, ListItem, List
} from "spectacle";
import { conclusion as data } from "../data/sections";
import { black, grey, primary } from "../data/colors";
import preloader from "spectacle/lib/utils/preloader";

const src = require("../../assets/images/iut.png");

const images = {
  caav: src
};

preloader(images);

const styles = {
  marginBottom: "90px"
};

export default function conclusion() {
  return (
    <SlideSet bgColor={primary}>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
        <Heading size={2} fit caps lineHeight={1} textColor={data.color}>
          {data.title}
        </Heading>
        <Text textColor={"black"}>{ data.subtitles }</Text>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>6. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 60px">
          Une équipe...
        </Heading>
        <Layout style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Layout style={{ justifyContent: "space-between" }}>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="3" margin="0">Formatrice</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="3" margin="0 0 0 15px">Accompagnatrice</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="3" margin="0 0 0 15px">Disponible</Text>
              </Fill>
            </Appear>
          </Layout>
          <Layout style={{ justifyContent: "space-between" }} margin="100px 0 0">
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="3" margin="0">{"À l'écoute"}</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="3" margin="0 0 0 15px">Confiante</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="3" margin="0 0 0 15px">Autonome</Text>
              </Fill>
            </Appear>
          </Layout>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>5. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            De très bonnes conditions de travail
          </Heading>
        </Layout>
        <List>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Travail en open-space avec différents métiers</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Des horaires flexibles</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">{"Un restaurant/comité d'entreprise"}</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Des ressources humaines qui nous accompagnent dans la conception de notre carrière</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Un salaire confortable</ListItem></Appear>
        </List>
      </Slide>
  </SlideSet>
  );
}
