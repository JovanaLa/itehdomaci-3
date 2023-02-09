import React from 'react';
import './Cards.css';
import CardItemLocation from './CardItemLocation';


function Cards({data1, data2, type}) {


  return (
    <div className='cards'>
      <h1>Lokacija</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {
             data1.map(item => (<CardItemLocation obj={item} type={type} />))
           }
</ul>
{
            data2 != null ? 
            <ul className='cards__items'>
              {
                data2.map(item => (<CardItemLocation obj={item} type={type} />))
              }
           </ul> : <></>
          }
        
        </div>
      </div>
    </div>
    
  );
        

  
}

export default Cards;