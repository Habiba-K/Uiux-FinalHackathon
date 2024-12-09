import Image from "next/image";
import HeroSection from "./Components/HeroSection";
import EditorPick from "./Components/EditorPick";
import Product from "./Components/product";
import Projects from "./Components/Projects";
import Universe from "./Components/Universe";
import Neutraluniverse from "./Components/neutraluniverse";
import CardSection from "./Components/CardSection";
import Topbar from "./Components/topbar";
export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <EditorPick></EditorPick>
      <Projects />
      <Universe />
      <Neutraluniverse />
      <CardSection></CardSection>
    </div>
  );
}
