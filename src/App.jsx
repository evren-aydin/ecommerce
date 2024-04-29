
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ShopPage from './pages/ShopPage';
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
      </Router>
      
     </div>
    
  )
}

export default App
