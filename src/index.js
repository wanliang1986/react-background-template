import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'
import store from './store/index';
import { Provider } from 'react-redux';
import {persistor} from './store/index'
import {PersistGate} from 'redux-persist/lib/integration/react';
import './iconfonts/iconfont.css'
ReactDOM.render(
  <Provider store={store}>
      {/* PersistGate数据持久化组件，保证redux中保存的数据在页面刷新后不会出现丢失现象；
          The PersistGate data persistence component ensures that data stored in Redux will not be lost after a page refresh
       */}
      <PersistGate loading={null} persistor={persistor}>
        {/* <Suspense> */}
          <App />
        {/* </Suspense> */}
      </PersistGate>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
