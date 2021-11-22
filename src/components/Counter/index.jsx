import './style.css';

export default function Counter({count, onAddClick, onMinusClick, onClearClick}) {

  return (
    <div className="counter-container">
      <p>Contador: {count}</p>
      <div>
        <button onClick={onAddClick}>
          Adicione 1 ao contador
        </button>
      </div>

      <div>
        <button onClick={onMinusClick}>Subtrair 1</button>
      </div>

      <div>
        <button onClick={onClearClick}> Zerar contador</button>
      </div>
    </div>
  );
}
