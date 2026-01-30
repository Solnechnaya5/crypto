// import { useMemo } from 'react'
import { Card } from '../Card/Card'
import { CoinsList } from '../CoinsList/CoinsList'
import { Filter } from '../Filter/Filter'
import './styles.css'

export const Main = ({ balance, setBalance, coins, setCoins }) => {

// функція кешує список коінс і компонента з ним не ререндириться при зміні балансу
// тобто якщо списку з'явитьсе один айтем з ціною вище 1000, тоді список знову відфільтрується, 
// а так буде виводитися старий
// const expensiveCoins = useMemo(() => {
    // функція сортує список коінс по вартості більше 1000
//     return (filteredCoins ?? []).filter((coin) => Number(coin.price) > 1000);
//   }, [filteredCoins]);




    return (
        <main className='main'>
            <Card balance={balance} setBalance={setBalance} />
            {/* у фільтр прокидуємо початковий список коінс */}
            <Filter setCoins={setCoins}/>
            {/* якщо список існує, то ми виводимо компонет зі списком, а якщо ні - нічого */}
            {/* в список коінс передаємо відфільтрованих коінс, таким чином очиститься інпут, відміниться фільр і виведеться початковий список */}
           {coins ?<CoinsList />: <div>Loading</div>}
        </main>
    )
}