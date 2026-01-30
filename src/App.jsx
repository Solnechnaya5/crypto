import { useEffect, useState } from "react"
import { Header } from "./components/Header/Header"
import { Main } from "./components/Main/Main"
import { getCoins } from "./components/api/api";
import { CoinsContext } from "./context/coinsContext";

function App() {
  const [balance, setBalance] = useState(120000);
  const [coins, setCoins] = useState([]);
  //створюємо стейт, що буде повертати список всіх coins після очищення інпута
  const [filteredCoins, setFilteredCoins] = useState([]);

// отримання данних по апі за допомогою axios
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins)
    };
    fetchData();
  }, []);


  return (
    <>
    <CoinsContext.Provider value={{coins, filteredCoins}}>
      <Header />
      <Main coins={coins} filteredCoins={filteredCoins} setCoins={setFilteredCoins} balance={balance} setBalance={setBalance} />

    </CoinsContext.Provider>
    </>
  )
}

export default App
