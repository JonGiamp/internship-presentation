import React from "react";
import {
  Layout, Slide, Text, SlideSet, Heading,
  Appear, List, ListItem, Fill, S
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
const tests = require("raw-loader!../../assets/source/tests.example");

const images = {
  silca: require("../../assets/images/silca.png"),
  done: require("../../assets/images/done.gif"),
  get: require("../../assets/images/get.png"),
  post: require("../../assets/images/post.png")
};

preloader(images);

const styles = {
  marginBottom: "90px"
};

const slide23 = `
  <p>Linux Debian</p>
  <p>administration WEBMIN surcouché avec le thème Authentic</p>
`;

export default function description() {
  return (
    <SlideSet bgColor={primary}>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary}>
        <Heading size={2} fit caps lineHeight={1} textColor={data.color}>
          {data.title}
        </Heading>
        <Text textColor={"black"}>{ data.subtitles }</Text>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start" notes={slide23}>
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 45px">
            Le serveur back-end
          </Heading>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }} margin="20px 0 0">
          <img src={images.silca}/>
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
            {"Développer l'API"}
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            Procéder aux tests
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            {"Développer les interfaces qui communiqueront avec l'API"}
          </ListItem></Appear>
        </List>
      </Slide>
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
      <CodeSlide
        transition={["slide"]}
        transitionDuration={300}
        bgColor={primary}
        textColor={black}
        color={black}
        lang="js"
        code={tests}
        ranges={[
          { loc: [0, 270], title: "Test des API" },
          { loc: [0, 2] },
          { loc: [3, 5] }
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
            <S type="strikethrough">Procéder aux tests</S>
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            {"Développer les interfaces qui communiqueront avec l'API"}
          </ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Heading size={6} textColor={black} margin="0 0 90px">
            Les interfaces front-end publiques
          </Heading>
        </Layout>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <Text textColor={black} textAlign="center" margin="0 0 20px">GET</Text>
              <Text textColor={grey} textAlign="center">Récupère les informations</Text>
            </Fill>
          </Appear>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <Text textColor={black} textAlign="center" margin="0 0 20px">POST</Text>
              <Text textColor={grey} textAlign="center">{"Envoi les données d'inscriptions"}</Text>
            </Fill>
          </Appear>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Interface GET - Développement
        </Heading>
        <List>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            Interface hébergée sur notre site internet
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            Accessible à tous
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            {"Développer from scratch sans aucune libraire d'UI"}
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            Utilise jQuery comme librairie de manipulation de DOM
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            Cohérent avec les principes de functionnal programming
          </ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start" notes="<p>Filtre et tri par Depart et Caisse</p>">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Interface GET - Fonctionnalités bonus
        </Heading>
        <Layout style={{ alignItems: "center", justifyContent: "center" }}>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <Text textColor={grey} textAlign="center" margin="0 0 20px">Recherche</Text>
            </Fill>
          </Appear>
          <Appear>
            <Fill style={{ height: "350px" }}>
              <Text textColor={grey} textAlign="center" margin="0 0 20px">Tri</Text>
            </Fill>
          </Appear>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Interface GET - Capture écran
        </Heading>
        <Layout style={{ alignItems: "center", justifyContent: "center" }} margin="20px 0 0">
          <img src={images.get}/>
        </Layout>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Interface POST - Développement
        </Heading>
        <List>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            Interface hébergée sur notre site internet
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            Accessible uniquement aux personnes recevant le lien par mail
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            Recupère les paramètres url afin de pré-remplir le formulaire
          </ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start">
        <Text textColor={data.color} textAlign="left" style={styles}>4. {data.title}</Text>
        <Heading size={6} textColor={black} margin="0 0 45px">
          Interface POST - Capture écran
        </Heading>
        <Layout style={{ alignItems: "center", justifyContent: "center" }} margin="20px 0 0">
          <img src={images.post}/>
        </Layout>
      </Slide>
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
            <S type="strikethrough">Procéder aux tests</S>
          </ListItem></Appear>
          <Appear><ListItem textColor={grey} textSize={"2rem"}>
            <S type="strikethrough">{"Développer les interfaces qui communiqueront avec l'API"}</S>
          </ListItem></Appear>
        </List>
      </Slide>
      <Slide transition={["slide"]} transitionDuration={300} bgColor={primary} align="flex-start flex-start" bgImage={images.done} bgDarken={0.3}/>
  </SlideSet>
  );
}
