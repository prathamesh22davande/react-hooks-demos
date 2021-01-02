import ClassCounter from "./components/useState/ClassCounter";
import HookCounter from "./components/useState/HookCounter";

function App() {
  return (
    <div>
      <p>Counter using Class Component</p>
      <ClassCounter />
      <p>Counter using useState Hook with functional component</p>
      <HookCounter />
    </div>
  );
}

export default App;
