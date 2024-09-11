import { useReducer } from "react";
import { createContext, useCallback, useEffect } from "react";

const CountriesContext = createContext();

const RESULTS_PER_PAGE = 8;

const initialState = {
  countries: [],
  countriesList: [],
  dropdownOpen: false,
  dropdownOption: "",
  searchedCountry: "",
  currentPage: 1,
  countriesPerPage: RESULTS_PER_PAGE,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchCountries":
      return {
        ...state,
        countries: action.payload,
        countriesList: action.payload,
      };
    case "toggleDropdown":
      return {
        ...state,
        dropdownOpen: !state.dropdownOpen,
      };
    case "filterCountries":
      return {
        ...state,
        currentPage: 1,
        dropdownOpen: false,
        dropdownOption: action.payload,
        countriesList: state.countries.filter(
          (country) => country.region === action.payload
        ),
      };
    case "searchCountries":
      return {
        ...state,
        searchedCountry: action.payload,
        countriesList: state.countries.filter((country) =>
          state.dropdownOption
            ? country.name
                .toLowerCase()
                .includes(action.payload.toLowerCase()) &&
              country.region === state.dropdownOption
            : country.name.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    case "prevPage":
      return {
        ...state,
        currentPage: state.currentPage > 1 ? state.currentPage - 1 : 1,
      };
    case "nextPage":
      return {
        ...state,
        currentPage:
          state.currentPage <
          Math.ceil(state.countriesList.length / state.countriesPerPage)
            ? state.currentPage + 1
            : Math.ceil(state.countriesList.length / state.countriesPerPage),
      };
  }
};

const CountriesProvider = ({ children }) => {
  const [
    {
      countriesList,
      dropdownOpen,
      dropdownOption,
      searchedCountry,
      currentPage,
      countriesPerPage,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const lastCountryIndex = currentPage * countriesPerPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const renderedCountries = countriesList.slice(
    firstCountryIndex,
    lastCountryIndex
  );

  const fetchCountries = useCallback(async () => {
    try {
      const res = await fetch("./data/data.json");
      const data = await res.json();
      dispatch({ type: "fetchCountries", payload: data });
    } catch (err) {
      console.log(err);
      throw new Error("Unable to fetch countries");
    }
  }, []);

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  const handleDropdownOpen = () => {
    dispatch({ type: "toggleDropdown" });
  };

  const handleFilterCountries = (region) => {
    dispatch({ type: "filterCountries", payload: region });
  };

  const handleSearchCountries = (e) => {
    dispatch({ type: "searchCountries", payload: e.target.value });
  };

  const handlePrevPage = () => {
    dispatch({ type: "prevPage" });
  };

  const handleNextPage = () => {
    dispatch({ type: "nextPage" });
  };

  return (
    <CountriesContext.Provider
      value={{
        countriesList,
        dropdownOpen,
        dropdownOption,
        searchedCountry,
        renderedCountries,
        currentPage,
        countriesPerPage,
        handleDropdownOpen,
        handleFilterCountries,
        handleSearchCountries,
        handlePrevPage,
        handleNextPage,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export { CountriesProvider, CountriesContext };
