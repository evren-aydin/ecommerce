
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShirt,faUserTie } from '@fortawesome/free-solid-svg-icons';
 /* <FontAwesomeIcon icon={faShirt} />
  <FontAwesomeIcon icon={faUserTie} /> */

import ProductCard from './components/ProductCard';
import Header from './layout/Header';
import Footer from './layout/Footer';
import  Slider  from './components/Slider';
import PageContent from './layout/PageContent';
import ProductCardMini from './components/ProductCardMini';
function App() {
 

  return (
    <div className="overflow-x-hidden">
      <Header/>
      <PageContent/>
      <ProductCard/>
      <Footer/>
      <Slider/>
     </div>
    
  )
}

export default App
