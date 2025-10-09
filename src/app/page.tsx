// src/app/page.tsx
export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", lineHeight: 1.5 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid #eee" }}>
        <div style={{ fontWeight: 700 }}>Sora2 Video SaaS</div>
        <nav style={{ display: "flex", gap: 16 }}>
          <a href="#features">功能</a>
          <a href="#pricing">价格</a>
          <a href="#faq">FAQ</a>
          <a href="/dashboard">控制台</a>
        </nav>
      </header>

      <section style={{ padding: "72px 24px", textAlign: "center" }}>
        <h1 style={{ fontSize: 40, margin: 0 }}>文字生成视频，一键上线</h1>
        <p style={{ color: "#555", maxWidth: 720, margin: "12px auto 24px" }}>
          输入提示词，生成高质量短视频。内置队列、状态追踪与作品库。支持积分/订阅计费。
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <a href="/generate" style={{ padding: "12px 18px", background: "black", color: "white", borderRadius: 8, textDecoration: "none" }}>
            立即生成
          </a>
          <a href="#pricing" style={{ padding: "12px 18px", border: "1px solid #ccc", borderRadius: 8, textDecoration: "none" }}>
            查看价格
          </a>
        </div>
      </section>

      <section id="features" style={{ padding: "32px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28 }}>核心功能</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 12 }}>
          {[
            { title: "提示词生成", desc: "支持多语言提示词与预设模板。" },
            { title: "任务队列", desc: "异步生成，前端轮询/回调更新状态。" },
            { title: "作品库", desc: "成品视频集中管理与分享，支持下载与外链播放。" },
            { title: "计费系统", desc: "积分包或订阅两种模式，Stripe/Lemon Squeezy 可接入。" },
            { title: "对象存储", desc: "Cloudflare R2 / Supabase Storage 接入，低成本 + CDN。" },
            { title: "风控与监控", desc: "Upstash Ratelimit 防刷，Sentry 捕获错误。" },
          ].map((f) => (
            <div key={f.title} style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>{f.title}</div>
              <div style={{ color: "#666" }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" style={{ padding: "32px 24px", maxWidth: 1100, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28 }}>价格方案</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginTop: 12 }}>
          {[
            { name: "基础包", price: "￥29", feat: ["100 积分", "720p 输出", "标准队列"] },
            { name: "专业包", price: "￥99", feat: ["500 积分", "1080p 输出", "优先队列"] },
            { name: "订阅版", price: "￥199/月", feat: ["每月 1200 积分", "1080p/更高", "优先客服"] },
          ].map((p) => (
            <div key={p.name} style={{ border: "1px solid #eee", borderRadius: 12, padding: 16 }}>
              <div style={{ fontWeight: 700, fontSize: 18 }}>{p.name}</div>
              <div style={{ fontSize: 26, margin: "8px 0" }}>{p.price}</div>
              <ul style={{ paddingLeft: 18, color: "#666", margin: "8px 0 16px" }}>
                {p.feat.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a href="/checkout" style={{ padding: "10px 14px", background: "black", color: "white", borderRadius: 8, textDecoration: "none" }}>
                立即购买
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="faq" style={{ padding: "32px 24px", maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ fontSize: 28 }}>常见问题</h2>
        <details style={{ border: "1px solid #eee", borderRadius: 12, padding: 16, marginTop: 12 }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>生成需要多久？</summary>
          <div style={{ color: "#666", marginTop: 8 }}>任务进入队列后通常数十秒到数分钟，取决于排队与模型后端。</div>
        </details>
        <details style={{ border: "1px solid #eee", borderRadius: 12, padding: 16, marginTop: 12 }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>如何计费？</summary>
          <div style={{ color: "#666", marginTop: 8 }}>默认采用积分制；也可切换订阅模式。支付成功自动加额或开通订阅。</div>
        </details>
      </section>

      <footer style={{ padding: "24px", borderTop: "1px solid #eee", marginTop: 32, color: "#777", textAlign: "center" }}>
        © {new Date().getFullYear()} Sora2 Video SaaS. All rights reserved.
      </footer>
    </main>
  );
}
