import React from 'react';
import { Button } from './Button';

function CardItem({obj, type}) {
  return (
    <>
      <li className='cards__item'>
        <div className='cards__item__link'>
        <figure className='cards__item__pic-wrap' data-category={type=='movies' ? '"' : obj.name}> 
          <img
              className='cards__item__img'
              src={obj.src}
            />
          </figure>
          <div className='cards__item__info'>
            <p className='cards__item__text'>{obj.text}</p>
            {type == '' ? <h5 className='cards__item__title'>{obj.name}</h5> : <></> }
            {type == 'movies' ? <></> : 
              <div>
                <ul>
                <li>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--medium' link='/locations'>
                    Poseti bioskop
                    </Button>
                </li>
                </ul>


              </div>

             }
          </div>
        </div>
      </li>
        
        
      
    </>
  );
}

export default CardItem;