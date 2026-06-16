"use client";

import { useState, useMemo } from "react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilter, type FilterState } from "@/components/products/ProductFilter";
import productsData from "@/data/products.json";
import type { Product } from "@/types";

const categories = [
  { value: "all", label: "全部熊猫币" },
  { value: "panda", label: "熊猫金币" },
  { value: "silver", label: "熊猫银币" },
];

export function PandaCoinList() {
  const products = useMemo(() => {
    const all = productsData as Product[];
    return all.filter((p) => p.category === "panda" || p.category === "silver");
  }, []);
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: "all",
    year: "all",
    sort: "newest",
  });

  const filtered = useMemo(() => {
    let result = [...products];

    if (filters.category !== "all") {
      result = result.filter((p) => p.category === filters.category);
    }

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
          title="熊猫金币专区"
          subtitle="中国人民银行官方发行的熊猫金币系列，全球五大投资金币之一"
          align="left"
        />
      </ScrollReveal>

      {/* Category quick links */}
      <ScrollReveal delay={0.1}>
        <div className="flex gap-3 mb-8 flex-wrap">
          {[
            { label: "2025熊猫金币", year: "2025", cat: "panda" },
            { label: "2024熊猫金币", year: "2024", cat: "panda" },
            { label: "2023熊猫金币", year: "2023", cat: "panda" },
            { label: "套装金币", search: "套装" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => {
                if (item.search) {
                  setFilters((f) => ({ ...f, search: item.search!, category: "all", year: "all" }));
                } else {
                  setFilters((f) => ({
                    ...f,
                    year: item.year!,
                    category: item.cat!,
                    search: "",
                  }));
                }
              }}
              className="px-4 py-2 rounded-full border border-amber-500/30 text-amber-400 text-sm hover:bg-amber-500/10 hover:border-amber-400 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
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
          <p className="text-gray-400 text-lg">未找到匹配的熊猫币</p>
          <p className="text-gray-500 text-sm mt-2">
            请尝试调整筛选条件
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-500 text-sm mb-6">
            共 {filtered.length} 款熊猫币
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
