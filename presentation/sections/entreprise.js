import React from "react";
import {
  Layout, Slide, Text, SlideSet, Heading, Fill,
  Appear, List, ListItem } from "spectacle";
import { entreprise as data } from "../data/sections";
import { black, grey, primary } from "../data/colors";
import preloader from "spectacle/lib/utils/preloader";

const src = require("../../assets/images/iut.png");

const images = {
  caav: src,
  fort: src,
  bastien: src,
  anais: src,
  pierre: src,
  emmanuel: src,
  jon: src
};

preloader(images);

const styles = {
  textTransform: "capitalize",
  marginBottom: "90px"
};

export default function entreprise() {
  return (
    <SlideSet bgColor={primary}>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
        <Heading size={2} fit caps lineHeight={1} textColor={data.color}>
          {`Mon ${data.title}`}
        </Heading>
        <Text size={1} textColor={"black"}>{ data.subtitles }</Text>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>2. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            Crédit Agricole Alsace Vosges
          </Heading>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }} margin="20px 0 0">
          <img src={images.caav}/>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Text textSize="2rem" textColor={grey} margin="30px 0 0">
            Une banque coopérative et mutualiste
          </Text>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Text textSize="2rem" textColor={grey}>
            Fait partit du réseau des 39 caisses régionales
          </Text>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
        <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Heading size={6} textColor={black}>
              Pierre fort
            </Heading>
            <img src={images.fort} style={{ width: "150px", alignSelf: "center" }} />
            <Text textColor={grey} >
              Direction Générale
            </Text>
          </Fill>
          <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Heading size={6} textColor={black}>
              Francis Bastien
            </Heading>
            <img src={images.bastien} style={{ width: "150px", alignSelf: "center" }}/>
            <Text textColor={grey} >
              Direction Générale Adjointe
            </Text>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Quelques chiffres
        </Heading>
        <List>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>51 caisses locales</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>1 500 collaborateurs</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>7 directions distinctes</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>466 000 clients dont 138 000 sociétaires</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>2. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            {"Qu'est-ce qu'un sociétaire ?"}
          </Heading>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Text textSize="2rem" textColor={grey}>
            Un sociétaire est un acteur du Crédit Agricole qui détient, sous forme de parts sociales, une partie du capital des Caisses locales.
          </Text>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>2. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Quels sont ces avantages ?
        </Heading>
        <List>
          <Appear><ListItem textColor={grey} textSize={"1.8rem"}>Il bénéficie de services qui lui sont réservés</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"1.8rem"}>Il est informé sur la gestion de sa Caisse de Crédit Agricole</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"1.8rem"}>Il fait entendre sa voix lors d’assemblées générales</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
        <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <Heading size={6} textColor={black}>
            Pierre Kiefer
          </Heading>
          <img src={images.pierre} style={{ width: "150px", alignSelf: "center" }}/>
          <Text textColor={grey} >
            Webmaster
          </Text>
        </Fill>
        <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Heading size={6} textColor={black}>
              Anaïs Vogt
            </Heading>
            <img src={images.anais} style={{ width: "150px", alignSelf: "center" }} />
            <Text textColor={grey} >
              Webmaster
            </Text>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
        <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Heading size={6} textColor={black}>
              Emmanuel Clerc
            </Heading>
            <img src={images.emmanuel} style={{ width: "150px", alignSelf: "center" }} />
            <Text textColor={grey} >
              {"Chef d'équipe"}
            </Text>
          </Fill>
          <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <Heading size={6} textColor={black}>
              Jonathan Giamporcaro
            </Heading>
            <img src={images.jon} style={{ width: "150px", alignSelf: "center" }}/>
            <Text textColor={grey} >
              Développeur web
            </Text>
          </Fill>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>1. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
        <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <img src={images.fort} style={{ width: "150px", alignSelf: "center" }} />
        </Fill>
        <Fill style={{ height: "350px", display: "flex", flexDirection: "column", justifyContent: "center", flexGrow: "2" }}>
          <Heading size={6} textColor={black}>
            {"Mon rôle dans l'équipe"}
          </Heading>
          <List>
            <ListItem textColor={grey} textSize={"1.6rem"}>Créer et développer les projets</ListItem>
            <ListItem textColor={grey} textSize={"1.6rem"}>Créer du contenu sur le site</ListItem>
            <ListItem textColor={grey} textSize={"1.6rem"}>Epaûler les webmaster</ListItem>
          </List>
        </Fill>
        </Layout>
      </Slide>
    </SlideSet>
  );
}
