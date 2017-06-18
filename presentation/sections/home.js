import React from "react";
import { Heading, Slide, Text } from "spectacle";
import { home as data } from "../data/sections";
import { primary } from "../data/colors";

export default function home() {
  return (
    <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
      <Heading size={2} fit caps lineHeight={1} textColor="black">
        {data.title}
      </Heading>
      {
        data.subtitles ?
        data.subtitles.map((sub, index) => <Text size={1} textColor={data.subColor} key={index}>{sub}</Text>) :
        ""
      }
      <Text size={1} textColor={"rgba(44, 62, 80, 0.6)"} textSize={"1.6rem"} margin="100px 0 0">Présentation entièrement développé avec ReactJS</Text>
    </Slide>
  );
}
