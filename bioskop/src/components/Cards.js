import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards({data1, data2, type}) {


  return (
    <div className='cards'>
      <h1>Repertoar</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {
             data1.map(item => (<CardItem obj={item} type={type} />))
           }
</ul>
{
            data2 != null ? 
            <ul className='cards__items'>
              {
                data2.map(item => (<CardItem obj={item} type={type} />))
              }
           </ul> : <></>
          }
        
        </div>
      </div>
    </div>
    
  );
        }

  function Cards2({data3, data4, type}) {


    return (
      <div className='cards'>
        <h1>Repertoar</h1>
        <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
            {
               data3.map(item => (<CardItem obj={item} type={type} />))
             }
  </ul>
  {
              data4!= null ? 
              <ul className='cards__items'>
                {
                  data4.map(item => (<CardItem obj={item} type={type} />))
                }
             </ul> : <></>
            }
          
          </div>
        </div>
      </div>
      
    );
}

export default Cards;

