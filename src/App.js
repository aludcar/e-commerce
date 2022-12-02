import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.compoment";
import Signin from "./routes/sign-in/sign-in.component";

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
          <Route path="sign-in" element={<Signin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
