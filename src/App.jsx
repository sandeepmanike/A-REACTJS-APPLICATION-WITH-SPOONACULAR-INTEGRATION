import { useEffect, useState } from "react";
import Search from "./components/Search";
import FoodItems from "./components/FoodItems";
import Nav from "./components/Nav";
import "./App.css";
import Containers from "./components/Containers";
import LeftContainer from "./components/LeftContainer.jsx";
import RightContainer from "./components/RightContainer.jsx";
import RecepieInfo from "./components/RecepieInfo.jsx";

function App() {
  const [foodItemLi, setfoodItemLi] = useState([]);
  const [id, setId] = useState("");
  return (
    <div>
      <Nav />
      <Search setfoodItemLi={setfoodItemLi} />
      <Containers>
        <LeftContainer>
          <FoodItems foodItemLi={foodItemLi} setId={setId} />
        </LeftContainer>
        <RightContainer>
          <RecepieInfo id={id} />
        </RightContainer>
      </Containers>
    </div>
  );
}

export default App;
