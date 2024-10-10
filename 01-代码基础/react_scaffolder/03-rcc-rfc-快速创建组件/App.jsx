import Footer from './components/Footer';
import HeaderClass from './components/HeaderClass'
import MainFun from './components/MainFun';
function App() {
    return (
        <div>
            <HeaderClass/>
            <MainFun />
            <Footer/>
        </div>
    );
}
export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
