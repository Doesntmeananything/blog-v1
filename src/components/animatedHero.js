import React, { useCallback } from "react";
import {
  GiBrain,
  GiBookmarklet,
  GiMoebiusTriangle,
  GiOuroboros,
  GiOwl,
  GiAbstract089,
} from "react-icons/gi";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import DraggableIcon from "./draggableIcon";

const iconsLeft = [GiBrain, GiOuroboros, GiAbstract089];
const iconsRight = [GiBookmarklet, GiOwl, GiMoebiusTriangle];

const interp = i => r =>
  `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

export default function AnimatedHero() {
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
    <HeroContainer>
      <IconWrapper>
        {iconsLeft.map((Icon, index) => (
          <animated.div
            key={Icon}
            style={{ transform: radians.to(interp(index)) }}
          >
            <DraggableIcon>
              <Icon />
            </DraggableIcon>
          </animated.div>
        ))}
      </IconWrapper>
      <h1 style={{ textAlign: "center", margin: "auto" }}>
        Welcome to my Thoughts, Ideas & Work.
      </h1>
      <IconWrapper>
        {iconsRight.map((Icon, index) => (
          <animated.div
            key={Icon}
            style={{ transform: radians.to(interp(index + 10)) }}
          >
            <DraggableIcon>
              <Icon />
            </DraggableIcon>
          </animated.div>
        ))}
      </IconWrapper>
    </HeroContainer>
  );
}

const HeroContainer = styled.div`
  display: flex;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
