import style from './ServiceCard.module.css'

/* eslint-disable react/prop-types */
export function ServiceCard({ img, service, about, price, state}) {
    return (
        <div className={style.conteiner}>
            <div className={style.card} 
                style={{ backgroundImage: `url(${img})` }}>
                <div style={{ background: ` rgba(0, 0, 0, 0.5)` }}className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                    <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{service}</h3>
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
            <button>Pasirinkti</button>
        </div>
    );
}