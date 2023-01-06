import { useState, useEffect } from 'react';
import axios from 'axios';

const Test05 = () => {
  const [countries, setCountries] = useState([] as any[]);
  const [filter, setFilter] = useState('');
  const [showCountry, setShowCountry] = useState<any>({});

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleFilter = (event: any) => {
    setFilter(event.target.value);
  };

  const contriesToShow = filter
    ? countries.filter((country) => {
        return country.name.common.toUpperCase().includes(filter.toUpperCase());
      })
    : countries;

  const showLanguages = (languages: any) => {
    const arr = [];
    for (const key in languages) {
      arr.push(languages[key]);
    }
    return arr.map((item, index) => <li key={index}>{item}</li>);
  };

  const showContries = (contriesToShow: any[]) => {
    if (!filter) {
      return <></>;
    }

    if (contriesToShow.length > 10) {
      return <>Too many matches, specify another filter</>;
    }

    return (
      <>
        {contriesToShow.map((country, index) => (
          <>
            <h1 key={index}>{country.name.common}</h1>
            <button onClick={() => toggleShow(country.name.common)}>
              Show
            </button>
            {showCountry[country.name.common] && (
              <>
                <p>capital {country.capital}</p>
                <p>area {country.area}</p>
                <p className="fw-bold">Languages:</p>
                <ul>{showLanguages(country.languages)}</ul>
                <img src={country.flags.png} alt=""></img>
              </>
            )}
          </>
        ))}
      </>
    );
  };

  const toggleShow = (code: string) => {
    setShowCountry((preve: any) => {
      return {
        ...preve,
        [code]: showCountry[code] ? false : true,
      };
    });
  };

  return (
    <>
      <p>
        find countries
        <input onChange={handleFilter} />
      </p>
      {showContries(contriesToShow)}
    </>
  );
};

export default Test05;
