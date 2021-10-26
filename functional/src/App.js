import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'

class App extends Component{
  render(){
  return (
    <div className="App">
      <Counter/>
      {/* <Greet name="saba" heroName="Superman">
        <p>This is children prop</p>
      </Greet>
      <Greet name="Dev" heroName="Sipderman"/>
         <button>Props Button</button>
      <Greet/>
      <Greet name="evolution" heroName="Batman"/>
         <a href="https://google.com">Google</a>
      <Greet/>

      <Welcome name="saba" heroName="Superman"></Welcome>
      <Welcome name="Dev" heroName="Sipderman"></Welcome>
      <Welcome name="evolution" heroName="Batman"></Welcome> */}
      {/* <Message/> */}
    </div>
  );
  }
}

export default App;
