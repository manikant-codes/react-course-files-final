import { Button, TextInput } from "flowbite-react";
import React from "react";
import { HiSearch } from "react-icons/hi";
import { getNewsAticles } from "../services/apiService";

function SearchBar({ query, setQuery, setArticles }) {
  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch() {
    getNewsAticles(query)
      .then((data) => {
        setArticles(data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="max-w-lg flex gap-2">
      <TextInput
        type="search"
        placeholder="Search"
        value={query}
        onChange={handleChange}
        required
      />
      <Button color="failure" onClick={handleSearch}>
        <HiSearch className="w-5 h-5" />
      </Button>
    </div>
  );
}

export default SearchBar;
