import React from "react";
import { Deck } from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import {
  black, grey, yellow, primary, secondary, tertiary, quaternary, quinary, senary, septenary
} from "./data/colors";
import {
  home,
  myself,
  entreprise,
  mission,
  description,
  analyse,
  conclusion,
  thanks
} from "./sections/index";

require("normalize.css");
require("spectacle/lib/themes/default/index.css");

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
          { analyse() }
          { conclusion() }
          { thanks() }
      </Deck>
    );
  }
}
