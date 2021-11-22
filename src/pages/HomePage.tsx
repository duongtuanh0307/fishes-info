import styled from "@emotion/styled";
import ParallaxScrollingBg from "../compound/ParallaxScrollingBg";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <ParallaxScrollingBg />
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
