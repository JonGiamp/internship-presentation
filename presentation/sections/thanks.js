import React from "react";
import {
  Layout, Slide, Text, SlideSet, Heading, Appear, Fill
} from "spectacle";
import { thanks as data } from "../data/sections";
import { black, primary } from "../data/colors";
import preloader from "spectacle/lib/utils/preloader";

const images = {
  react: require("../../assets/images/react.png"),
  github: require("../../assets/images/github.png"),
  qr: require("../../assets/images/qr.jpg")
};

preloader(images);

export default function thanks() {
  return (
    <SlideSet bgColor={primary}>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
        <Heading size={2} fit caps lineHeight={1} textColor={data.color}>
          {data.title}
        </Heading>
        <Text textColor={"black"}>{ data.subtitles }</Text>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Layout style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Layout height="200px" style={{ justifyContent: "space-between", height: "200px" }}>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="100px" margin="0" textSize={"1.8rem"}>IUT Haguenau</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="100px" margin="0 0 0 15px" textSize={"1.8rem"}>Crédit Agricole</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="100px" margin="0 0 0 15px" textSize={"1.8rem"}>Jean Ferry</Text>
              </Fill>
            </Appear>
          </Layout>
          <Layout height="200px" style={{ justifyContent: "space-between", height: "200px" }}>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="100px" margin="0" textSize={"1.8rem"}>Clerc Emmanuel</Text>
              </Fill>
            </Appear>
            <Fill style={{ height: "200px" }}>
              <Text textColor={data.color} textAlign="center" lineHeight="100px" margin="0 0 0 15px" textSize={"2.8rem"} caps bold>MERCI</Text>
            </Fill>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="100px" margin="0 0 0 15px" textSize={"1.8rem"}>Anaïs Vogt</Text>
              </Fill>
            </Appear>
          </Layout>
          <Layout style={{ justifyContent: "space-between", height: "200px" }}>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="100px" margin="0" textSize={"1.8rem"}>Pierre Kieffer</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="100px" margin="0 0 0 15px" textSize={"1.8rem"}>Denis Roussel</Text>
              </Fill>
            </Appear>
            <Appear>
              <Fill style={{ height: "200px" }}>
                <Text textColor={black} textAlign="center" lineHeight="100px" margin="0 0 0 15px" textSize={"1.8rem"}>{"L'équipe RH"}</Text>
              </Fill>
            </Appear>
          </Layout>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Heading size={6} textColor={black} margin="0 0 45px">
          Code source disponible sur Git
        </Heading>
        <Layout style={{ alignItems: "center", justifyContent: "center" }} margin="20px 0 0">
          <img src={images.qr}/>
        </Layout>
      </Slide>
    </SlideSet>
  );
}
