import Countries from "./components/Countries/Countries";
import CountriesHeader from "./components/CountriesHeader/CountriesHeader";
import CountriesList from "./components/CountriesList/CountriesList";
import Header from "./components/Header/Header";
import Pagination from "./components/Pagination/Pagination";

function App() {
  return (
    <>
      <Header />
      <Countries>
        <CountriesHeader />
        <CountriesList />
        <Pagination />
      </Countries>
    </>
  );
}

export default App;
