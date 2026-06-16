import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Phone, MapPin, Mail, User } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-4">
              开元金币
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              专注熊猫金币与贵金属收藏投资服务。致力于为中国金币爱好者提供专业、可靠、高端的贵金属收藏与投资指导。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              {[
                { href: "/products", label: "产品中心" },
                { href: "/panda-coins", label: "熊猫金币" },
                { href: "/commemorative", label: "纪念币" },
                { href: "/about", label: "关于我们" },
                { href: "/contact", label: "联系我们" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <User size={14} className="text-amber-500 shrink-0" />
                金总
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone size={14} className="text-amber-500 shrink-0" />
                13588086755
              </li>
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail size={14} className="text-amber-500 shrink-0" />
                contact@kaiyuangold.com
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin size={14} className="text-amber-500 shrink-0 mt-0.5" />
                中山中路337号
              </li>
            </ul>
          </div>

          {/* WeChat */}
          <div>
            <h4 className="text-white font-semibold mb-4">关注我们</h4>
            <div className="w-32 h-32 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500 text-xs">
                <div className="text-2xl mb-1">📱</div>
                微信二维码
                <br />
                （占位）
              </div>
            </div>
            <p className="text-gray-500 text-xs mt-2">
              扫描二维码关注官方微信
            </p>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} 开元金币 KaiYuan Gold. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>沪ICP备XXXXXXXX号</span>
            <span>贵金属投资有风险，入市需谨慎</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
