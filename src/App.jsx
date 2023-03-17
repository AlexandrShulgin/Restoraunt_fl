import "./reset.css";
import "./Fonts/fonts.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Componets/AppRouter";

function App() {
return (
  <div className="App">
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter> 
  </div>
  
);
};

export default App;
