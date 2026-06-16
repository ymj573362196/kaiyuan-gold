"use client";

import { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Search } from "lucide-react";

interface ProductFilterProps {
  categories: { value: string; label: string }[];
  onFilterChange: (filters: FilterState) => void;
  defaultCategory?: string;
}

export interface FilterState {
  search: string;
  category: string;
  year: string;
  sort: string;
}

export function ProductFilter({
  categories,
  onFilterChange,
  defaultCategory = "all",
}: ProductFilterProps) {
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    category: defaultCategory,
    year: "all",
    sort: "newest",
  });

  const handleChange = useCallback(
    (key: keyof FilterState, value: string) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);
      onFilterChange(newFilters);
    },
    [filters, onFilterChange]
  );

  const years = [
    { value: "all", label: "全部年份" },
    { value: "2025", label: "2025年" },
    { value: "2024", label: "2024年" },
    { value: "2023", label: "2023年" },
    { value: "2022", label: "2022年" },
    { value: "2020", label: "2020年" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
        />
        <Input
          placeholder="搜索产品名称..."
          value={filters.search}
          onChange={(e) => handleChange("search", e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Filters */}
      <div className="flex gap-3 flex-wrap">
        <Select
          value={filters.category}
          onChange={(e) => handleChange("category", e.target.value)}
          className="w-36"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </Select>

        <Select
          value={filters.year}
          onChange={(e) => handleChange("year", e.target.value)}
          className="w-32"
        >
          {years.map((y) => (
            <option key={y.value} value={y.value}>
              {y.label}
            </option>
          ))}
        </Select>

        <Select
          value={filters.sort}
          onChange={(e) => handleChange("sort", e.target.value)}
          className="w-36"
        >
          <option value="newest">最新发行</option>
          <option value="oldest">最早发行</option>
          <option value="name">名称排序</option>
        </Select>
      </div>
    </div>
  );
}
