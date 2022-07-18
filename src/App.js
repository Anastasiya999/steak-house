import "./style/App.scss";
import AdContainer from "./components/AdContainer";
import Header from "./components/Header";
import LogoBar from "./components/LogoBar";
import Slider from "./components/Slider";
import NavBar from "./components/NavBar";

const logos = [
  "/assets/Bitmap.png",
  "/assets/Bitmap-2.png",
  "/assets/Bitmap-3.png",
  "/assets/Bitmap-4.png",
  "/assets/e.png",
];

function App() {
  return (
    <div>
      <Header>
        <NavBar />
        <Slider />
        <LogoBar logos={logos} />
        <AdContainer />
      </Header>
    </div>
  );
}

export default App;
