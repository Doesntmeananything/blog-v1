import React from "react";
import { IconContext } from "react-icons";
import { useSpring, animated, config, to } from "react-spring";
import { dist } from "vec-la";
import { useDrag } from "react-use-gesture";

import { rhythm } from "../utils/typography";

const DraggableIcon = ({ children }) => {
  const [props, set] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
  }));

  const [{ angle }, setAngle] = useSpring(() => ({
    angle: 0,
    config: config.wobbly,
  }));

  const bind = useDrag(
    ({ xy, previous, direction, down, movement: [x, y] }) => {
      set({
        x: down ? x : 0,
        y: down ? y : 0,
        scale: down ? 1.2 : 1,
        immediate: down,
      });
      if (dist(xy, previous) > 1 || !down)
        setAngle({ angle: Math.atan2(direction[0], -direction[1]) });
    },
    { bounds: { left: -200, right: 200, top: -100, bottom: 100 } }
  );

  return (
    <animated.div
      {...bind()}
      style={{
        display: "inline-block",
        cursor: "grab",
        userSelect: "none",
        padding: "1rem 1rem 1rem 0",
        transform: to([angle], a => `rotate(${a}rad)`),
        ...props,
      }}
    >
      <IconContext.Provider value={{ size: rhythm(2) }}>
        {children}
      </IconContext.Provider>
    </animated.div>
  );
};

export default DraggableIcon;
