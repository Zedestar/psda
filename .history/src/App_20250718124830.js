import Header from "./components/header/header";

function App() {
  return (
    <div className="flex flex-col flex-center h-screen bg-teal-100">
      <Header />
      <main className="bg-black ">This will be the main</main>
    </div>
  );
}

export default App;
