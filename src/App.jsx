// import { invoke } from "@tauri-apps/api/core";

import "./App.css";
import Header from "./components/Header";
import TreeView from "./components/TreeView";
function App() {

  return (
    <div className="root">
      {/* 上部メニューバー */}
      <Header/>

      {/* 中央作業場 */}
      <div className="main">
        <TreeView />
      </div>
    </div>
  );
}

export default App;
