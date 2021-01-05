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
    <div className="title">
      <Card className='main'>

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
