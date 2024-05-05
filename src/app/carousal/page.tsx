import people from "./data";
import Carousal from "./Carousal";

export default function page() {
  return <Carousal data={people} />;
}
