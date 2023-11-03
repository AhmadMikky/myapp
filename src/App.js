import './App.css';
import Cards from './cards'; // Adjust the path according to your directory structure
import Navbar from './Navbar'; // Adjust the path according to your directory structure

function App() {
  return (
    <div className="App">
    
    
      <Navbar /> {/* Render the Navbar component */}
      <h1>CS230L</h1>   
      <h2>Section-03</h2>  
      <p>WVU ID 800378834</p>  
      <p>Hi, my name is Ahmad Mikky</p> 
      <Cards /> {/* Render the Cards component */}
    </div>
  );
}

export default App;
