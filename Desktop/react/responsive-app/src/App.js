import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Boxes from './components/Boxes';
import Footer from './components/Footer'
import Form from './components/Form';
import GoogleSignIn from './components/GoogleSignIn';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="App"> 
    <Header />    
    <Main />     
    <hr></hr>    
    <Boxes />  
    <hr></hr>   
    <Form />       
    <GoogleSignIn />
    <hr></hr>
    <ProductForm />
    <Footer />     
 </div>
  );
}

export default App;
