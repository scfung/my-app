import logo from './logo.svg';
import './App.css';

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function App() {
  const name = "S";
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  
  return (
    <ul>{listItems}</ul>
  );
  
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <MyButton/> 
    </div>
  );
}

export default App;
