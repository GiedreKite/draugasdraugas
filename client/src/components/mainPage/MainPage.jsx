import draugas from './img/draugas.png';
import style from './MainPage.module.css'




    export default function MainPage() {
        
        return <>
        <main>
        
        <div  className={style.textConteiner}>
        <h1>Draugas Draugui Draugas</h1>
        <p className={style.text}> Ši idėja gimė iš mano patirties, kai netikėtai atsidūriau situacijoje, kai nebuvo su kuo pasidalinti džiaugsmu.<br/>
        Atrodo, kad visi, su kuriais galėčiau eiti į koncertus ar linksmai praleisti laiką, buvo užimti savais reikalais. <br/> 
        Dauguma mano draugų, turėdami šeimas ir vaikus, natūraliai skyrė dėmesį savo artimiesiems. <br/> <br/>

        Ilgą laiką stebėjau, kaip kiti žmonės mėgaujasi gyvenimu, kaip juokiasi, šoka ir bendrauja tarpusavyje.<br/>
        Tuo tarpu aš sėdėjau šiek tiek atskirta, svarstydama, ar verta išeiti vienai. <br/>
        Galų gale, susikaupiau ir nusprendžiau išeiti ir patirti tuos jausmus pati. <br/>
        Išsiveržiau iš savo komforto zonos ir pasinėriau į naujas patirtis. <br/> <br/>

        Užsiimti veiklomis, savarankiškai, nebuvo sudėtinga – žinojau, kaip derinti save su aplinka, tačiau giliai viduje suvokiau,<br/>
        kad esant vienai net ir gražiausios akimirkos praranda savo žavesį, jis kitoks... <br/>
        Kiekviena veikla, koncertas ar renginys suteikia unikalią galimybę kurti ryšius, dalintis džiaugsmu ir kurti bendrus prisiminimus.<br/>
        Supratau, kad nors galiu džiaugtis ir viena, daug smagiau ir prasmingiau yra turėti kompaniją šalia.<br/>
        Taigi, mano tikslas yra sukurti erdvę bei galimybes naujiems potyriams, nuotykiams ir ypatingoms akimirkoms,<br/>
        žmonėms, kurie, kaip ir aš, trokšta bendravimo ir gyvenimo nuotykių.

</p>
        </div>        
       
<div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <svg className="bd-placeholder-img" width="100%" height="100%" url="http://localhost:5175/public/0.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p className="opacity-75">Some representative placeholder content for the first slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <svg className="bd-placeholder-img" width="100%" height="100%" url="http://localhost:5175/public/1.png" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
        <div className="container">
          <div className="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
        </main>
        
        </>
    
    }
   
   
  
    
    
