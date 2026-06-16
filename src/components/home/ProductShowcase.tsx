import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProductCard } from "@/components/products/ProductCard";
import productsData from "@/data/products.json";
import type { Product } from "@/types";

const featuredIds = [1, 2, 5, 7, 10, 8];

export function ProductShowcase() {
  const products = productsData as Product[];
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as Product[];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="精选产品"
            subtitle="汇聚历年熊猫金币及贵金属纪念币精品，为您呈现最具收藏与投资价值的贵金属臻品"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <ProductCard product={product} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
