import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/incrementActions";
import { signIn, signOut } from "./actions/loggedActions";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      Counter value {counter}
      <br></br>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      {isLogged ? (
        <h3>This is a valuable information</h3>
      ) : (
        <div>Default page</div>
      )}
      <br />
      <button onClick={() => dispatch(signIn())}>Sign IN</button>
      <br />
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
    </div>
  );
}

export default App;
