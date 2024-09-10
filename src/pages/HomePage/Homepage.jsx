import Header from "../../components/Header/Header";
import Countries from "../../components/Countries/Countries";
import CountriesHeader from "../../components/CountriesHeader/CountriesHeader";
import CountriesList from "../../components/CountriesList/CountriesList";
import Pagination from "../../components/Pagination/Pagination";
import useCountries from "../../hooks/useCountries";

function Homepage() {
  const { countriesList, countriesPerPage } = useCountries();
  const pageNums = Math.ceil(countriesList.length / countriesPerPage);
  return (
    <main>
      <Header />
      <Countries>
        <CountriesHeader />
        <CountriesList />
        {pageNums > 1 && <Pagination />}
      </Countries>
    </main>
  );
}

export default Homepage;
