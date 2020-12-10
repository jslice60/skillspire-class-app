import StockComponent1 from './StockComponents/StockComponent1'
import StockComponent2 from './StockComponents/StockComponent2'
import StockComponent3 from './StockComponents/StockComponent3'

function App() {
  return (
    <div className="inventoryContainer">
      <div className="allStockContainer">
        <div>
        <StockComponent1 name="Kashi"> </StockComponent1>
        </div>
        <div>
        <StockComponent1 name="Cheerios"> </StockComponent1>
        </div>
        <div>
        <StockComponent1 name="Fruit Loops"> </StockComponent1>
        </div>
        <div>
        <StockComponent1 name="Mini Wheats"> </StockComponent1>
        </div>
        <div className="inventoryContainer2">
          <div>
          <StockComponent2 name="Ancient Oats"> </StockComponent2>
          </div>
          <div>
          <StockComponent3 name="Frosty Flakes"> </StockComponent3>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
