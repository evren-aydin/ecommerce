
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
function App() {
 

  return (
    <div className="overflow-x-hidden">
      
      <Router>

      <Route path="/" exact>
      <HomePage/>
      </Route>
      <Route path="/shop" exact>
      <ShopPage/>
      </Route>
      <Route path="/productDetail" exact>
      <ProductDetailPage/>
      </Route>
      <Route path="/contact" exact>
      <ContactPage/>
      </Route>


      </Router>
      
     </div>
    
  )
}

export default App
