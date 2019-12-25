import React, { useCallback } from "react";
import {
  GiBrain,
  GiBookmarklet,
  GiMoebiusTriangle,
  GiOuroboros,
  GiOwl,
  GiAbstract071,
} from "react-icons/gi";
import { useSpring, animated } from "react-spring";

import DraggableIcon from "./draggableIcon";

const icons = [
  GiBrain,
  GiBookmarklet,
  GiMoebiusTriangle,
  GiOuroboros,
  GiOwl,
  GiAbstract071,
];

const interp = i => r =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

export default function AnimatedIcons() {
  const { radians } = useSpring({
    to: useCallback(async next => {
      while (true) {
        await next({
          radians: 2 * Math.PI,
          reset: true,
        });
      }
    }, []),
    from: { radians: 0 },
    config: { duration: 7000 },
  });

  return (
    <>
      {icons.map((Icon, index) => (
        <animated.div
          key={Icon}
          style={{ transform: radians.to(interp(index)) }}
        >
          <DraggableIcon>
            <Icon />
          </DraggableIcon>
        </animated.div>
      ))}
    </>
  );
}
