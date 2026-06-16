"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Shield, Award, TrendingUp, Package } from "lucide-react";
import type { Advantage } from "@/types";

const advantages: (Advantage & { icon: string })[] = [
  {
    icon: "shield",
    title: "正品保障",
    description:
      "所有产品均来自中国人民银行官方发行渠道，配有独立编号的鉴定证书。每一枚金币均可溯源，确保百分之百正品。",
  },
  {
    icon: "award",
    title: "专业服务",
    description:
      "拥有资深贵金属鉴定师团队，为您提供专业的产品咨询、真伪鉴定、市场分析等一站式服务，助力您的收藏投资之路。",
  },
  {
    icon: "trending-up",
    title: "投资指导",
    description:
      "实时关注国际金价走势，提供精准的市场分析与投资建议。帮助客户把握最佳买卖时机，实现贵金属资产的最优配置。",
  },
  {
    icon: "package",
    title: "收藏体系",
    description:
      "为您量身打造完整的熊猫金币收藏体系，从入门级银币到高端金币套装，一站式满足不同层次的收藏需求。",
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  award: Award,
  "trending-up": TrendingUp,
  package: Package,
};

export function Advantages() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="为什么选择开元金币"
            subtitle="四大核心优势，为您的贵金属收藏投资保驾护航"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, i) => {
            const Icon = iconMap[adv.icon];
            return (
              <ScrollReveal key={adv.title} delay={i * 0.1}>
                <motion.div
                  className="group relative rounded-xl border border-white/10 bg-white/[0.03] p-8 text-center hover:border-amber-500/30 transition-colors duration-300"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-3">
                      {adv.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
