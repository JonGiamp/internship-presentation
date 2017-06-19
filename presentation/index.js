import React from "react";
import { Deck } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import {
  black, grey, yellow, primary, secondary, tertiary, quaternary, quinary, senary, septenary
} from "./data/colors";
import { home, myself, entreprise, mission, description } from "./sections/index";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");


// import CodeSlide from "spectacle-code-slide";

// const codeSource = require("raw-loader!../assets/source/code.example");

// <CodeSlide
//   transition={["slide"]}
//   transitionDuration={300}
//   lang="js"
//   code={codeSource}
//   ranges={[
//       { loc: [0, 270], title: "Walking through some code" },
//       { loc: [0, 1] },
//       { loc: [1, 2] },
//       { loc: [1, 2], note: "Heres a note!" },
//       { loc: [2, 3] },
//       { loc: [8, 10] }
//   ]}
// />

const theme = createTheme({
  black,
  grey,
  yellow,
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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["spin"]} transitionDuration={300} theme={theme} bgColor={primary}>
          { home() }
          { myself() }
          { entreprise() }
          { mission() }
          { description() }
      </Deck>
    );
  }
}
