import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    // No-op for now — avoid invalid empty query name used previously.
    // Replace with a real query when available, e.g. ctx.db.query("tasks").collect()
    return [];
  },
});
/*在文件夹中，添加一个新文件，其中包含加载数据的查询函数。convex/tasks.ts

从此文件导出查询函数 声明一个以文件命名的 API 函数 导出名称：。api.tasks.get */