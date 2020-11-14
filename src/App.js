import React, { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import requests from "./requests";
import Row from "./components/Row/Row";

function App() {
  return (
    <div className="App">
      <Nav />
      <Row title="Trending Now" request={requests.trending} />
      <Row title="Netflix Originals" request={requests.netflixOriginals}/>
      {/* <Row title="Top Rated Movies" request={requests.topRatedMovie}/>
      <Row title="Top Rated TV" request={requests.topRatedTv}/>
      <Row title="Action Films" request={requests.actionMovies}/>
      <Row title="Comedy Films" request={requests.comedyMovies}/>
      <Row title="Horrow Films" request={requests.horrorMovies}/>
      <Row title="Romance Films" request={requests.romanceMovies}/>
      <Row title="Documentaries" request={requests.documentaries}/> */}
    </div>
  );
}

export default App;