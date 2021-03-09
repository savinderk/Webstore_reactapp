import ProductList from './components/ProductsList/ProductList';
import ProductListData from "./productData.json";

function App() {
  return (
    <div className="App">
      <ProductList ProductListData={ProductListData}/>
    </div>
  );
}

export default App;
