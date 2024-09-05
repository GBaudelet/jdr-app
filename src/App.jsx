import { Routes, Route } from "react-router-dom";
import Home from "./Components/global/Home";
import Auth from "./Components/global/Auth";
import Header from "./Components//global/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>

      <main>
        <h2>on révise pour demain !!</h2>
      </main>
    </>
  );
}

export default App;
