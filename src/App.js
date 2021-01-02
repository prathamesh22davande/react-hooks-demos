import ClassCounter from "./components/useState/ClassCounter";
import HookArray from "./components/useState/HookArray";
import HookCounter from "./components/useState/HookCounter";
import HookCounterTwo from "./components/useState/HookCounterTwo";
import HookObjects from "./components/useState/HookObjects";

function App() {
  return (
    <div className="container">
      <p>Counter using Class Component</p>
      <ClassCounter />
      <p>Counter using useState Hook with functional component</p>
      <HookCounter />
      <p>Counter with increment decrement and reset</p>
      <HookCounterTwo />
      <p>Hooks with objects</p>
      <HookObjects />
      <p>Hooks with Array</p>
      <HookArray />
    </div>
  );
}

export default App;
