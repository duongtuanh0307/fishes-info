import styled from "@emotion/styled";
import { FC } from "react";
import { FishListItem } from "../data/fish_base";
import _Fish from "./Fish";

type Props = {
  fishList: FishListItem[];
  swimmingForward: boolean;
};

const FishList: FC<Props> = ({ fishList, swimmingForward }) => {
  return (
    <FishListWrapper>
      {fishList.map((fish, index) => {
        return (
          <Fish
            key={`${index}-${fish.id}`}
            fish={fish}
            swimmingForward={swimmingForward}
            fishIndex={index}
          />
        );
      })}
    </FishListWrapper>
  );
};

export default FishList;

const FishListWrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "grid",
  gridTemplateColumns: "1fr 2fr 300px 1fr 2fr 1fr 1fr 1fr 300px 1fr",
  gridTemplateRows: "repeat(8, 1fr)",
  pointerEvents: "none",
});

const Fish = styled(_Fish)<{ fishIndex: number }>((props) => ({
  gridColumn: props.fishIndex - Math.floor(props.fishIndex / 10),
  gridRow: Math.floor(Math.random() * 5) + 2,
}));
