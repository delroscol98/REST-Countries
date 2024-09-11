import Header from "../../components/Header/Header";
import Countries from "../../components/Countries/Countries";
import CountriesHeader from "../../components/CountriesHeader/CountriesHeader";
import CountriesList from "../../components/CountriesList/CountriesList";
import Pagination from "../../components/Pagination/Pagination";
import useCountries from "../../hooks/useCountries";
import NoCountries from "../../components/NoCountries/NoCountries";

function Homepage() {
  const { countriesList, countriesPerPage } = useCountries();
  const pageNums = Math.ceil(countriesList.length / countriesPerPage);
  return (
    <Countries>
      <CountriesHeader />
      {countriesList.length === 0 ? (
        <NoCountries />
      ) : (
        <>
          <CountriesList />
          {pageNums > 1 && <Pagination />}
        </>
      )}
    </Countries>
  );
}

export default Homepage;
