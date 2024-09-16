import draugas from './img/draugas.png';
import style from './MainPage.module.css';


    export default function MainPage() {
        
        return <>
        <main>
            <div  className="col">
        
        <div  className={style.textConteiner}>
           
        <h1>Draugas Draugui Draugas</h1>
        <div className={style.aline}>
        <img className={style.logo} src={draugas} alt="Logo" />
        <p className={style.text}> Ši idėja gimė iš mano patirties, kai netikėtai atsidūriau situacijoje, kai nebuvo su kuo pasidalinti džiaugsmu.
        Atrodo, kad visi, su kuriais galėčiau eiti į koncertus ar linksmai praleisti laiką, buvo užimti savais reikalais.
        Dauguma mano draugų, turėdami šeimas ir vaikus, natūraliai skyrė dėmesį savo artimiesiems.</p> <br/> 

        </div>
       

        <div className={style.carding} >
            <div style={{ background: ` rgba(0, 0, 0, 0.5)` }}className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold"> „Draugas yra tas, kurias suteikia visišką laisvę būti savimi” </h3>
                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="d-flex align-items-center me-3">
                            <small>– Jim Morrison</small>
                        </li>                
                    </ul>
            </div> 
        </div>

        <p className={style.text}>Ilgą laiką stebėjau, kaip kiti žmonės mėgaujasi gyvenimu, kaip juokiasi, šoka ir bendrauja tarpusavyje.
        Tuo tarpu aš sėdėjau šiek tiek atskirta, svarstydama, ar verta išeiti vienai.
        Galų gale, susikaupiau ir nusprendžiau išeiti ir patirti tuos jausmus pati.
        Išsiveržiau iš savo komforto zonos ir pasinėriau į naujas patirtis. <br/> </p>
        <div className={style.card} >
            <div style={{ background: ` rgba(0, 0, 0, 0.5)` }}className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">„Kas nebuvo pradėta šiandien, tas niekada nebus baigta rytoj.”</h3>
                    <ul className="d-flex list-unstyled mt-auto">
                        <li className="d-flex align-items-center me-3">
                            <small>– Johann Wolfgang von Goethe</small>
                        </li>                
                    </ul>
            </div> 
        </div>

        <p className={style.text}>Užsiimti veiklomis, savarankiškai, nebuvo sudėtinga – žinojau, kaip derinti save su aplinka, tačiau giliai viduje suvokiau,
        kad esant vienai net ir gražiausios akimirkos praranda savo žavesį, jis kitoks...
        Kiekviena veikla, koncertas ar renginys suteikia unikalią galimybę kurti ryšius, dalintis džiaugsmu ir kurti bendrus prisiminimus.
        Supratau, kad nors galiu džiaugtis ir viena, daug smagiau ir prasmingiau yra turėti kompaniją šalia.
        Taigi, mano tikslas yra sukurti erdvę bei galimybes naujiems potyriams, nuotykiams ir ypatingoms akimirkoms,
        žmonėms, kurie, kaip ir aš, trokšta bendravimo ir gyvenimo nuotykių.

</p>
        </div>  
        </div>      

        </main>
        
        </>
    
    }
   
   
  
    
    
