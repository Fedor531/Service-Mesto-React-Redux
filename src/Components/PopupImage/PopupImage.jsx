import React from 'react';
import style from './PopupImage.module.css';
import closeIcon from '../../images/close.svg';
const PopupImage = (props) => {

  return (
    <div class={style.popup}>
      <div class={style.content}>
        <img class={style.picture} src={props.link} alt="Картинка"/>
          <img onClick={() => props.closePopupImage()} src={closeIcon} alt="Закрыть" class={style.popupClose}/>
      </div>
    </div>
  )

}


export default PopupImage;
