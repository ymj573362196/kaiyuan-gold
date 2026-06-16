import type { Metadata } from "next";
import { ProductList } from "./ProductList";

export const metadata: Metadata = {
  title: "产品中心",
  description:
    "开元金币产品中心，汇集熊猫金币、熊猫银币、金银纪念币、投资金条等贵金属产品。查看详细产品信息与收藏投资价值分析。",
};

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductList />
      </div>
    </div>
  );
}
