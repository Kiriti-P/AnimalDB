import React from "react";
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { ANIMAL_API_URL, animalApiOptions } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = (inputValue) => {
    return fetch(`${ANIMAL_API_URL}=${inputValue}`, animalApiOptions)
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.map((animal) => {
            return {
              location: `${animal.locations}`,
              prey: `${animal.characteristics.prey}`,
              predators: `${animal.characteristics.predators}`,
              biggest_threat: `${animal.characteristics.biggest_threat}`,
              diet: `${animal.characteristics.diet}`,
              type: `${animal.characteristics.type}`,
              lifespan: `${animal.characteristics.lifespan}`,
              label: `${animal.name}`,
            };
          }),
        };
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for animal"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
