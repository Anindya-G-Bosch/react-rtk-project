import "./App.css";
import CakeComponent from "./features/cake/CakeComponent";
import IceCreamComponent from "./features/icecream/IceCreamComponent";
import UserComponent from "./features/user/UserComponent";

function App() {
  return (
    <div className="App">
      <CakeComponent />
      <IceCreamComponent />
      <UserComponent />
    </div>
  );
}

export default App;
