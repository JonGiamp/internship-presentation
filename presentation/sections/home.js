import React from "react";
import {
  Heading, Slide, Text, SlideSet,
  Appear, List, ListItem
} from "spectacle";
import { home as data } from "../data/sections";
import { black, grey, primary } from "../data/colors";

export default function home() {
  return (
  <SlideSet>
    <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} notes="<h1>Test test test</h1> C'est une note">
      <Heading size={2} fit caps lineHeight={1} textColor="black">
        {data.title}
      </Heading>
      {
        data.subtitles ?
          data.subtitles.map((sub, index) => <Text size={1} textColor={data.subColor} key={index}>{sub}</Text>) :
        ""
      }
      <Text size={1} textColor={"rgba(44, 62, 80, 0.6)"} textSize={"1.6rem"} margin="100px 0 0">Présentation entièrement développée avec ReactJS et hébergée sur Zeit</Text>
    </Slide>
    <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
      <Heading size={6} textColor={black} margin="0 0 45px">
        Plan oral
      </Heading>
      <List>
        <Appear><ListItem textColor={grey}>Présentation</ListItem></Appear>
        <Appear><ListItem textColor={grey}>Mon entreprise</ListItem></Appear>
        <Appear><ListItem textColor={grey}>Présentation de la mission</ListItem></Appear>
        <Appear><ListItem textColor={grey}>Description de la mission</ListItem></Appear>
        <Appear><ListItem textColor={grey}>Analyse de la mission</ListItem></Appear>
        <Appear><ListItem textColor={grey}>Conclusion</ListItem></Appear>
        <Appear><ListItem textColor={grey}>Remerciements</ListItem></Appear>
      </List>
    </Slide>
  </SlideSet>
  );
}
