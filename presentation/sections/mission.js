import React from "react";
import {
  Layout, Slide, Text, SlideSet, Heading,
  Appear, List, ListItem, Table, TableRow, TableHeaderItem,
  TableItem, TableBody, TableHeader
} from "spectacle";
import { mission as data } from "../data/sections";
import { black, grey, primary } from "../data/colors";
import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from "spectacle-code-slide";

const codeSource = require("raw-loader!../../assets/source/solution.example");

const src = require("../../assets/images/iut.png");

const images = {
  caav: src
};

preloader(images);

const styles = {
  marginBottom: "90px"
};

export default function mission() {
  return (
    <SlideSet bgColor={primary}>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
        <Heading size={2} fit caps lineHeight={1} textColor={data.color}>
          {data.title}
        </Heading>
        <Text size={1} textColor={"black"}>{ data.subtitles }</Text>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>3. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            Les assemblées générales
          </Heading>
        </Layout>
        <List>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Rendez-vous annuel qui réunit les sociétaires</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Permet aux sociétaires de faire entendre sa voix</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">Se déroulent entre février et mars</ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>3. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            Cahier des charges
          </Heading>
        </Layout>
        <List>
          <Appear><ListItem textColor={grey} textSize="1.8rem">
            Chaque sociétaire doit recevoir une invitation.
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">
            Le sociétaire doit pouvoir notifier de sa présence.
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">
            {"Les organisteurs doivent connaitre le nombre d'inscrit"}
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize="1.8rem">
            Les sociétaires doivent être relancés.
          </ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text size={1} textColor={data.color} textAlign="left" style={styles}>3. {data.title}</Text>
          <Heading size={6} textColor={black} margin="0 0 45px">
            Les acteurs du projet
          </Heading>
          <Table textAlign="left">
            <TableHeader textAlign="left">
              <TableRow style={{ margin: "0 0 30px" }}>
                <TableHeaderItem textSize="2.2rem" textColor={black} style={{ width: "325px" }}>Services</TableHeaderItem>
                <TableHeaderItem textSize="2.2rem" textColor={black}>Fonctions</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody textAlign="left">
              <TableRow style={{ margin: "0 0 30px" }}>
                <TableItem textSize="1.8rem" textColor={grey}>Canaux digitaux</TableItem>
                <TableItem textSize="1.8rem" textColor={grey}>Créé les besoins numériques</TableItem>
              </TableRow>
              <TableRow style={{ margin: "0 0 30px" }}>
                <TableItem textSize="1.8rem" textColor={grey}>Communication</TableItem>
                <TableItem textSize="1.8rem" textColor={grey}>Créé les besoins graphiques</TableItem>
              </TableRow>
              <TableRow style={{ margin: "0 0 30px" }}>
                <TableItem textSize="1.8rem" textColor={grey}>Juridique</TableItem>
                <TableItem textSize="1.8rem" textColor={grey}>Valide juridiquement toutes les créations</TableItem>
              </TableRow>
              <TableRow style={{ margin: "0 0 30px" }}>
                <TableItem textSize="1.8rem" textColor={grey}>Animation</TableItem>
                <TableItem textSize="1.8rem" textColor={grey}>Orchestre le projet</TableItem>
              </TableRow>
            </TableBody>
          </Table>
      </Slide>
      <CodeSlide
        transition={["slide"]}
        transitionDuration={300}
        bgColor={primary}
        textColor={black}
        color={black}
        lang="js"
        code={codeSource}
        ranges={[
            { loc: [0, 270], title: "Solution proposée" },
            { loc: [0, 1] },
            { loc: [1, 2] },
            { loc: [2, 3] },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [5, 6] },
            { loc: [6, 7] },
            { loc: [7, 8] }
        ]}
      />
    <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
      <Text textColor={data.color} textAlign="left" style={styles}>3. {data.title}</Text>
      <Layout style={{ alignItems: "center", justifyContent: "center" }}>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Les contraintes techniques
        </Heading>
      </Layout>
      <List>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          Ne pas utiliser de JavaScript moderne (ES2015+)
        </ListItem></Appear>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          {"Ne pas utiliser de librairie d'interface (React, Vue..)"}
        </ListItem></Appear>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          Utiliser uniquement du PHP5 coté serveur
        </ListItem></Appear>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          Utiliser MySQL pour la base de données
        </ListItem></Appear>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          {"Garder un code propre et documenté pour qu'il soit réutilisé"}
        </ListItem></Appear>
      </List>
    </Slide>
    <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
      <Text textColor={data.color} textAlign="left" style={styles}>3. {data.title}</Text>
      <Layout style={{ alignItems: "center", justifyContent: "center" }}>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Ma responsabilité
        </Heading>
      </Layout>
      <List>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          Commander et configurer le serveur
        </ListItem></Appear>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          Créer et configurer la base de données
        </ListItem></Appear>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          {"Développer l'API"}
        </ListItem></Appear>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
          {"Développer les interfaces qui communiqueront avec l'API"}
        </ListItem></Appear>
        <Appear><ListItem textColor={grey} textSize="1.8rem">
         {"Relier l'ecosystème et procéder aux tests"}
        </ListItem></Appear>
      </List>
    </Slide>
  </SlideSet>
  );
}
