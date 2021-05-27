import './App.css';
import Container from "./components/Container"
import Footer from "./components/Footer"
import Header from "./components/Header"


function App() {
  const about = "About"
  const store = "Store"
  const gmail = "Gmail"
  const images = "Images"
  return (
    <div className="App">
      <Header 
      about = {about}
      store = {store}
      gmail = {gmail}
      images = {images}
      />
      <Container/>
      <Footer/>

    </div>
  );
}

export default App;
