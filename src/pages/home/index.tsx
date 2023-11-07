import React from "react";
const App: React.FC = props => {
  console.log(props);
  return <div>
      <div>{window._$m.t('我是一个新的页面')}</div>
    </div>;
};
export default App;