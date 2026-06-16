"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProductCard } from "@/components/products/ProductCard";
import { MessageCircle, Shield, Award, ChevronRight } from "lucide-react";
import type { Product } from "@/types";

interface ProductDetailClientProps {
  product: Product;
  related: Product[];
}

export function ProductDetailClient({ product, related }: ProductDetailClientProps) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-amber-400 transition-colors">
            首页
          </Link>
          <ChevronRight size={14} />
          <Link href="/products" className="hover:text-amber-400 transition-colors">
            产品中心
          </Link>
          <ChevronRight size={14} />
          <span className="text-amber-400">{product.name}</span>
        </div>

        {/* Product Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-24">
              <div className="aspect-square bg-gradient-to-br from-amber-500/10 via-neutral-900 to-black rounded-2xl border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Large gold coin display */}
                <motion.div
                  className="relative w-3/4 h-3/4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-600 shadow-2xl shadow-amber-500/30" />
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-amber-300 to-yellow-400" />
                  <div className="absolute inset-[10px] rounded-full bg-gradient-to-br from-yellow-200 via-amber-300 to-amber-500" />
                  <div className="absolute inset-[18px] rounded-full bg-gradient-to-br from-amber-200 to-yellow-300 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-amber-900 text-2xl font-bold">
                        {product.material.startsWith("Au") ? "Au" : "Ag"}
                      </p>
                      <p className="text-amber-800 text-xs font-medium">
                        {product.material}
                      </p>
                      <p className="text-amber-700 text-xs mt-1">{product.weight}</p>
                    </div>
                  </div>
                  {/* Shine effect */}
                  <motion.div
                    className="absolute top-4 left-6 w-1/3 h-1/4 bg-white/40 rounded-full blur-md rotate-12"
                    animate={{ opacity: [0.3, 0.6, 0.3], x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right: Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex gap-2 mb-3 flex-wrap">
              <Badge variant="gold">{product.year}</Badge>
              <Badge variant="outline">{product.material}</Badge>
              <Badge variant="outline">{product.weight}</Badge>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {product.name}
            </h1>

            <p className="text-gray-400 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8 p-6 bg-amber-500/5 border border-amber-500/20 rounded-xl">
              <span className="text-gray-400 text-sm">参考价格</span>
              <span className="text-3xl font-bold text-amber-400">
                {product.price}
              </span>
              <span className="text-xs text-gray-500">
                *具体价格请咨询客服
              </span>
            </div>

            {/* Action */}
            <div className="flex gap-4 mb-10">
              <Button variant="gold" size="lg" className="flex-1 text-base">
                <MessageCircle size={18} className="mr-2" />
                咨询客服
              </Button>
            </div>

            {/* Specifications */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <Shield size={18} className="text-amber-400" />
                产品规格
              </h3>
              <div className="grid grid-cols-2 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/10">
                {product.specifications.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between px-4 py-3 text-sm bg-white/[0.02] ${
                      i % 2 === 0 ? "" : ""
                    }`}
                  >
                    <span className="text-gray-400">{spec.label}</span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Issuer */}
            <div className="mb-8">
              <h3 className="text-white font-semibold text-lg mb-2 flex items-center gap-2">
                <Award size={18} className="text-amber-400" />
                发行单位
              </h3>
              <p className="text-gray-300">{product.issuer}</p>
            </div>
          </motion.div>
        </div>

        {/* Collectible Value & Investment Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <ScrollReveal>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                📈 收藏价值
              </h3>
              <div className="w-12 h-0.5 bg-amber-500 mb-4" />
              <p className="text-gray-400 leading-relaxed">
                {product.collectibleValue}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                💰 投资分析
              </h3>
              <div className="w-12 h-0.5 bg-amber-500 mb-4" />
              <p className="text-gray-400 leading-relaxed">
                {product.investmentAnalysis}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div>
            <ScrollReveal>
              <SectionTitle
                title="相关产品"
                subtitle="您可能也会感兴趣的产品"
              />
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p, i) => (
                <ScrollReveal key={p.id} delay={i * 0.1}>
                  <ProductCard product={p} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
