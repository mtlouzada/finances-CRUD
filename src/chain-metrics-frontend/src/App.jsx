import { useState, useEffect } from 'react';
import { chain_metrics_backend } from 'declarations/chain-metrics-backend';

function App() {

  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const result = await chain_metrics_backend.getBalance("user1");
      setBalance(result);
    };
    fetchBalance();
  }, []);


  return (
    <div>
    <h1>Chain Metrics</h1>
    <p>Your Balance: {balance ? `${balance} ICP` : "Loading..."}</p>
  </div>
  );
} 

export default App;
