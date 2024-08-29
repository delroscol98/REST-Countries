import Countries from "./components/Countries/Countries";
import CountriesHeader from "./components/CountriesHeader/CountriesHeader";
import CountriesList from "./components/CountriesList/CountriesList";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Countries>
        <CountriesHeader />
        <CountriesList />
      </Countries>
    </>
  );
}

export default App;
