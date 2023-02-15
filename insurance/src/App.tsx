import NavBar from "./components/Nav";
import About from "./layouts/About";
import Home from "./layouts/home";
import Services from "./layouts/Services";

function App() {
  return (
    <div className="w-full h-full center flex-col relative">
      {/* <NavBar /> */}
      <Home />
      <Services />
      <About />
    </div>
  );
}

export default App;
