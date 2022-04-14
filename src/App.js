
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'

function App() {

  const gearStyle = {
    position: "absolute",
    height: "24px",
    width: "24px",
    left: "13px",
    right: "13px",
    top: "13px",
    bottom: "13px",
    color:"#FFFFFF"
  };
  const gearStyle3 = {
    position: "absolute",
    height: "24px",
    width: "24px",
    left: "13px",
    right: "13px",
    top: "13px",
    bottom: "13px",
    color:"#FFFFFF",
    opacity:"0.4"
  };
  

  const  gearOuterStyle1= {
    position:"absolute",
    background: "linear-gradient(180deg, #95ABF7 0%, #6385F2 100%",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "25px",
    height: "50px",
    width: "50px",
    left: "27px",
    right: "23px",
    top: "23px",
    bottom:"216px"
    

  };
  const  gearOuterStyle2= {
    position:"absolute",
    borderRradius: "0px",
    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, #95ABF7 0%, #6385F2 100%)",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "25px",
    height: "50px",
    width: "50px",
    radius:"25px",
    left: "27px",
    right: "23px",
    top: "112px",
  
  };
  const  gearOuterStyle3= {
    position:"absolute",
    borderRradius: "0px",
    left: "27px",
    right: "23px",
    background: "linear-gradient(180deg, #95ABF7 0%, #6385F2 100%)",
    boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.3)",
    borderRadius: "25px",
    height: "50px",
    width: "50px",
    radius:"25px",
    top: "201px",
    bottom : "38px",
   
  };
  const  ControlMainButton= {
  position: "relative",
  width: "100px",
  height: "289px",
  border: "1px dashed #7B61FF",
  boxSizing: "border-box",
  borderRadius: "5px",
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Control Main Button</p>
        <div style={ControlMainButton}>
        <div style={gearOuterStyle1} className="hoverMainClass">
        <FontAwesomeIcon icon={faGear} style={gearStyle} className="hoverClass"/>
        </div>

        <div style={gearOuterStyle2} >
        <FontAwesomeIcon icon={faGear} style={gearStyle} className="hoverClass" />
        </div>
        
        <div style={gearOuterStyle3} >
        <FontAwesomeIcon icon={faGear} style={gearStyle3} className="hoverClass"/>
        </div> 
     
        </div>
      </header>
    </div>
  );
}

export default App;
