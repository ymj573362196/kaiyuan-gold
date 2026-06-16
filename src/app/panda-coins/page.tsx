import type { Metadata } from "next";
import { PandaCoinList } from "./PandaCoinList";

export const metadata: Metadata = {
  title: "熊猫金币专区",
  description:
    "开元金币熊猫金币专区，涵盖2025、2024、2023年熊猫金币及套装金币。中国人民银行官方发行，专业收藏投资指导。",
};

export default function PandaCoinsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PandaCoinList />
      </div>
    </div>
  );
}
