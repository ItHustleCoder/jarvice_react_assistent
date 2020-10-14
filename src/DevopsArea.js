import React, { useState } from 'react';
import './DevopsArea.css';
import logo from './logo512.png';


    const DevopsArea = () => {
        
        const [values, setValues] = useState('');
        const [query, setQuery] = useState('');
        const [isdisplay, setDisplay] = useState('');
        
        
        const keyPass = '3141592';
        
        const getInput = (e) => {
            
            setValues(e.target.value);
            console.log(e.target.value);
        }

        const displayOff = () => {
            if(query === keyPass) {
                setDisplay(true);
            } else {
                setDisplay('');
            }
        };

        const getSubmit = (e) => {
            e.preventDefault();
            console.log('submited once');
            setQuery(values);
            displayOff();
            setValues('');
          
        }

        // console.log(query);
        console.log(isdisplay);
        
        return(
           
                 <div className={isdisplay ? "display-off" : "dev-aria"}> {/* `` display-off */}
                            <div className="img-box">
                            <img className="logo" src={logo} alt="logo"/>
                            </div>
                            <div className="title-head">
                                     <h3>Developer Mode</h3>
                                 </div>
                                 <form onSubmit={getSubmit}>
                                     <input className="pass-aria"
                                            type="password"
                                            placeholder="Inserisci password"
                                            value={values}
                                            onChange={getInput}
                                    />
                                     <div>
                                        <button type="submit"
                                                className="btn-pass"

                                        >Enter
                                        </button>
                                     </div>
                                 </form>
                             </div> 
            
           
                     )
        }
        
    

    export default DevopsArea;

// export default class DevopsArea extends React.Component {
//     constructor(props){
//         super();
//         this.state = {
//             access: false,
//             showMenu: false 
//         }
    
    
//     }

//     onButton(e) {
//         e.preventDefault();
//     }
    

//     render() {
//         return (
//             <div className="dev-aria">
//                     <div className="title-head">
//                         <h3>Enter the password</h3>
//                     </div>
//                     <form>
//                         <input className="pass-aria" type="password" placeholder="Inserisci password"/>
//                         <div>
//                         <button type="submit" className="btn-pass" onClick={this.onButton}>Enter</button>
//                         </div>
//                     </form>
//                 </div>
//         )
//     }





//}

