import styled from "@emotion/styled";
import { AnimatePresence, motion, MotionValue } from "framer-motion";
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
  const [isShowTip, setShowTip] = useState(true);

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
      <AnimatePresence>
        {isShowTip && (
          <Frame
            width={"100vw"}
            background={""}
            position='absolute'
            top={0}
            x={upperLayerX}
          >
            <TipText
              initial={{
                textShadow: "0px 0px 2px #fafa2f",
                scale: 1,
                opacity: 1,
              }}
              animate={{
                textShadow: "2px 2px 10px #fafa2f",
                scale: 1.1,
                opacity: 1,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              onClick={() => setShowTip(false)}
              exit={{
                textShadow: "2px 2px 100px #fafa2f",
                scale: 1.5,
                opacity: 0,
                transition: { duration: 1 },
              }}
            >
              Click any image to view the fish's detail info
            </TipText>
          </Frame>
        )}
      </AnimatePresence>
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

const TipText = styled(motion.p)({
  width: "100vw",
  textAlign: "center",
  padding: 24,
  fontSize: 22,
  fontWeight: 500,
  color: "#fff",
  letterSpacing: 1.5,
  "&: hover": {
    cursor: "default",
  },
});

const Background = styled(motion.div)({
  width: "1000vw",
  height: "100vh",
  backgroundImage: `url(${oceanScene})`,
  backgroundRepeat: "repeat-x",
  backgroundSize: "auto 100%",
});
