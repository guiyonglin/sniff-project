import React from "react";
import "./app.css";
import {
  RouterProvider,
  RouterProviderProps,
  createBrowserRouter,
} from "react-router-dom";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

import { routers } from "./router";

const createRouter = (): RouterProviderProps["router"] => {
  return createBrowserRouter(
    routers.map((item) => {
      const Comp = item.component;
      return {
        element: <Comp />,
        path: item.path,
        errorElement: <div>err</div>,
      };
    })
  );
};

export const router = createRouter();

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <RouterProvider
        router={router}
        fallbackElement={<div>fallbackElement</div>}
      />
    </ConfigProvider>
  );
}
