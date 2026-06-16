import { notFound } from "next/navigation";
import type { Metadata } from "next";
import productsData from "@/data/products.json";
import type { Product } from "@/types";
import { ProductDetailClient } from "./ProductDetailClient";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return { title: "产品未找到" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "article",
    },
  };
}

export async function generateStaticParams() {
  const products = productsData as Product[];
  return products.map((p) => ({ id: p.id.toString() }));
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return <ProductDetailClient product={product} related={related} />;
}
