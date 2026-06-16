import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { NewsItem } from "@/types";

const news: NewsItem[] = [
  {
    id: 1,
    title: "2025版熊猫金币正式发行，全新攀树图案亮相",
    date: "2025-01-15",
    excerpt:
      "中国人民银行正式发行2025版熊猫普制金币。本次设计采用全新的大熊猫攀树图案，工艺精度再创新高，受到藏家广泛关注。",
    image: "/products/panda-gold-2025.jpg",
    category: "新品发布",
  },
  {
    id: 2,
    title: "国际金价持续走高，熊猫金币投资价值凸显",
    date: "2025-03-22",
    excerpt:
      "近期国际黄金价格突破历史新高，国内熊猫金币市场交投活跃。专家分析认为，熊猫金币兼具黄金保值与艺术收藏双重价值。",
    image: "/products/gold-bar-100g.jpg",
    category: "市场分析",
  },
  {
    id: 3,
    title: "熊猫金币收藏入门指南：从零开始构建收藏体系",
    date: "2025-05-10",
    excerpt:
      "对于新手藏家而言，如何从零开始构建自己的熊猫金币收藏体系？本文从预算、品种、年份三个维度为您提供专业建议。",
    image: "/products/panda-set-57g.jpg",
    category: "收藏指南",
  },
];

export function NewsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="行业资讯"
            subtitle="最新金币市场动态与收藏投资指南"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <Card className="group overflow-hidden border-white/10 hover:border-amber-500/30 transition-all duration-300">
                <div className="aspect-[16/9] bg-gradient-to-br from-amber-500/10 to-neutral-900 flex items-center justify-center overflow-hidden">
                  <div className="text-4xl opacity-30 group-hover:scale-110 transition-transform duration-500">
                    🪙
                  </div>
                </div>
                <CardContent className="pt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{item.category}</Badge>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-3">
                    {item.excerpt}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="text-amber-400 text-sm hover:text-amber-300 transition-colors"
                  >
                    阅读全文 →
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
