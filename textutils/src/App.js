import logo from './logo.svg';
import './App.css';

let name="Saba";
function App() {
  return (
     <>
     <nav>
       <li>Home</li>
       <li>About</li>
       <li>Contact</li>
     </nav>
     <h1>Hello {name}</h1>
     <div className="container">
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nam, architecto odit eveniet suscipit illo et quia dignissimos perferendis libero ipsum qui autem rerum id! Molestiae quas non officia perferendis.</p>
     </div>
     </>
  );
}

export default App;
