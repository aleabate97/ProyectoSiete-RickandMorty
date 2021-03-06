import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";

import Search from "./components/Search/Search";
import Card from "./components/Card/Card";




function App() {
  let [fetchedData, updateFetchedData] = useState([]);
  let { results } = fetchedData;
  let [pageNumber, updatePageNumber] = useState(1);
  let [search, setSearch] = useState("");
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);
  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNumber={updatePageNumber} />
      <div className="container">
      <div className="row">
        <div className="col-lg-8 col-12">
          <div className="row">
            <Card results={results} />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
