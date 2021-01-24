import './App.css';
import Sidebar from './Component/Sidebar';
import Feed from './Component/Feed'
import Widgets from "./Component/Widgets";

function App() {
  return (
    <div className="App">
      {/* <h1>Let's build a Twitter Clone</h1> */}

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
