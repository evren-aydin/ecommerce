
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
 

  return (
    <div className="overflow-x-hidden">
      
        <Router>

      <Route path="/" exact>
      <HomePage/>
      </Route>

      </Router>
      
     </div>
    
  )
}

export default App
