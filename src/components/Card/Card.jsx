import './styles.css'

export const Card = ({ balance, setBalance }) => {
    return (
        <div className="balance-card">
            <div className="balance-card__details">
                <div className="balance-card__name">Royal Crypto</div>
                <button className="balance-card__btn"
                // prev використоується замість balance
                   onClick={() => setBalance(prev => prev + 10000)}
                >Add money</button>
            </div>
            <div className="balance-card__details">
                <div className="balance-card__user">Yulia</div>
                <div className="balance-card__amount">{balance}$</div>
            </div>
        </div>
    );
}