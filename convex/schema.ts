import { defineSchema } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
 
const schema = defineSchema({
  ...authTables,
  // Your other tables...
});
 
export default schema;
/* 将身份验证表添加到架构
Convex Auth 假设您设置了多个具有特定索引的表*/
/* 创建一个新文件，并将其保存为 convex/schema.ts。

在文件中，使用 defineSchema 函数定义架构。

然后，将 authTables 导入到架构中。

最后，导出架构。

这样，Convex 就会知道您的架构，并使用它来验证身份验证表。*/