import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

let routes = [
  {
    path: "/",
    auth: false,
    component: lazy(() => import("../layouts/index")),
    children: [
      {
        path: "home",
        auth: false,
        component: lazy(() => import("../pages/home/index")),
      },
      {
        path: "my",
        auth: false,
        component: lazy(() => import("../pages/my/index")),
      }
    ],
  },
  {
    path: "*",
    auth: false,
    component: lazy(() => import("../pages/404")),
  },
  {
    path: "/mySeKa",
    auth: false,
    component: lazy(() => import("../pages/color/index")),
  }
];

const generateRouter = (routers: any) => {
  return routers.map((item: any) => {
    if (item.children) {
      item.children = generateRouter(item.children);
    }
    item.element = (
      <Suspense fallback={<div>加载中...</div>}>
        {/* 把懒加载的异步路由变成组件装载进去 */}
        <item.component />
      </Suspense>
    );
    return item;
  });
};

const Router = () => useRoutes(generateRouter(routes));

export { Router, routes };
