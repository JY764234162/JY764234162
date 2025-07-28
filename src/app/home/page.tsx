"use client";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <style jsx>{`
        h1 {
          color: blue;
        }
      `}</style>

      <h1>欢迎来到 Home 页面！</h1>
      <p>这是一个由 Next.js app router 创建的 /home 路由页面。</p>
    </main>
  );
}
