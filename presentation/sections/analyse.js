import React from "react";
import {
  Layout, Slide, Text, SlideSet, Heading,
  Appear, List, ListItem/*, Table, TableRow, TableHeaderItem,
  TableItem, TableBody, TableHeader, Fill, S*/
} from "spectacle";
import { analyse as data } from "../data/sections";
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

export default function analyse() {
  return (
    <SlideSet bgColor={primary}>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
        <Heading size={2} fit caps lineHeight={1} textColor={data.color}>
          {data.title}
        </Heading>
        <Text textColor={"black"}>{ data.subtitles }</Text>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>5. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            Les points positifs
          </Heading>
        </Layout>
        <List>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Une confiance rapide de ma hiérarchie</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Une autonomie dans mon travail</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">{"Un énorme gain de temps à l'avenir pour mes collègues"}</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">{"Un nouveau serveur afin d'imaginer d'autrse projets"}</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Une opération à destination de 138 000 clients</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>5. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            Les points négatifs
          </Heading>
        </Layout>
        <List>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Des contraintes qui refusent le développement moderne (ES2015+/nodejs)</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">{"Un projet qui ne me permet pas d'acquérir de nouvelles compétences"}</ListItem></Appear>
        </List>
      </Slide>
  </SlideSet>
  );
}
