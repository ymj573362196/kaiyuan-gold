"use client";

import { useState, useMemo } from "react";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductFilter, type FilterState } from "@/components/products/ProductFilter";
import productsData from "@/data/products.json";
import type { Product } from "@/types";

const categories = [
  { value: "all", label: "全部产品" },
  { value: "panda", label: "熊猫金币" },
  { value: "silver", label: "熊猫银币" },
  { value: "commemorative", label: "纪念币" },
  { value: "investment", label: "投资金条" },
];

export function ProductList() {
  const products = useMemo(() => productsData as Product[], []);
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
      const query = filters.search.trim().toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((t) => t.toLowerCase().includes(query))
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
          title="产品中心"
          subtitle="汇聚历年熊猫金币、银币及贵金属纪念币精品"
          align="left"
        />
      </ScrollReveal>

      <div className="mb-8">
        <ProductFilter
          categories={categories}
          onFilterChange={setFilters}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">未找到匹配的产品</p>
          <p className="text-gray-500 text-sm mt-2">
            请尝试调整筛选条件或搜索关键词
          </p>
        </div>
      ) : (
        <>
          <p className="text-gray-500 text-sm mb-6">
            共 {filtered.length} 款产品
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
