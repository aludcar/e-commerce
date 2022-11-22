import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.compoment";
import Sigin from "./routes/sig-in/sig-in.component";

const Shop = () => {
  return <h1>I am the shop page </h1>;
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sig-in" element={<Sigin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
