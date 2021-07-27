import "./App.css";
import Index from "./Pages/";
import { Provider } from "react-redux";
import store from "./Redux/Store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Index />
      </Provider>
    </div>
  );
}

export default App;
