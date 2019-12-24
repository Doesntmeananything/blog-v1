import React from "react";
import {
  GiBrain,
  GiBookmarklet,
  GiMoebiusTriangle,
  GiOuroboros,
  GiOwl,
  GiAbstract071,
} from "react-icons/gi";

import DraggableIcon from "./draggableIcon";

const icons = [
  GiBrain,
  GiBookmarklet,
  GiMoebiusTriangle,
  GiOuroboros,
  GiOwl,
  GiAbstract071,
];

export default function AnimatedIcons() {
  return (
    <>
      {icons.map(Icon => (
        <DraggableIcon key={Icon}>
          <Icon />
        </DraggableIcon>
      ))}
    </>
  );
}
