import React from "react";
import CodeSlide from "spectacle-code-slide";
import {
  // BlockQuote,
  // Cite,
  Deck,
  Heading,
  // ListItem,
  // List,
  // Quote,
  Slide,
  Text
} from "spectacle";
// import preloader from "spectacle/lib/utils/preloader";
import createTheme from "spectacle/lib/themes/default";
import {
  black,
  white,
  primary,
  secondary,
  tertiary,
  quaternary,
  quinary,
  senary,
  septenary
} from "./data/colors";
import sections from "./data/sections";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");
const codeSource = require("raw-loader!../assets/source/code.example");

// preloader({
//   city: require("../assets/city.jpg"),
// });

const theme = createTheme({
  black,
  white,
  primary,
  secondary,
  tertiary,
  quaternary,
  quinary,
  senary,
  septenary
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const displaySection = ({ color, title }, text) => {
  return (
    <Slide transition={["slide"]} transitionDuration={300} bgColor={color}>
      <Heading size={1} fit caps lineHeight={1} textColor="black">
        {title}
      </Heading>
      { text ? <Text size={2} textColor="white">{text}</Text> : "" }
    </Slide>
  );
};
displaySection.propTypes = {
  color: React.PropTypes.string.isRequired,
  text: React.PropTypes.string,
  title: React.PropTypes.string.isRequired
};
displaySection.defaultProps = { text: "" };


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["spin"]} transitionDuration={300} theme={theme}>
        { displaySection(sections.myself, "blablablo") }
        { displaySection(sections.entreprise) }
        { displaySection(sections.presentation) }
        { displaySection(sections.description) }
        { displaySection(sections.analyse) }
        { displaySection(sections.conclusion) }
        { displaySection(sections.thanks) }
        <CodeSlide
          transition={["slide"]}
          transitionDuration={300}
          lang="js"
          code={codeSource}
          ranges={[
              { loc: [0, 270], title: "Walking through some code" },
              { loc: [0, 1] },
              { loc: [1, 2] },
              { loc: [1, 2], note: "Heres a note!" },
              { loc: [2, 3] },
              { loc: [8, 10] }
          ]}
        />
      </Deck>
    );
  }
}
