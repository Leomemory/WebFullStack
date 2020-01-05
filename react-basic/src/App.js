import React from 'react';
import './App.css';
// import AppTest from './components/AntdTest'
// import CommentList from './components/CommentList'
// import Hoc from './components/Hoc';
// import Composition from './components/Composition'
// import Clock from './components/Clock'

// import HookTest from './components/HookTest'
// import ContextTest from './components/ContextTest'
// import AntdForm from './components/AntdForm'
// import KForm from './components/KForm'

import ReduxTest from './components/ReduxTest'
import { Provider } from "react-redux"
import store from './store'
import RouterSample from './components/RouterSample'

function App() {
  return (
    <div className="App">
       {/* <AppTest></AppTest>

       <CommentList></CommentList>

       <Hoc></Hoc>

       <Composition></Composition>

       <Clock></Clock>

       <HookTest></HookTest>

       <ContextTest></ContextTest>

       <AntdForm></AntdForm

       <KForm></KForm>>*/}

       {/* <ReduxTest></ReduxTest> */}
       <Provider store={store}>
           <ReduxTest />

           <RouterSample></RouterSample>
       </Provider>
    </div>
  );
}

export default App;
