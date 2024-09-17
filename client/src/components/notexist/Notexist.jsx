import { Link } from 'react-router-dom'
import style from './Notexist.module.css'

export function Notexist() {

return(<div className="col-12">
<h1 className={style.four}>4 
    <img className={style.zero} src='http://localhost:5173/draugas.png' alt="" />
    4</h1>
<h2>Puslapis nerastas, prašome grįžti atgal: 
                    <button className="btn btn-outline-primary me-2">
                        <Link to="/" >Home</Link>
                    </button>
</h2>
</div>
) };