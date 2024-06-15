import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Fixed import statement
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';  
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import Display_CSV_Screen from './screens/Display_CSV_screen';
import FileUploadForm from './screens/FileUploadScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceorderScreen';
import OrderScreen from './screens/OrderScreen';

function App() {
  return (
    <Router> 
      <div className="App">
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path="/" element={<HomeScreen />} /> 
              <Route path="/login" element = {<LoginScreen/>} />
              <Route path="/register" element = {<RegisterScreen/>} />
              <Route path="/profile" element = {<ProfileScreen/>} />
              <Route path="/products/:id" element = {<ProductScreen/>}/>
              <Route path="/cart/:id?" element = {<CartScreen/>}/>
              <Route path="/shipping" element = {<ShippingScreen/>}/>
              <Route path="/placeorder" element = {<PlaceOrderScreen/>}/>
              <Route path="/order/:id" element = {<OrderScreen/>}/>
              <Route path="/payment" element = {<PaymentScreen/>}/>
              <Route path="/showmyfile" element = {<Display_CSV_Screen/>}/>
              <Route path="/fileUploadfe" element = {<FileUploadForm/>}/>
              
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
