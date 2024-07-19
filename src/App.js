import offer from "./img/offer.png"
import bat from "./img/bat.png"
import './App.css';
import warner from "./img/02.png"

function App() {
  return (
    <div className="body">
      {/* <div className="bat-img">
    <div className="bat-cont">
    <img  src={img} alt='bat' />
    <div className="bat-child">
    <img  src={img1} alt='bat' />
    </div>
    </div>
    </div> */}
    <img className="bat-img" src={bat} alt="bat"/>
    <div className="warner-img">
    <img src={warner}  alt="batimage"/>
    </div>
    <div className="offer-img">
    <img src={offer}  alt="offer-img"/>
    </div>
    <div className="quote">
      <p className="p1">NEW SERIES OF</p>
      <p className="p2">ENGLISH WILLOW <br/> CRICKET BATS </p>
      <p className="p3">NOW IN STOCK! <br/> STARTUNG FROM</p>
      <p className="p4">RS.<span>3900</span>/-</p>
      <p className="p5">Buy now & let the cricket begin</p>
      <div className="buy-btn">
      <button>BUY NOW!</button>
    </div>
    </div>
        <div>
          <ul>
            <li>Free Shipping</li>
            <li>Cash On Delivery</li>
          </ul>
          <ul style={{left:"45em"}}>
            <li>Round Handle</li>
            <li>Concave Edge</li>
          </ul>
        </div>
    </div>
  );
}

export default App;
