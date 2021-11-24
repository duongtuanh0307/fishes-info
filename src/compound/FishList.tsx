import styled from "@emotion/styled";
import { FC } from "react";
import { FishListItem } from "../data/fish_base";
import { calcRemainder } from "../utilities/helper";
import _Fish from "./Fish";

type Props = {
  fishList: FishListItem[];
  swimmingForward: boolean;
  openFishInfo: () => void;
  handleChangeCurrentFish: (fishId: number) => void;
};

const FishList: FC<Props> = ({
  fishList,
  swimmingForward,
  openFishInfo,
  handleChangeCurrentFish,
}) => {
  return (
    <FishListWrapper>
      {fishList.map((fish, index) => {
        return (
          <Fish
            key={`${index}-${fish.id}`}
            fish={fish}
            swimmingForward={swimmingForward}
            fishIndex={index}
            openFishInfo={openFishInfo}
            handleChangeCurrentFish={handleChangeCurrentFish}
          />
        );
      })}
    </FishListWrapper>
  );
};

export default FishList;

const FishListWrapper = styled("div")({
  width: "100%",
  height: "30vh",
  display: "grid",
  gridTemplateColumns: "1fr 2fr 300px 1fr 2fr 1fr 1fr 1fr 300px 1fr",
  gridTemplateRows: "1fr 1fr 1fr 1fr",
  pointerEvents: "none",
  overflorY: "hidden",
});

const Fish = styled(_Fish)<{ fishIndex: number }>((props) => ({
  gridColumn: calcRemainder(props.fishIndex + 1, 10),
  gridRow: `${calcRemainder(
    Math.abs(props.fishIndex - Math.pow(props.fishIndex, 2)),
    4
  )} / auto`,
}));
