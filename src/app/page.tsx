import { HeroBanner } from "@/components/home/HeroBanner";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Timeline } from "@/components/home/Timeline";
import { Advantages } from "@/components/home/Advantages";
import { NewsSection } from "@/components/home/NewsSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ProductShowcase />
      <Advantages />
      <Timeline />
      <NewsSection />
    </>
  );
}
