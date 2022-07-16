import "./style/App.scss";
import AdContainer from "./components/AdContainer";
import Header from "./components/Header";
import LogoBar from "./components/LogoBar";
import Slider from "./components/Slider";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header>
        <Menu />
        <Slider />
        <LogoBar />
        <AdContainer />
      </Header>
    </div>
  );
}

export default App;
