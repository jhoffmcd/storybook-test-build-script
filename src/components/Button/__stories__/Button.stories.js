import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, select, text } from "@storybook/addon-knobs";

import Button from "../index";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add("Button", () => {
    const datum = "💥";

    return (
      <Button
        active={boolean("active", false)}
        block={boolean("block", false)}
        color={select("color", false)}
        disabled={boolean("disabled", false)}
        outline={boolean("outline", false)}
        size={select(
          "size",
          { undefined: "undefined", sm: "sm", lg: "lg" },
          "undefined"
        )}
        onClick={action("onClick called", datum)}
        onKeyDown={action("onKeyDown called", datum)}
      >
        {text("children", "Click me!")}
      </Button>
    );
  });
