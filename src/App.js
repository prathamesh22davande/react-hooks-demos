import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";
import HookCounterTwo from "./components/useState/HookCounterTwo";

function App() {
  return (
    <div>
      <p>Counter using Class Component</p>
      <ClassCounter />
      <p>Counter using useState Hook with functional component</p>
      <HookCounter />
      <p>Counter with increment decrement and reset</p>
      <HookCounterTwo />
    </div>
  );
}

export default App;
