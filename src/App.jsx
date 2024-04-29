
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
import ProductDetail from './components/ProductDetail';
function App() {
 

  return (
    <div className="overflow-x-hidden">
      <ProductDetail/>
        <Router>

      <Route path="/" exact>
      <HomePage/>
      </Route>
      <Route path="/shop" exact>
      <ShopPage/>
      </Route>
      </Router>
      
     </div>
    
  )
}

export default App
