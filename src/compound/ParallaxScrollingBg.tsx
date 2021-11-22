import styled from "@emotion/styled";
import { motion, MotionValue } from "framer-motion";
import { Frame, Scroll, useTransform, useMotionValue } from "framer";
import oceanScene from "../assets/marine_bg.jpeg";
import ScubeDiver from "./ScubeDiver";
import FishList from "./FishList";
import Fish from "./Fish";
import { useMemo, useState } from "react";
import { fishList } from "../data/fish_base";
import { makeKPermutaion } from "../utilities/helper";

const HomePage = () => {
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
        <TipText>Click to view detail info of the fish</TipText>
      </Frame>
      <Frame
        width={"800vw"}
        background={""}
        position='absolute'
        top={0}
        x={firstFishListX}
        left={0}
        style={{ zIndex: 10, pointerEvents: "none" }}
      >
        <FishList fishList={fishList01} swimmingForward={movingForward} />
      </Frame>
      <Frame
        background={""}
        position='absolute'
        top={"20%"}
        x={upperLayerX}
        style={{ zIndex: 20, pointerEvents: "none" }}
      >
        <ScubeDiver movingForward={movingForward} />
      </Frame>
      <Frame
        width={"1900vw"}
        background={""}
        position='absolute'
        top={0}
        left={-300}
        x={secondFishListX}
        style={{ zIndex: 30, pointerEvents: "none" }}
      >
        <FishList fishList={fishList02} swimmingForward={!movingForward} />
      </Frame>
      <Frame
        width={"2050vw"}
        background={""}
        position='absolute'
        top={0}
        left={500}
        x={thirdFishListX}
        style={{ zIndex: 40, pointerEvents: "none" }}
      >
        <FishList fishList={fishList03} swimmingForward={!movingForward} />
      </Frame>
      <Frame
        width='50vw'
        background={""}
        position='absolute'
        top={"10%"}
        right={0}
      >
        <Fish fish={shark} swimmingForward={false} />
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
  marginTop: 40,
});

const Background = styled(motion.div)({
  width: "1000vw",
  height: "100vh",
  backgroundImage: `url(${oceanScene})`,
  backgroundRepeat: "repeat-x",
  backgroundSize: "auto 100%",
});
