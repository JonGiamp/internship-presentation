import React from "react";
import {
  Layout, Slide, Text, SlideSet, Heading,
  Appear, List, ListItem, Table, TableRow, TableHeaderItem,
  TableItem, TableBody, TableHeader, Fill, S
} from "spectacle";
import { description as data } from "../data/sections";
import { black, grey, primary } from "../data/colors";
import preloader from "spectacle/lib/utils/preloader";
import CodeSlide from "spectacle-code-slide";

const calendar = require("raw-loader!../../assets/source/calendar.example");
const inscriptions = require("raw-loader!../../assets/source/inscriptions.example");
const foundation = require("raw-loader!../../assets/source/api/foundation.example");
const get = require("raw-loader!../../assets/source/api/get.example");
const post = require("raw-loader!../../assets/source/api/post.example");

const src = require("../../assets/images/iut.png");

const images = {
  caav: src
};

preloader(images);

const styles = {
  marginBottom: "90px"
};

export default function description() {
  return (
    <SlideSet bgColor={primary}>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
        <Heading size={2} fit caps lineHeight={1} textColor={data.color}>
          {data.title}
        </Heading>
        <Text textColor={"black"}>{ data.subtitles }</Text>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            Le serveur back-end
          </Heading>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }} margin="20px 0 0">
          <img src={images.caav}/>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Text textSize="2rem" textColor={grey} margin="30px 0 0">
            Stack Linux, Apache, MySQL, PHP5
          </Text>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Text textSize="2rem" textColor={grey}>
            Possède un webdav et un back-office de configuratin
          </Text>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Configuration du serveur
        </Heading>
        <List>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>Location et mise en place du nom de domaine</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>{"Installation d'un certificat SSL reconnu"}</ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>Création de groupe utilisateurs</ListItem></Appear>
        </List>
      </Slide>
      <CodeSlide
        transition={["slide"]}
        transitionDuration={300}
        bgColor={primary}
        textColor={black}
        color={black}
        lang="js"
        code={calendar}
        ranges={[
            { loc: [0, 270], title: "Table des assemblées" },
            { loc: [2, 3] },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [5, 6] },
            { loc: [6, 7] }
        ]}
      />
      <CodeSlide
        transition={["slide"]}
        transitionDuration={300}
        bgColor={primary}
        textColor={black}
        color={black}
        lang="js"
        code={inscriptions}
        ranges={[
            { loc: [0, 270], title: "Table des inscriptions" },
            { loc: [2, 3] },
            { loc: [3, 4] },
            { loc: [4, 5] },
            { loc: [5, 6] },
            { loc: [6, 7] },
            { loc: [7, 8] },
            { loc: [8, 9] },
            { loc: [9, 10] }
        ]}
      />
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 90px">
          {"Le rôle de l'API PHP"}
        </Heading>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <Text textColor={black} textAlign="center">Recevoir</Text>
              <Text textColor={grey} textAlign="center">POST</Text>
            </Fill>
          </Appear>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <Text textColor={black} textAlign="center">Enregistrer</Text>
              <Text textColor={grey} textAlign="center">INSERT</Text>
            </Fill>
          </Appear>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <Text textColor={black} textAlign="center">Transmettre</Text>
              <Text textColor={grey} textAlign="center">GET</Text>
            </Fill>
          </Appear>
        </Layout>
      </Slide>
      <CodeSlide
        transition={["slide"]}
        transitionDuration={300}
        bgColor={primary}
        textColor={black}
        color={black}
        lang="js"
        code={foundation}
        ranges={[
            { loc: [0, 270], title: "Fondation de l'API" },
            { loc: [0, 30] },
            { loc: [0, 6], note: "Encode les données et l\'envoie à la page qui les a demandé" },
            { loc: [6, 7], note: "Stock la méthode utilisée par la requête" },
            { loc: [8, 12] },
            { loc: [13, 15] },
            { loc: [15, 17] },
            { loc: [17, 19] },
            { loc: [19, 23] }
        ]}
      />
      <CodeSlide
        transition={["slide"]}
        transitionDuration={300}
        bgColor={primary}
        textColor={black}
        color={black}
        lang="js"
        code={get}
        ranges={[
            { loc: [0, 270], title: "Méthode GET de l'API" },
            { loc: [0, 4] },
            { loc: [1, 2], note: "On récupère les données de la table" },
            { loc: [2, 3], note: "On envoie les données au client" }
        ]}
      />
      <CodeSlide
        transition={["slide"]}
        transitionDuration={300}
        bgColor={primary}
        textColor={black}
        color={black}
        lang="js"
        code={post}
        ranges={[
            { loc: [0, 270], title: "Méthode POST de l'API" },
            { loc: [0, 18] },
            { loc: [1, 3], note: "On récupère les paramètres passés à l'API" },
            { loc: [4, 6] },
            { loc: [7, 15], note: "On effectue la requête SQL" },
            { loc: [16, 17] }
        ]}
      />
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Check-up du projet
        </Heading>
        <List>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            <S type="strikethrough">Commander et configurer le serveur</S>
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            <S type="strikethrough">Créer et configurer la base de données</S>
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            <S type="strikethrough">{"Développer l'API"}</S>
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            {"Développer les interfaces qui communiqueront avec l'API"}
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            {"Relier l'ecosystème et procéder aux tests"}
          </ListItem></Appear>
        </List>
      </Slide>
  </SlideSet>
  );
}
