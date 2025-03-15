import BowlerList from './BowlerList';
import './App.css';

function Header() {
  // ✅ Renamed to uppercase
  return (
    <>
      <h1>List of bowlers on the Sharks and Marlins:</h1>
    </>
  );
}

function App() {
  return (
    <>
      <Header /> {/* ✅ Corrected to use the React component */}
      <BowlerList />
    </>
  );
}

export default App;
