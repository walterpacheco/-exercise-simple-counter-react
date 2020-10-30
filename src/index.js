import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap';
import propTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import reportWebVitals from './reportWebVitals';
//import './component/icons';
function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="far fa-clock"></i>
      </div>
      <div className="five">{props.digitFive %10}</div>
      <div className="four">{props.digitFour %10}</div>
      <div className="three">{props.digitThree %10}</div>
      <div className="two">{props.digitTwo %10}</div>
      <div className="one">{props.digitOne %10}</div>
    </div>

  );
}
SimpleCounter.propTypes={
  digitOne: propTypes.number,
  digitTwo: propTypes.number,
  digitThree: propTypes.number,
  digitFour: propTypes.number,
  digitFive: propTypes.number
};

let counter=0;
setInterval(function(){
  const five = Math.floor(counter/10000);
  const four = Math.floor(counter/1000);
  const three = Math.floor(counter/100);
  const two = Math.floor(counter/10);
  const one = Math.floor(counter/1);
  console.log(four,three,two,one);
  counter++;
  ReactDOM.render(
    <React.StrictMode>
      <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} />
    </React.StrictMode>,
    document.getElementById('root')
  );
},1000);;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
