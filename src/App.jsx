import Countries from "./components/Countries/Countries";
import CountriesHeader from "./components/CountriesHeader/CountriesHeader";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Countries>
        <CountriesHeader />
      </Countries>
    </>
  );
}

export default App;
