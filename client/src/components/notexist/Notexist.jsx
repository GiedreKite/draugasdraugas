import { Link } from 'react-router-dom'
import style from './Notexist.module.css'
import git from './git.png'
import linkedin from './linkedin.png'

export function Notexist() {

return(<div className="col-12">
<h1 className={style.four}>4 
    <img className={style.zero} src='http://localhost:5173/draugas.png' alt="" />
    4 <br /> <h6>Puslapis nerastas, prašome grįžti atgal:  <button className="btn btn-outline me-2">
                        <Link to="/" >Home</Link>
                    </button></h6>
                   </h1>

                   <h2>Giedrė Narvilaitė:</h2>
                   <h2>
                   <div>Git</div><img className={style.logo} src={git} alt="git" />
                   <div>Linkedin</div><img className={style.logo} src={linkedin} alt="linkedin" />
                   </h2>
                   




</div>
) };