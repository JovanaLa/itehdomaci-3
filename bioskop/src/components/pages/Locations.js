import React from 'react'
import CardsLocation from '../CardsLocation';


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
    return (
        <div>

            <CardsLocation data1={locations1} data2 = {locations2} title='LOKACIJE' type='locations' />
        </div>
    )

}
export default Locations