import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { FC } from "react";
import { FishListItem } from "../data/fish_base";

type Props = {
  fishInfo: FishListItem;
  closeFishInfo: () => void;
};

const FishInfo: FC<Props> = ({ fishInfo, closeFishInfo }) => {
  const bubbleVariants = {
    hidden: {
      y: "25%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 10,
        type: "spring",
        bounce: 0.3,
        damping: 15,
        mass: 5,
      },
    },
    exit: {
      y: "-175%",
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <FishInfoWrapper>
      <BubbleOutline
        initial='hidden'
        animate='show'
        exit='exit'
        variants={bubbleVariants}
      >
        <InfoWrapper>
          <OveralInfo>
            <h2>{fishInfo.name}</h2>
            <img alt={fishInfo.name} src={fishInfo.imgSrc} />
          </OveralInfo>
          <DetailInfo>{fishInfo.detail}</DetailInfo>
        </InfoWrapper>
        <SmallBubble
          key={"sm-bubble-1"}
          initial={{ y: 0 }}
          animate={{ y: 50 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          size={"60%"}
          right={350}
          top={400}
        />
        <SmallBubble
          initial={{ y: 0 }}
          animate={{
            y: 125,
            transition: { duration: 2 },
          }}
          key={"sm-bubble-2"}
          size={"15%"}
          right={50}
          top={-75}
          onClick={closeFishInfo}
          hasAction
        >
          <CloseButton
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            Close
          </CloseButton>
        </SmallBubble>
        <SmallBubble
          initial={{ y: 0 }}
          animate={{ y: 20 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          key={"sm-bubble-3"}
          size={"30%"}
          right={600}
          top={-100}
        />
      </BubbleOutline>
    </FishInfoWrapper>
  );
};

export default FishInfo;

const FishInfoWrapper = styled("div")({
  position: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  width: 600,
  top: 0,
  right: 100,
});

const BubbleOutline = styled(motion.div)({
  background: "rgba(135,206,250,0.2)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: 600,
  width: "100%",
  borderRadius: "50%",
  boxShadow: "inset 10px 0 20px #fff, 0 0 30px #fff",
  position: "relative",
  zIndex: 60,
});

const SmallBubble = styled(motion.div)<{
  size: string;
  right: number;
  top: number;
  hasAction?: boolean;
}>(({ size, right, top, hasAction }) => ({
  boxShadow: "inset 10px 0 20px #fff, 0 0 30px #fff",
  position: "absolute",
  right,
  top,
  background: "transparent",
  height: size,
  width: size,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ...(hasAction && {
    "&:hover": {
      cursor: "pointer",
    },
  }),
}));

const CloseButton = styled(motion.p)({
  color: "red",
  fontWeight: 600,
  letterSpacing: 2,
});

const OveralInfo = styled("div")({
  width: 150,
  minWidth: 150,
  padding: "0px 24px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  img: {
    width: 150,
    height: "fit-content",
    transform: "scaleX(-1)",
    marginTop: 24,
    border: "solid 2px #fff",
    outline: "solid 2px #fff",
    borderRadius: 8,
    outlineOffset: "8px",
    padding: 12,
  },
  h2: {
    width: 150,
    textAlign: "center",
    border: "solid 2px #fff",
    outline: "solid 2px #fff",
    borderRadius: 8,
    outlineOffset: "8px",
    padding: 12,
    textShadow: "1px 0px 1px #fff",
    color: "#05014a",
  },
});

const InfoWrapper = styled("div")({
  width: 400,
  height: 600,
  display: "flex",
  position: "relative",
  alignItems: "flex-start",
  marginTop: 150,
});

const DetailInfo = styled("div")({
  width: 300,
  border: "solid 2px #fff",
  outline: "solid 2px #fff",
  borderRadius: 8,
  outlineOffset: "8px",
  position: "absolute",
  top: 80,
  left: 180,
  padding: 24,
  fontWeight: 500,
  whiteSpace: "pre-line",
  fontSize: 18,
  color: "#05014a",
  textShadow: "0px 0px 2px #fff",
});
