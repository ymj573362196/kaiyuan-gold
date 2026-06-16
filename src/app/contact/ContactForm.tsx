"use client";

import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Pure frontend, show success state
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-white text-xl font-semibold mb-2">留言已提交</h3>
        <p className="text-gray-400 mb-6">
          感谢您的留言，我们的客服团队将尽快与您联系！
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          继续留言
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          姓名 <span className="text-amber-400">*</span>
        </label>
        <Input
          placeholder="请输入您的姓名"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          邮箱 <span className="text-amber-400">*</span>
        </label>
        <Input
          type="email"
          placeholder="请输入您的邮箱"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">电话</label>
        <Input
          type="tel"
          placeholder="请输入您的电话号码（选填）"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-1.5">
          留言内容 <span className="text-amber-400">*</span>
        </label>
        <Textarea
          placeholder="请输入您想咨询的内容..."
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
        />
      </div>

      <Button type="submit" variant="gold" className="w-full">
        提交留言
      </Button>
    </form>
  );
}
