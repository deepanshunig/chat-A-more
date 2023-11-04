
import { Button, ButtonGroup } from '@chakra-ui/react'
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage}></Route>
      <Route  path="/" component={Chatpage}></Route>
    
    </div>
  );
}

export default App;
