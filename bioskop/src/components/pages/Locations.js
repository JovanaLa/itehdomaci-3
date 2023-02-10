import React from 'react'
import { useInterval } from '@react-hooks-library/core'
import {useState} from 'react'
import { useCallback } from "react";
import CardsLocation from "../CardsLocation";

function Locations() {
    const locations1=[
        {
            name: 'Cineplexx Delta city',
            text: 'Novi Beograd, Jurija Gagarina 16',
            src: 'https://www.cineplexx.rs/GenticsImageStore/952/353/force//media/rs/center/big_11.jpg'
        },
        {
            name: 'Cineplexx Ušće shopping center',
            text: 'Novi Beograd, Bulevar Mihajla Pupina ',
            src: 'https://www.cineplexx.rs/GenticsImageStore/952/353/force//media/rs/center/Usce_gr1.jpg'
        },
        {
            name: 'Cineplexx Galerija',
            text: 'Beograd, Bulevar Vudroa Vilsona 12',
            src: 'https://www.cineplexx.rs/GenticsImageStore/952/353/force//media/rs/center/imax_gr3.jpg'
        },

    ];

    const locations2=[
        {
            name: 'Cineplexx Promenada',
            text: 'Novi Sad,Bulevar Oslobođenja 119' ,
            src: 'https://www.cineplexx.rs/GenticsImageStore/952/353/force//media/rs/center/Photo-0033_3.JPG'
        },
        {
            name: 'Cineplexx Niš',
            text: 'Niš,Bulevar Medijana 21',
            src: 'https://www.cineplexx.rs/GenticsImageStore/952/353/force//media/rs/center/Velika_9382.jpg'
        },
        {
            name: 'Cineplexx BIG Kragujevac',
            text: 'Kragujevac, Bulevar kraljice Marije 56',
            src: 'https://www.cineplexx.rs/GenticsImageStore/952/353/force//media/rs/center/cineplexx_kragujevac_plaza_952x363_8.jpg'
        },

    ];

        const [count, setCount] = useState(0)
      
        const increment = useCallback(() => setCount((c) => c + 1), [])
      
        useInterval(increment, 1000)
      
        
      
    return (
        <div>
        <CardsLocation data1={locations1} data2 = {locations2} title='LOKACIJE' type='locations' /> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.7748820732777!2d20.402006951289486!3d44.80577627899619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6f8551e932ad%3A0x7247a33f2a131ad2!2sCineplexx%204D%20Delta%20City!5e0!3m2!1ssr!2srs!4v1676045216569!5m2!1ssr!2srs"
        width="420" 
        height="300"
        style= {{ border: "0", margin:30}} 
        allowfullscreen="" 
        loading="lazy" 
        ></iframe>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.3027236938897!2d20.433757596172807!3d44.81539711245546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a655a4540fae7%3A0xf42dd2e559e04f2e!2sCineplexx%20U%C5%A0%C4%86E%20Shopping%20Center!5e0!3m2!1ssr!2srs!4v1676045613571!5m2!1ssr!2srs" 
     width="420" 
     height="300"
     style= {{ border: "0", margin:30}} 
     allowfullscreen="" 
     loading="lazy" >
     </iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.9235383869914!2d20.443379851289386!3d44.80274687899613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7b3644dcb6ff%3A0x8f2c75f6ef890a41!2sCineplexx%20Galerija!5e0!3m2!1ssr!2srs!4v1676045833929!5m2!1ssr!2srs"
         width="420" 
         height="300"
         style= {{ border: "0", margin:30}} 
         allowfullscreen="" 
         loading="lazy" >
         </iframe>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.1535823118043!2d19.83736169628334!3d45.24468701245683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b11d2e7f299d7%3A0xda97d994a194f85e!2sCineplexx%20Promenada!5e0!3m2!1ssr!2srs!4v1676046041820!5m2!1ssr!2srs"
          width="420" 
          height="300"
          style= {{ border: "0", margin:30}} 
          allowfullscreen="" 
          loading="lazy" 
         ></iframe>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.1405949781893!2d21.935232151245074!3d43.311316179032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b089fdd8ffe9%3A0xf800ff583aba051f!2sCineplexx%20Ni%C5%A1!5e0!3m2!1ssr!2srs!4v1676046186813!5m2!1ssr!2srs" 
       width="420" 
       height="300"
       style= {{ border: "0", margin:30}} 
       allowfullscreen="" 
       loading="lazy" 
        >
        </iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.645017471089!2d20.89348525126558!3d44.00806377900813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47572116b5c799b1%3A0xc2ffd7acb3d11a95!2sCineplexx%20BIG%20Kragujevac!5e0!3m2!1ssr!2srs!4v1676046700722!5m2!1ssr!2srs"
             width="420" 
             height="300"
             style= {{ border: "0", margin:30}} 
             allowfullscreen="" 
             loading="lazy" 
        ></iframe>
        <p>Provedeno vreme na stranici - {count} sec </p>
    </div>

    ) 

}




    
export default Locations