import './App.scss';
import CardList from './component/card-list/CardList';
import Card from './component/card/Card';
function App() {
  return (
    <>
      <h1 className='mb-2'>Pokemon Card, Holo Effect</h1>
      
      <CardList className='mb-3'/>
      
      <section className="demo">
        <div className="card pika"></div>
        <span className="operator">+</span>
        <div className="card">
          <span>color-dodge</span>
        </div>
        <span className="operator">+</span>
        <div className="card">
          <span>color-dodge</span>
        </div>
      </section>
    </>
  );
}

export default App;
