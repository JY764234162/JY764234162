import React from "react";
export default function HomeIdPage({
  params,
  searchParams,
}: {
  params: { id: string }; // 动态路由参数          /home/[id]
  searchParams: { name?: string }; // query查询参数  ?name=xxx
}) {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>动态路由页面</h1>
      <p>当前 id: {params.id}</p>
      <p>当前 查询参数: {searchParams.name}</p>
    </main>
  );
}
