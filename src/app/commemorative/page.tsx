import type { Metadata } from "next";
import { CommemorativeList } from "./CommemorativeList";

export const metadata: Metadata = {
  title: "纪念币",
  description:
    "开元金币纪念币专区，汇集生肖纪念金币、重大历史事件纪念币、文化艺术系列纪念币等。具有深厚文化内涵与收藏价值。",
};

export default function CommemorativePage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CommemorativeList />
      </div>
    </div>
  );
}
