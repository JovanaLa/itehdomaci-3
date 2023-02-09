import React from 'react';
import Cards from '../Cards';

function Program() {
    const repertoar=[
        
        {
            name: 'Avatar',
            text: 'akcija, avantura, naučna-fantastika',
            src: 'https://www.cineplexx.rs/media/rs/inc/movies_licences/avatar_223_1.jpg'
        },
        {
            name: 'Čovek po imenu Oto',
            text: 'drama, komedija',
            src: 'https://img.cineplexx.rs/media/rs/inc/movies_licences/otto_gr2.jpg'
        },
        {
            name: 'Oluja',
            text: 'drama, ratni',
            src: 'https://www.cineplexx.rs/media/rs/inc/movies_licences/Oluja_223x324.jpg' 
        },

    ];

    const repertoar2=[
        {
            name: 'Opasan let',
            text: 'akcija,triler',
            src: 'https://img.cineplexx.rs/media/rs/inc/movies_licences/plane_gr3_1.jpg'
        },
        {
            name: 'Vavilon',
            text: 'komedija',
            src: 'https://img.cineplexx.rs/media/rs/inc/movies_licences/babylon_gr2.jpg'
        },
        {
            name: 'Alkaras',
            text: 'Drama',
            src: 'https://www.cineplexx.rs/media/rs/inc/movies_licences/Alkaras_WEB_poster22.jpg'
        },

    ];

    return (
        <div>
<Cards data1={repertoar} data2 = {repertoar2} title='Repertoar' type='program'/>
        </div>
    )

    }
export default Program;