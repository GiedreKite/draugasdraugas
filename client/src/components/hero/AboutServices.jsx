import { useState } from "react";
import style from './aboutServices.module.css';
import plus from './img/plus.png';
import x from './img/x.png';



export function AboutServices() {
   
    const [show0, setShow0] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
   


    function hide0() {
        if(show0===false) {
            setShow0(true)
        }
        if(show0===true) {
            setShow0(false)
        }}
        function hide1() {
        if(show1===false) {
            setShow1(true)
        }
        if(show1===true) {
            setShow1(false)
        }}
        function hide2() {
        if(show2===false) {
            setShow2(true)
        }
        if(show2===true) {
            setShow2(false)
        }}
        function hide3() {
        if(show3===false) {
            setShow3(true)
        }
        if(show3===true) {
            setShow3(false)
        }}
        
     
        
        const [show00, setShow00] = useState(false);
        function hide00() {
            if(show00===false) {
                setShow00(true)
            }
            if(show00===true) {
                setShow00(false)
            }}


    
    return ( <>
    <div className="container marketing"/>

        
        <hr className="featurette-divider"/>
        
        <div className={style.questionContainerone}>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1"> „Draugas Draugui Draugas“ - <strong>Asmeninis Laikas ir Palaikymas.</strong><span className={style.text}></span></h2>
            <div  className="col-md-7">
                    <button onClick={() => hide0()} className={style.question}>„Draugas Draugui“ –<strong></strong> tai asmeninė paslauga, skirta tiems, kurie ieško kokybiško laiko. Kaip Jūsų asmeninė draugė, aš siūlau Jums unikalią patirtį, apimančią pramogas, bendravimą ir emocinį palaikymą. 
                        <img style={show0===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                        <img style={show0===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                    </button>
                    <p style={show0===true ?  {display: "flex"}: {display: "none"} }className={style.answer}>Tai pagalba, kurios reikia, kai mūsų planai nesusiklosto ir kai aplinkiniai paveda, priversdami vienus keliauti į renginius, koncertus, kino teatrus it t.t., nors taip norėtųsi draugijos... Tai palaikymas, kai siekiame gyventi pilnavertiškai, turėti galimybę dalintis savo patirtimi ir įspūdžiais su kitais, bei išbandyti naujas veiklas. Kai norime vėl švytėti, bet galbūt nedrąsu vieniems atrasti naujų įspūdžių, šis palaikymas yra ypač svarbus. Tai ir draugijos bei palaikymo ieškojimas, kai norime jaustis suprasti ir palaikomi net ir sunkiais momentais.</p>
                </div>
          </div>
       
        </div>
        
        <hr className="featurette-divider"/>
        
        <div className={style.questionContainertwo}>
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1"> Paslaugos privalumai: <strong>Bendrai leidžiamas laikas, Pramogos ir Veiklos, Emocinis palaikymas.</strong><span className={style.text}> </span></h2>
            <div  className="col-md-7">
                    <button onClick={() => hide1()} className={style.question}>Ši paslauga skirta tiems, kurie nori praleisti laiką su asmeniu, kuris rūpinasi jų gerove, veiklomis ir teikia emocinį palaikymą. Jei ieškote draugo, su kuriuo galėtumėte pasidalinti laisvalaikiu, užsiimti naujomis pramogomis ar tiesiog gauti palaikymą sunkiais momentais, „Draugas Draugui Draugas“ yra Jums.
                        <img style={show1===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                        <img style={show1===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                    </button>
                    <p style={show1===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Kai lyja, sninga, pučia ar saulė šviečia – Jūsų laikas ir emocinė gerovė yra svarbiausi. Aš siūlau unikalią paslaugą, kuri apima ne tik bendrą laiką kartu, bet ir pramogas bei emocinį palaikymą, atsižvelgiant į Jūsų poreikius ir nuotaiką. Kartu galime mėgautis įvairiomis veiklomis – nuo ramiai leidžiamo laiko gamtoje su kavos puodeliu iki įdomių kūrybinių dirbtuvių ar kultūrinių renginių, kurie praturtins Jūsų kasdienybę ir suteiks džiaugsmo. Taip pat aš visada čia, kad išklausyčiau, suteikčiau palaikymą ir patarimus, kad ir kokie būtų iššūkiai ar džiaugsmo akimirkos. Kiekvieną kartą, kai praleidžiame laiką kartu, aš siekiu ne tik sukurti malonias akimirkas, bet ir būti šalia, kai Jums reikia emocinio palaikymo ir tikro draugiškumo.</p>
                </div>
          </div>
     
        </div>
        
        <hr className="featurette-divider"/>
        
        <div className={style.questionContainerthree}>
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">Ir kodėl verta pasirinkti: <strong>"Draugas Draugui Draugas?</strong><span className={style.text}></span></h2>
            <div  className="col-md-7">
                    <button onClick={() => hide2()} className={style.question}> Nes „Draugas Draugui Draugas“ siūlo daugiau nei tiesiog paslaugą – tai asmeninis ryšys, kuris praturtina Jūsų gyvenimą. Kiekviena akimirka, kurią praleidžiame kartu, yra pritaikyta Jūsų poreikiams ir pageidavimams, kad galėtumėte jaustis ypatingi.


                        <img style={show2===true ? (false ? {display: "flex"}: {display: "none"} ) : {}} className={style.questionImg} src={plus} alt="plus" />
                        <img style={show2===false ? (true ? {display: "none"}: {display: "flex"} ) : {}} className={style.questionImg} src={x} alt="x" />
                    </button>
                    <p style={show2===true ?  {display: "flex"}: {display: "none"} } className={style.answer}>Ši paslauga pasižymi lankstumu ir individualiu požiūriu: galėsite pasirinkti veiklas ir bendro laiko planus, kurie geriausiai atitinka Jūsų nuotaiką ir interesus. Pirmasis susitikimas yra nemokamas, kad galėtumėte išbandyti, kaip mūsų paslauga atitinka Jūsų lūkesčius ir poreikius. Pasirinkę „Draugas Draugui Draugas“, Jūs ne tik gausite galimybę mėgautis pramogomis ir veiklomis, bet ir rasite tikrą draugą, kuris bus šalia tiek džiaugsmo, tiek iššūkių akimirkomis. Aš esu čia, kad suteikčiau Jums nuoširdų palaikymą, skatinti Jūsų gerovę ir padėsiu kurti prasmingus, laimingus gyvenimo momentus.</p>
                </div>
          </div>
         
        </div>
        
        <hr className="featurette-divider"/>
        
        
    

 


    
    </>)
    }