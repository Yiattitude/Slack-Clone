import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
  isAuthenticatedNextjs
} from "@convex-dev/auth/nextjs/server";
 
const isSignInPage = createRouteMatcher(["/auth"]);
const isProtectedRoute = createRouteMatcher(["/product(.*)"]);
const isAuthApiRoute = createRouteMatcher(["/api/auth(.*)"]);
 
export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  // 允许认证API路由通过
  
  
  
  
  if (!isProtectedRoute(request) && !isAuthenticatedNextjs()) {
    return nextjsMiddlewareRedirect(request, "/auth");
  }
});
 
export const config = {
  // The following matcher runs middleware on all routes
  // except static assets.
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

/**Convex Auth 提供了一个 API 和辅助函数，用于实现您的 中间件：

createRouteMatcher是一个辅助函数，它使用相同的语法作为中间件。你用一个 glob 模式列表调用它，它返回一个函数 给定返回路由是否匹配。configNextRequest

nextjsMiddlewareRedirect是触发重定向的简单快捷方式：  */