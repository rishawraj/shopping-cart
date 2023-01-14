import { Card } from "./Card";
import birdNestFernPic from "../styles/plants/birds-nest-fern-plant.jpg";
import bromeliadAechmeaPic from "../styles/plants/bromeliad-aechmea-fasciata300x250.jpg";
import nephthytisPic from "../styles/plants/nephthytis-houseplant.jpg";
import peaceLilyPic from "../styles/plants/peace-lily-houseplant.jpg";
import pothosPic from "../styles/plants/pothos-houseplant.jpg";
import sansevieriaPic from "../styles/plants/sansevieria-houseplant.jpg";
import snakePic from "../styles/plants/snake-plant-in-pot.jpg";
import spiderPlantPic from "../styles/plants/spider-plant-on-table.jpg";
import zebraPlantPic from "../styles/plants/zebra-plant-indoor-house-plant.jpg";
import zzPlantPic from "../styles/plants/zz-plant-indoor-house-plant300250.jpg";

const Shop = () => {
  return (
    <div data-testid="shop" className="product-grid">
      <Card
        title={"birds-nest-fern-plant"}
        src={birdNestFernPic}
        price="50.32"
      />

      <Card
        title={"bromeliad-aechmea-fasciata"}
        src={bromeliadAechmeaPic}
        price="50.32"
      />

      <Card title={"nephthytis-houseplant"} src={nephthytisPic} price="50.32" />

      <Card title={"peace-lily-houseplant"} src={peaceLilyPic} price="50.32" />

      <Card title={"pothos-houseplant"} src={pothosPic} price="50.32" />

      <Card
        title={"sansevieria-houseplant"}
        src={sansevieriaPic}
        price="50.32"
      />

      <Card title={"snake-plant-in-pot"} src={snakePic} price="50.32" />

      <Card
        title={"spider-plant-on-table"}
        src={spiderPlantPic}
        price="50.32"
      />

      <Card
        title={"zebra-plant-indoor-house-plant"}
        src={zebraPlantPic}
        price="50.32"
      />

      <Card
        title={"zz-plant-indoor-house-plant"}
        src={zzPlantPic}
        price="50.32"
      />
    </div>
  );
};

export { Shop };
