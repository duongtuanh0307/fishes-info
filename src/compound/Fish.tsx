import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FC } from "react";
import { FishListItem } from "../data/fish_base";

type Props = {
  fish: FishListItem;
  swimmingForward: boolean;
  className?: string;
};

const Fish: FC<Props> = ({ fish, swimmingForward, className }) => {
  return (
    <FishWrapper
      className={className}
      size={fish.size}
      swimmingForward={swimmingForward}
      onClick={() => alert(fish.name)}
    >
      <img src={fish.imgSrc} alt={fish.name} />
    </FishWrapper>
  );
};

export default Fish;

const FishWrapper = styled(motion.div)<{
  size: "sm" | "md" | "lg";
  swimmingForward: boolean;
}>((props) => ({
  pointerEvents: "all",
  width: props.size === "sm" ? 100 : props.size === "md" ? 300 : "100%",
  height: "fit-content",
  img: {
    height: "100%",
    width: "100%",
    transform: props.swimmingForward ? "none" : "scaleX(-1)",
    transition: "transform 0.05s",
  },
  "&:hover": {
    cursor: "pointer",
  },
}));
