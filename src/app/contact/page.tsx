import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "联系我们",
  description:
    "联系开元金币。咨询熊猫金币、金银纪念币及贵金属投资等相关问题。电话、邮箱、地址、微信二维码及在线留言表单。",
};

const contactInfo = [
  {
    icon: Phone,
    label: "客服电话",
    value: "400-888-XXXX",
    desc: "周一至周日 9:00 - 21:00",
  },
  {
    icon: Mail,
    label: "电子邮箱",
    value: "contact@kaiyuangold.com",
    desc: "我们将在24小时内回复",
  },
  {
    icon: MapPin,
    label: "公司地址",
    value: "上海市浦东新区陆家嘴金融城XX号",
    desc: "欢迎预约到访",
  },
  {
    icon: Clock,
    label: "营业时间",
    value: "周一至周日 9:00 - 18:00",
    desc: "法定节假日另行通知",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionTitle
            title="联系我们"
            subtitle="专业团队，为您提供贵金属收藏与投资的全方位咨询服务"
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div>
            <ScrollReveal delay={0.1}>
              <h3 className="text-white text-xl font-semibold mb-6 flex items-center gap-2">
                <MessageCircle size={20} className="text-amber-400" />
                联系方式
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, i) => (
                <ScrollReveal key={info.label} delay={0.1 + i * 0.05}>
                  <Card className="border-white/10 bg-white/[0.02] hover:border-amber-500/20 transition-colors h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                          <info.icon size={18} className="text-amber-400" />
                        </div>
                        <span className="text-gray-400 text-sm">
                          {info.label}
                        </span>
                      </div>
                      <p className="text-white font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-gray-500 text-xs">{info.desc}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            {/* WeChat QR */}
            <ScrollReveal delay={0.3}>
              <Card className="border-white/10 bg-white/[0.02]">
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="w-28 h-28 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <div className="text-center text-gray-500">
                      <div className="text-3xl mb-1">📱</div>
                      <div className="text-[10px]">微信二维码</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">
                      关注微信公众号
                    </h4>
                    <p className="text-gray-400 text-sm">
                      扫描左侧二维码或搜索 &ldquo;开元金币&rdquo;
                      关注官方微信公众号，获取最新金币资讯与市场分析
                    </p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right: Contact Form */}
          <div>
            <ScrollReveal delay={0.2}>
              <h3 className="text-white text-xl font-semibold mb-6">在线留言</h3>
              <Card className="border-white/10 bg-white/[0.02]">
                <CardContent className="p-6 md:p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
