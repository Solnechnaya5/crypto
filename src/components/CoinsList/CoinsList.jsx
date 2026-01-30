import { useContext } from 'react';
import './styles.css'
import { CoinsContext } from '../../context/coinsContext';

export const CoinsList = () => {
    // використовуємо контекст
const coinsContext = useContext(CoinsContext)

// деструктуризуємо (витягуємо) значення filteredCoins з контексту
const {filteredCoins} = coinsContext

    return (
        <ul className="coins-list">
            {filteredCoins?.map((coin) => (
                <li key={coin.uuid} className="coin-item">
                    <div className="coin-item__info " style={{color:coin.color}}>
                        <img className="coin-icon" src={coin.iconUrl} alt={coin.name} />
                        <span className="coin-name">{coin.name}</span>
                    </div>
                    <div className="coin-item__info price-info" style={{color:coin.color}}>
                        {/* ціна отримується строкою, спочатку перетворюємо в діжках її на число, а потм заокруглюємо до 2 */}
                        <span className="coin-price">{(+coin.price).toFixed(2)}/USD</span>
                        <span className="coin-btc-price">{(+coin.btcPrice).toFixed(2)}/BTC</span>
                    </div>
                </li>
            ))}
        </ul>
    );
}