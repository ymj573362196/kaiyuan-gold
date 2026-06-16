"use client";

import { useState, useMemo } from "react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilter, type FilterState } from "@/components/products/ProductFilter";
import productsData from "@/data/products.json";
import type { Product } from "@/types";

const categories = [
  { value: "all", label: "全部纪念币" },
  { value: "commemorative", label: "纪念金币" },
  { value: "silver", label: "纪念银币" },
];

export function CommemorativeList() {
  const products = useMemo(() => {
    const all = productsData as Product[];
    return all.filter((p) => p.category === "commemorative");
  }, []);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    year: "all",
    sort: "newest",
  });

  const filtered = useMemo(() => {
    let result = [...products];
    if (filters.year !== "all") {
      result = result.filter((p) => p.year === filters.year);
    }
    if (filters.search.trim()) {
      const q = filters.search.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }
    switch (filters.sort) {
      case "newest":
        result.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      case "oldest":
        result.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        break;
      case "name":
        result.sort((a, b) => a.name.localeCompare(b.name, "zh-CN"));
        break;
    }
    return result;
  }, [products, filters]);

  return (
    <div>
      <ScrollReveal>
        <SectionTitle
          title="纪念币专区"
          subtitle="重大题材纪念币，融汇中华文化与贵金属工艺，具有独特的历史与文化收藏价值"
          align="left"
        />
      </ScrollReveal>

      <div className="mb-8">
        <ProductFilter
          categories={categories}
          onFilterChange={setFilters}
          defaultCategory="all"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">未找到匹配的纪念币</p>
        </div>
      ) : (
        <>
          <p className="text-gray-500 text-sm mb-6">
            共 {filtered.length} 款纪念币
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.05}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
