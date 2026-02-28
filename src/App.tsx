import Conclusion from "./components/Conclusion";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Weeks from "./components/Weeks";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Intro />
      <Weeks />
      <Conclusion />
    </div>
  );
}

export default App;
