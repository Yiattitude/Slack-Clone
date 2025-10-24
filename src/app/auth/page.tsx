import { AuthScreen } from "@/src/features/auth/components/auth-screen";

const AuthPage = () => {

  return (
     <AuthScreen />
  );
}

export default AuthPage; 
// // 服务端的渲染器？让服务端进行重新定向？
// // 示例：在 Next.js 中可以通过 server component 或 middleware 实现服务端重定向。
// // 例如在 server component 中：
// // import { redirect } from "next/navigation";
// // if (!isAuthenticated) {
// //   redirect("/auth");
// // }
// // 如果用户未登录，可以将其重定向到 /auth 页面以确保认证流程