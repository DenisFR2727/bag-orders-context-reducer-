import { StateProvider } from "../src/components/context/context";
import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  return (
    <StateProvider>
         <div className="App">
                <Header />
                <Main />
         </div>
    </StateProvider>
    
  );
}

export default App;
