import Header from "../../components/Header/Header";
import Countries from "../../components/Countries/Countries";
import CountriesHeader from "../../components/CountriesHeader/CountriesHeader";
import CountriesList from "../../components/CountriesList/CountriesList";
import Pagination from "../../components/Pagination/Pagination";

function Homepage() {
  return (
    <main>
      <Header />
      <Countries>
        <CountriesHeader />
        <CountriesList />
        <Pagination />
      </Countries>
    </main>
  );
}

export default Homepage;
