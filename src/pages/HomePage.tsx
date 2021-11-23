import styled from "@emotion/styled";
import { useState } from "react";
import ParallaxScrollingBg from "../compound/ParallaxScrollingBg";
import { FishListItem, fishList } from "../data/fish_base";
import FishInfo from "../compound/FishInfo";
import { AnimatePresence } from "framer-motion";

const HomePage = () => {
  const [currentFish, setCurrentFish] = useState<FishListItem | null>(null);
  const [isFishInfoOpen, setFishInfoOpen] = useState(false);

  const closeFishInfo = () => setFishInfoOpen(false);

  const openFishInfo = () => setFishInfoOpen(true);

  const handleChangeCurrentFish = (fishId: number) => {
    const nextFish = fishList.filter((fish) => fish.id === fishId);
    setCurrentFish(nextFish[0]);
  };

  return (
    <HomePageWrapper>
      <ParallaxScrollingBg
        openFishInfo={openFishInfo}
        handleChangeCurrentFish={handleChangeCurrentFish}
      />
      <AnimatePresence exitBeforeEnter>
        {isFishInfoOpen && currentFish && (
          <FishInfo
            fishInfo={currentFish}
            closeFishInfo={closeFishInfo}
            key={`${currentFish.name}-info`}
          />
        )}
      </AnimatePresence>
    </HomePageWrapper>
  );
};

export default HomePage;

const HomePageWrapper = styled("div")({
  width: "100vw",
  height: "100vh",
  position: "relative",
  overflowX: "scroll",
});
