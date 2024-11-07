import {useState} from 'react'
import { Home } from './home';
import Register from './register';
import Consult from './consult'
import Contact from './contact';

function BarraNav(){
    const [view, setView] = useState(<Home />)
    function change_view(input_comp) {
        setView(input_comp)                
    }        
    return(    
        <div>
            <nav className="block-items">
                <ul>
                    <li className="item"> <button onClick={() => change_view(<Home />)} className="btn-barra"> Home </button> </li>
                    <li className="item"> <button onClick={() => change_view(<Register />)} className="btn-barra"> Register </button> </li>
                    <li className="item"> <button onClick={() => change_view(<Consult />)} className="btn-barra"> Consult </button> </li>
                    <li className="item"> <button onClick={() => change_view(<Contact />)} className="btn-barra"> Contact </button> </li>
                </ul>
            </nav> 
            {view}  
        </div>                   
    )
}

export default BarraNav