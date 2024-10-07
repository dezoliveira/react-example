import { useState } from 'react'
import './App.css'
import Fruit from './components/FruitsList'

// App
function App() {
  // uso do estado do React
  const [fruits, setFruits] = useState(
    [
      {id: 0, name: "banana"},
      {id: 1, name: "uva"},
      {id: 2, name: "maçã"},
      {id: 3, name: "pêra"},
      {id: 4, name: "melancia"},
    ]
  )

  const removeFruits = (id) => {
    // remove a fruta pelo id
    const filteredFruits = fruits.filter((fruit) =>{
      return fruit.id !== id
    })

    // muda o estado de fruits
    setFruits(filteredFruits)
  }

  return (
    <>
      {/* Componente Fruta */}
      <Fruit
        // data e função removeFruits como props
        data={fruits}
        removeFruits={removeFruits}
      />
    </>
  )
}

export default App
