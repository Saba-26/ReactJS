import React,{Component} from "react";
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
export default class App extends Component{
  constructor(){
    super();
    this.state={
      count:0
    };
  }

     incrementCount = () => {
     this.setState({
        count:this.state.count+1
     });
  };

 decrementCount=() => {
    this.setState({
       count:this.state.count-1
    });
 };

 reset=() => {
  this.state({
     count:this.state.count-0
  });
};
  
 render() {
     let {count}=this.state;
     return (
      <div className="App">
         <div>
           <div class="count">
             <h2>Count:</h2>
             <h1>{count}</h1>
           </div>
           <div class="button">
             <Button title={"Increment"} action={this.incrementCount}/>
             <Button title={"Decrement"} action={this.decrementCount}/>
             <Button title="{Reset}" action={this.resetCount}/>
           </div>
         </div>
      </div>
    );
}
}

