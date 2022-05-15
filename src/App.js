
import { Center } from '@chakra-ui/react';
import './App.css';
import Dashboard from './Dashboard';
import Nav from './Nav';

function App() {
  return (
    <>
    <Nav/>
    <center className="heading">My Applications</center>
    <Dashboard/>
    </>
  );
}

export default App;
