import React from "react";
import { Layout, Slide, Text, SlideSet, Heading, Fill, Appear, List, ListItem } from "spectacle";
import { myself as data } from "../data/sections";
import { black, grey, primary } from "../data/colors";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  uha: require("../../assets/images/iut.png"),
  iut: require("../../assets/images/uha.png")
};

preloader(images);

const styles = {
  textTransform: "capitalize",
  marginBottom: "90px"
};

export default function myself() {
  return (
    <SlideSet bgColor={primary}>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
        <Heading size={2} fit caps lineHeight={1} textColor={data.color}>
          {data.title}
        </Heading>
        <Text size={1} textColor={"black"}>{ data.subtitles }</Text>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Text fit textColor={"black"}>Jonathan Giamporcaro</Text>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Text textSize="2rem" textColor={grey} margin="30px 0">
            Développeur web
          </Text>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
        <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Heading size={6} textColor={black}>
              Licence chimie
            </Heading>
            <img src={images.uha} style={{ width: "150px", alignSelf: "center" }} />
            <Text textColor={grey} >
              2013 - 2016
            </Text>
          </Fill>
          <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Heading size={6} textColor={black}>
              Licence TAIS D-web
            </Heading>
            <img src={images.iut} style={{ width: "150px", alignSelf: "center" }}/>
            <Text textColor={grey} >
              2016 - 2017
            </Text>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          {"Mes attentes"}
        </Heading>
        <List>
          <Appear><ListItem textColor={grey}>Acquérir des bases solides</ListItem></Appear>
          <Appear><ListItem textColor={grey}>Apprendre la rigueur du métier</ListItem></Appear>
          <Appear><ListItem textColor={grey}>Utiliser un workflow intelligent</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          {"Mes entretiens d'embauche"}
        </Heading>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <img src={images.uha}/>
            </Fill>
          </Appear>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <img src={images.uha}/>
            </Fill>
          </Appear>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <img src={images.uha}/>
            </Fill>
          </Appear>
        </Layout>
      </Slide>
    </SlideSet>
  );
}
