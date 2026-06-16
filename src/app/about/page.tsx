import type { Metadata } from "next";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, Award, TrendingUp, Users, Eye, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "关于我们",
  description:
    "开元金币公司介绍。专注熊猫金币与贵金属收藏投资，拥有资深鉴定团队与完善服务体系。了解我们的企业优势与专业资质。",
};

const strengths = [
  {
    icon: Shield,
    title: "正品保障体系",
    desc: "每款产品均配备独立编号鉴定证书，支持官方渠道验证。建立完整的溯源体系，确保产品来源可查、品质可靠。",
  },
  {
    icon: Award,
    title: "专业鉴定评估",
    desc: "团队拥有多名国家注册贵金属鉴定师，可为客户提供权威的贵金属真伪鉴定与价值评估服务。",
  },
  {
    icon: TrendingUp,
    title: "投资研究团队",
    desc: "配备专业的宏观分析师与贵金属研究员，持续跟踪全球宏观经济与黄金市场走势。",
  },
  {
    icon: Users,
    title: "客户服务体系",
    desc: "为每位客户配备专属顾问，提供从入门到进阶的全程陪伴式服务，满足不同层次的收藏投资需求。",
  },
  {
    icon: Eye,
    title: "市场前瞻能力",
    desc: "深度研究贵金属市场周期规律，提前把握市场机会，帮助客户实现资产的保值增值。",
  },
  {
    icon: Target,
    title: "精准投资策略",
    desc: "根据客户不同的风险偏好和投资目标，量身定制个性化的贵金属投资组合方案。",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <ScrollReveal>
          <SectionTitle
            title="关于开元金币"
            subtitle="传承金币文化，专注贵金属收藏投资"
          />
        </ScrollReveal>

        {/* Company Intro */}
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="border-amber-500/20 bg-gradient-to-b from-white/[0.05] to-transparent">
              <CardContent className="p-8 md:p-12">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  开元金币成立于中国金融中心上海，是一家专注于熊猫金币及贵金属收藏品的高端服务机构。自成立以来，我们始终秉持&ldquo;专业、诚信、前瞻&rdquo;的经营理念，致力于为中国贵金属投资者和收藏爱好者提供最优质的产品与服务。
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  我们与中国人民银行下属中国金币集团有限公司保持紧密合作，确保所有产品均为官方正品。公司汇聚了一批资深贵金属鉴定师、市场分析师和收藏顾问，可为客户提供从产品选购、真伪鉴定到投资分析的全链条专业服务。
                </p>
                <p className="text-gray-400 leading-relaxed">
                  在贵金属市场持续升温的背景下，开元金币将继续发挥专业优势，助力每一位客户在贵金属收藏与投资领域实现价值最大化。我们不仅销售贵金属产品，更致力于传播中国金币文化，让更多人了解并参与到这一兼具文化内涵与投资价值的领域中来。
                </p>
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        {/* Numbers */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { num: "40+", label: "年行业历史" },
              { num: "10万+", label: "服务客户" },
              { num: "500+", label: "在售品种" },
              { num: "100%", label: "正品保障" },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-2">
                  {num}
                </div>
                <div className="text-gray-400 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <Separator className="my-16 bg-white/10" />

        {/* Strengths */}
        <ScrollReveal>
          <SectionTitle
            title="企业优势"
            subtitle="六大核心能力，构筑贵金属收藏投资领域的专业壁垒"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {strengths.map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.08}>
              <div className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:border-amber-500/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                  <s.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Qualifications */}
        <ScrollReveal>
          <SectionTitle
            title="资质展示"
            subtitle="权威认证，品质保证"
          />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
            {[
              "中国金币特许零售商",
              "贵金属经营许可证",
              "国家金银制品质量监督检验",
              "中国钱币学会会员单位",
            ].map((cert) => (
              <div
                key={cert}
                className="text-center p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:border-amber-500/20 transition-colors"
              >
                <div className="text-3xl mb-3">🏅</div>
                <p className="text-gray-300 text-sm">{cert}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
