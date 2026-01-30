import { CoinsContext } from '../../context/coinsContext'
import './styles.css'
import { useContext, useEffect, useState } from 'react'

export const Filter = ({ setCoins }) => {

    // використовуємо контекст
    const coinsContext = useContext(CoinsContext)

    // дестркуткризуємо (витягуємо) значення filteredCoins з контексту
    const { coins } = coinsContext

    const [value, setValue] = useState('');


    // useEffect спрацьовує кожного разу, коли змінюється value
    useEffect(() => {
        // coins.filter робимо фільтр по масиву coins
        // беремо coin і перевіряємо чи він містить в своїй назві значення, що введене в інпут
        //  coin.name.toLowerCase() - приводимо всі значення у нижній реєстр для точного відображення
        const coinsFiltered = coins.filter((coin) => {

            return coin.name.toLowerCase().includes(value.toLowerCase());
        }
        );
        // в coins виводимо відфільтровані значення
        setCoins(coinsFiltered);

        // useEffect спрацьовує кожного разу, коли змінюється value
    }, [value])


    return (
        <div className="filter">
            <input
                value={value}
                onChange={(e) => (setValue(e.target.value))}
                type="text" className="filter-input"
                placeholder='Search for..' />
        </div>
    );
}
