import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const {
  Header,
  Content,
  Footer
} = Layout;
const App: React.FC = () => {
  const {
    token: {
      colorBgContainer
    }
  } = theme.useToken();
  return <Layout className="layout">
      <Header style={{
      display: "flex",
      alignItems: "center"
    }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]} items={new Array(15).fill(null).map((_, index) => {
        const key = index + 1;
        return {
          key,
          label: `nav ${key}`
        };
      })} />
      </Header>
      <Content style={{
      padding: "0 50px"
    }}>
        <Breadcrumb style={{
        margin: "16px 0"
      }}>
          <Breadcrumb.Item>{window._$m.t('首页')}</Breadcrumb.Item>
          <Breadcrumb.Item>{window._$m.t('看板')}</Breadcrumb.Item>
          <Breadcrumb.Item>{window._$m.t('广告')}</Breadcrumb.Item>
        </Breadcrumb>
      </Content>
      <Footer style={{
      textAlign: "center"
    }}>{window._$m.t('我是底部的')}</Footer>
    </Layout>;
};
export default App;