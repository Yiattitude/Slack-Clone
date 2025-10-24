"use client";

import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";
import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
  <ConvexAuthNextjsProvider client={convex}>
    {children}
  </ConvexAuthNextjsProvider>
  );
}

/*为了 在客户端上工作，必须传递给它。<ConvexProvider>ConvexReactClient

在文件夹中，使用以下代码添加一个新文件。
这将创建一个客户端组件，该组件包装并传递给它 .
app/ConvexClientProvider.tsx<ConvexProvider><ConvexReactClient></ConvexReactClient>*/