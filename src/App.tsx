import { Button } from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Button clicked!");
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Button label="Click Me" onClick={handleClick} variant="primary" />
      <Button
        label="Disabled"
        onClick={handleClick}
        variant="secondary"
        disabled
      />
    </div>
  );
}

export default App;
