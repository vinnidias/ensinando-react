import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Counter from './components/Counter';
import InfoCard from './components/InfoCard';
import PokeCard from './components/PokeCard';

function App() {
  const [count, setCount] = useState(0)
  const bernardoAvatar = "logo192.png"

  const handeAddClick = () => {
    setCount(count + 1)
  }

  function handleMinusClick() {
    setCount(count - 1)
  }

  const handleClearClick = () => {
    setCount(0); 
    console.log("tu zerou bobão")
  }

  return (
    <div className="main-container">
     <Header />
     <div className="cards-container">
      <Counter
        count={count}
        onAddClick={handeAddClick}
        onMinusClick={handleMinusClick}
        onClearClick={handleClearClick}
      />
      <InfoCard 
        age={28}
        name={"Vinicius Dias"}
        profession={"Programador"}
        imgPath={"image.jpeg"}
      />


    <PokeCard 
      id={"001"}
      name={"Bulbasaur"}
      types={["Grass", "Poison"]}
      imagePath={"1.png"}
     />
     </div>
     
     
    </div>
  );
}

export default App;
