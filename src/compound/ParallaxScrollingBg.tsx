import styled from "@emotion/styled";
import { motion, MotionValue } from "framer-motion";
import { Frame, Scroll, useTransform, useMotionValue } from "framer";
import oceanScene from "../assets/marine_bg.jpeg";
import ScubeDiver from "./ScubeDiver";
import FishList from "./FishList";
import Fish from "./Fish";
import { FC, useMemo, useState } from "react";
import { fishList } from "../data/fish_base";
import { makeKPermutaion } from "../utilities/helper";

type Props = {
  openFishInfo: () => void;
  handleChangeCurrentFish: (fishId: number) => void;
};

const HomePage: FC<Props> = ({ handleChangeCurrentFish, openFishInfo }) => {
  const x = useMotionValue(0);
  const [movingForward, setMovingForward] = useState(true);

  const upperLayerX = useTransform(x, (value) => value / -1) as MotionValue<
    number | string
  >;
  const firstFishListX = useTransform(
    x,
    (value) => value * -0.8
  ) as MotionValue<number | string>;
  const secondFishListX = useTransform(x, (value) => value) as MotionValue<
    number | string
  >;
  const thirdFishListX = useTransform(x, (value) => value * 1.2) as MotionValue<
    number | string
  >;

  const fishListWithoutShark = fishList.filter((fish) => fish.id !== 4);
  const shark = fishList.filter((fish) => fish.id === 4)[0];

  const fishList01 = useMemo(
    () => makeKPermutaion(fishListWithoutShark, 10),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fishList02 = useMemo(
    () => makeKPermutaion(fishListWithoutShark, 10),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const fishList03 = useMemo(
    () => makeKPermutaion(fishListWithoutShark, 10),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Scroll
      width={"100%"}
      height={"100%"}
      direction='horizontal'
      contentOffsetX={x}
      onScroll={() => setMovingForward(x.getPrevious() > x.get())}
      drag={false}
    >
      <Background />
      <Frame
        width={"100vw"}
        background={""}
        position='absolute'
        top={0}
        x={upperLayerX}
      >
        <TipText>Click any image to view the fish's detail info</TipText>
      </Frame>
      <Frame
        width={"500vw"}
        background={""}
        position='absolute'
        top={"10vh"}
        x={firstFishListX}
        left={0}
        style={{ zIndex: 10, pointerEvents: "none", maxHeight: "30vh" }}
      >
        <FishList
          fishList={fishList01}
          swimmingForward={movingForward}
          openFishInfo={openFishInfo}
          handleChangeCurrentFish={handleChangeCurrentFish}
        />
      </Frame>
      <Frame
        height={0}
        background={""}
        position='absolute'
        top={"20vh"}
        x={upperLayerX}
        style={{ zIndex: 20, pointerEvents: "none" }}
      >
        <ScubeDiver movingForward={movingForward} />
      </Frame>
      <Frame
        width={"1900vw"}
        background={""}
        position='absolute'
        top={"40vh"}
        left={-300}
        x={secondFishListX}
        style={{ zIndex: 30, pointerEvents: "none", maxHeight: "30vh" }}
      >
        <FishList
          fishList={fishList02}
          swimmingForward={!movingForward}
          openFishInfo={openFishInfo}
          handleChangeCurrentFish={handleChangeCurrentFish}
        />
      </Frame>
      <Frame
        width={"2050vw"}
        background={""}
        position='absolute'
        top={"70vh"}
        left={500}
        x={thirdFishListX}
        style={{ zIndex: 40, pointerEvents: "none", maxHeight: "30vh" }}
      >
        <FishList
          fishList={fishList03}
          swimmingForward={!movingForward}
          openFishInfo={openFishInfo}
          handleChangeCurrentFish={handleChangeCurrentFish}
        />
      </Frame>
      <Frame
        width='60vw'
        background={""}
        position='absolute'
        top={"15vh"}
        right={-600}
        style={{ zIndex: 50 }}
      >
        <Fish
          fish={shark}
          swimmingForward={false}
          openFishInfo={openFishInfo}
          handleChangeCurrentFish={handleChangeCurrentFish}
        />
      </Frame>
    </Scroll>
  );
};

export default HomePage;

const TipText = styled("p")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100vw",
  textAlign: "center",
  padding: 24,
  fontSize: 20,
  fontWeight: 600,
  color: "#fff",
  textShadow: "0px 0px 3px #000",
  letterSpacing: 1.5,
});

const Background = styled(motion.div)({
  width: "1000vw",
  height: "100vh",
  backgroundImage: `url(${oceanScene})`,
  backgroundRepeat: "repeat-x",
  backgroundSize: "auto 100%",
});
