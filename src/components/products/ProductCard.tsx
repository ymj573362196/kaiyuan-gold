"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
      <Link href={`/products/${product.id}`} className="block group">
        <div className="relative rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden hover:border-amber-500/40 transition-all duration-300">
          {/* Image Container */}
          <div className="aspect-square bg-gradient-to-br from-amber-500/5 to-neutral-900 flex items-center justify-center overflow-hidden relative">
            {/* Gold glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Coin placeholder */}
            <div className="relative w-3/4 h-3/4">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 via-yellow-300 to-amber-600 opacity-80 shadow-2xl shadow-amber-500/20 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-300 to-yellow-400 opacity-60" />
              <div className="absolute inset-[6px] rounded-full bg-gradient-to-br from-yellow-200 to-amber-400 flex items-center justify-center">
                <span className="text-amber-900 text-lg font-bold">
                  {product.material.startsWith("Au") ? "Au" : "Ag"}
                </span>
              </div>

              {/* Shine effect */}
              <div className="absolute top-2 left-4 w-1/3 h-1/4 bg-white/30 rounded-full blur-sm rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="gold" className="text-xs">
                {product.year}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {product.material}
              </Badge>
            </div>

            <h3 className="text-white font-semibold text-base mb-1 group-hover:text-amber-400 transition-colors line-clamp-1">
              {product.name}
            </h3>

            <div className="flex items-center justify-between mt-3">
              <span className="text-gray-400 text-sm">{product.weight}</span>
              <span className="text-amber-400 font-bold text-lg">
                {product.price}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
