import { NextResponse } from "next/server";

// 模拟用户数据
const users: Record<string, { id: string; name: string; age: number }> = {
  "1": { id: "1", name: "张三", age: 25 },
  "2": { id: "2", name: "李四", age: 30 },
  "3": { id: "3", name: "王五", age: 22 },
};

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const user = users[id];
  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ error: "用户不存在" }, { status: 404 });
  }
}
