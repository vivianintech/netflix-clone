import "./App.css";
import Row from "./Row/Row";
import requests from "./requests";
import Banner from "./Banner/Banner";
import Nav from "./Nav/Nav";

function App() {
  return (
    <div className='app'>
      {/** Nav */}
      <Nav />
      {/** Banner */}
      <Banner />
      {/** Row */}
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow />
      <Row title='NETFLIX ORIGINAL' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Top Rated' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
