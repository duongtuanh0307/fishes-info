import ClownFish from "../assets/fishes/clown_fish.png";
import AngelFish from "../assets/fishes/angel_fish.png";
import ButterflyFish from "../assets/fishes/butterfly_fish.png";
import Shark from "../assets/fishes/shark.png";
import Fish01 from "../assets/fishes/fish_01.png";
import Fish02 from "../assets/fishes/fish_02.png";
import Fish03 from "../assets/fishes/fish_03.png";
import Fish04 from "../assets/fishes/fish_04.png";
import Fish05 from "../assets/fishes/fish_05.png";
import Fish06 from "../assets/fishes/fish_06.png";
import Fish07 from "../assets/fishes/fish_07.png";
import Fish08 from "../assets/fishes/fish_08.png";
import Fish09 from "../assets/fishes/fish_09.png";
import Fish10 from "../assets/fishes/fish_10.png";
import Fish11 from "../assets/fishes/fish_11.png";

export type FishListItem = {
  id: number;
  name: string;
  imgSrc: string;
  detail: string;
  size: "sm" | "md" | "lg";
};

export const fishList: FishListItem[] = [
  {
    id: 1,
    name: "Clown Fish",
    imgSrc: ClownFish,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 2,
    name: "Angle Fish",
    imgSrc: AngelFish,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 3,
    name: "Butterfly Fish",
    imgSrc: ButterflyFish,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 4,
    name: "Shark",
    imgSrc: Shark,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "lg",
  },
  {
    id: 5,
    name: "Tropical Fish 01",
    imgSrc: Fish01,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. \nProin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "md",
  },
  {
    id: 6,
    name: "Tropical Fish 02",
    imgSrc: Fish02,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \nIn ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "md",
  },
  {
    id: 7,
    name: "Tropical Fish 03",
    imgSrc: Fish03,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam.\nDuis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 8,
    name: "Tropical Fish 04",
    imgSrc: Fish04,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. \nSuspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 9,
    name: "Tropical Fish 05",
    imgSrc: Fish05,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. \nProin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "md",
  },
  {
    id: 10,
    name: "Tropical Fish 06",
    imgSrc: Fish06,
    detail:
      "Pellentesque sit amet condimentum ligula. \nVestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \nIn ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 11,
    name: "Tropical Fish 07",
    imgSrc: Fish07,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. \nProin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. \nSuspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 12,
    name: "Tropical Fish 08",
    imgSrc: Fish08,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. \nDuis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 13,
    name: "Tropical Fish 09",
    imgSrc: Fish09,
    detail:
      "Pellentesque sit amet condimentum ligula. \nVestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. \nSuspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 14,
    name: "Tropical Fish 10",
    imgSrc: Fish10,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. \nDuis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. Suspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
  {
    id: 15,
    name: "Tropical Fish 11",
    imgSrc: Fish11,
    detail:
      "Pellentesque sit amet condimentum ligula. Vestibulum vitae imperdiet sapien. Ut non risus varius, convallis turpis id, molestie tortor. Proin sit amet faucibus quam. Duis dapibus sit amet mi quis blandit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In ultricies consequat ullamcorper. Nunc suscipit metus justo, at dapibus massa varius ut. \nSuspendisse posuere interdum metus, eu pharetra arcu cursus id. Nam tempor orci at posuere viverra.",
    size: "sm",
  },
];
