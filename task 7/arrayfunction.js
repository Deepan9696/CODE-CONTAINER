// Fetching the data
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Get all the countries from the Asia continent/region using the Filter function

    const asiaCountries = data.filter((country) =>
      country.region.includes("Asia")
    );
    console.log("Asia Countries: ", asiaCountries);



    // Get all the countries with a population of less than 2 lakhs using Filter function

    const lowPopulationCountries = data.filter(
      (country) => country.population < 200000
    );
    console.log("Low Population Countries: ", lowPopulationCountries);



    // Print the following details name, capital, flag using forEach function

    data.forEach((country) =>
      console.log(
        `Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags.svg}`
      )
    );



    // Print the total population of countries using reduce function

    const totalPopulation = data.reduce(
      (accumulator, country) => accumulator + country.population,
      0
    );
    console.log("Total Population: ", totalPopulation);



    // Print the country which uses US Dollars as currency.

    const usDollarCountries = data.filter((country) =>
      country.currencies.hasOwnProperty("USD")
    );
    
    console.log("US Dollar Countries: ", usDollarCountries);
  })
  .catch((error) => console.log(error));
