import NavBar from "./components/Nav";
import Home from "./layouts/home";
import Services from "./layouts/Services";

function App() {
  return (
    <div className="w-full h-full center flex-col relative">
      {/* <NavBar /> */}
      <Home />
      <Services />
    </div>
  );
}

export default App;
