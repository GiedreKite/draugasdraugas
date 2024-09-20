import { useState } from 'react';
import style from './ServiceCard.module.css'
import shopping from './shopping.png'

/* eslint-disable react/prop-types */

export function ServiceCard({ img, name, about, price, state, GetChart}) {
   
        const [nameChart, setNameChart ] = useState('');
        const [priceChart, setPriceChart] = useState('');

      function GetChart(){
        setNameChart(name);
        setPriceChart(price);
      }
    
    return (
        <div  className="col">
            <div className={style.card} 
                style={{ backgroundImage: `url(${img})` }}>
                <div style={{ background: ` rgba(0, 0, 0, 0.5)` }}className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{name}   <br />
                    <button onClick={GetChart} className={style.shoppingcart}><img className={style.shopping} src={shopping} alt="shoppingCart" /></button>
                    </h3>
                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="d-flex align-items-center me-3">
                            <small>{about}</small>
                        </li>
                        <li className="d-flex align-items-center">
                            <small>Valandos kaina: {price} Eur</small>
                        </li>
                       
                    </ul>
                </div> 
            </div>
        </div>
    );
}