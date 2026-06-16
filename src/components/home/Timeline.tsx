"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import type { TimelineEvent } from "@/types";

const events: TimelineEvent[] = [
  {
    year: "1982",
    title: "首枚熊猫金币发行",
    description:
      "中国人民银行发行第一枚熊猫金币，正面为天坛祈年殿，背面为熊猫食竹图。开创了中国贵金属纪念币的新纪元。",
  },
  {
    year: "1983",
    title: "熊猫银币问世",
    description:
      "首枚熊猫银币发行，与金币形成完整系列。同年熊猫金币荣获世界最佳金币大奖，中国贵金属币首次获得国际认可。",
  },
  {
    year: "2001",
    title: "设计重大革新",
    description:
      "熊猫金币设计进行全面革新，取消边框设计，采用无清边工艺，画面更加开阔。同时开始采用先进的激光雕刻技术。",
  },
  {
    year: "2016",
    title: "计量单位改为克",
    description:
      "为与国际接轨，熊猫金币计量单位从盎司改为克。30g替代1盎司成为主要规格，标志着中国金币国际化的新里程碑。",
  },
  {
    year: "2022",
    title: "熊猫金币40周年",
    description:
      "熊猫金币发行40周年，推出纪念版金币。40年来熊猫金币已成为全球五大投资金币之一，年发行量超50万枚。",
  },
  {
    year: "2025",
    title: "全新设计语言",
    description:
      "2025版熊猫金币采用全新大熊猫攀树图案，工艺精度达到新高度。熊猫金币系列持续创新，领跑全球贵金属币市场。",
  },
];

export function Timeline() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="熊猫金币发展历程"
            subtitle="1982年至今，四十余载经典传承，见证中国金币走向世界"
          />
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-amber-500/50 to-transparent md:-translate-x-px" />

          {events.map((event, i) => (
            <ScrollReveal key={event.year} delay={i * 0.1}>
              <div
                className={`relative flex items-start mb-10 md:mb-16 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <motion.div
                    className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-amber-500/30 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="inline-block text-amber-400 font-bold text-lg mb-2">
                      {event.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </motion.div>
                </div>

                {/* Dot on timeline */}
                <div className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50 ring-4 ring-black z-10" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
