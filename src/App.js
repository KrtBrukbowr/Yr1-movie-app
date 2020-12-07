import './App.css';
import Search from './components/MovieSearch'
import Navbar from './components/Navbar/Navbar'
import Logo from './assets/tmdb4.svg'



// import useSticky from './hooks/useSticky'
// import Welcome from './components/Navbar/Welcome'

function App() {
  // const {isSticky, element} = useSticky()
  // const {isSticky} = useSticky()
  return (
    
  
    <div className="App">  
        <Navbar  />
        <div className="main-title">
           <img src={Logo} alt="Logo" className="App-logo"/>
        </div>
        <Search/>         
    </div>
    

  );
}

export default App;
