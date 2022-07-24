import Expenses from './components/Expenses'
import './App.css';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 159,
      date: new Date(2022, 6, 12),
    },

    {
      id: 'e2',
      title: 'New TV',
      amount: 57000,
      date: new Date(2022, 2, 4),
    },

    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 2000000,
      date: new Date(2022, 2, 25),
    },

    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 34000,
      date: new Date(2022, 28, 12),
    },
  ]
  return (
    <div className="App">
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
      
    </div>
  );
}

export default App;
