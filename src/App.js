import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummery from './components/AccountSummery';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';


// ***************** Material-UI ***********

import { Card } from '@material-ui/core'

function App() {
  return (
    <div > 
      <div id='title'>
      <h3> EXPENSE TRACKER BY ZUBAIR</h3>
      </div>
      <Card  id='main'>

      <Header />
      <Balance/>
      <AccountSummery />
      <TransactionHistory />
      <AddTransaction />


      </Card>
      

     </div>
  );
}

export default App;
