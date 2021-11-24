import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FC } from "react";
import DiverImg from "../assets/diving.png";

type Props = {
  movingForward: boolean;
};

const ScubeDiver: FC<Props> = ({ movingForward }) => {
  return (
    <CustomImage
      src={DiverImg}
      alt={"women-diver"}
      movingForward={movingForward}
    />
  );
};

export default ScubeDiver;

const CustomImage = styled(motion.img)<{ movingForward: boolean }>((props) => ({
  transform: props.movingForward ? "none" : "scaleX(-1)",
  transition: "transform 0.05s",
  height: "75%",
}));
