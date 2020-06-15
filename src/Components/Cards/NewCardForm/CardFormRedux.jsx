import React from 'react';
import style from './CardFormRedux.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../Common/FormError/FormsError';
import { requiredField, maxLengthC, linkСhecking } from '../../../Utils/validators';
import closeIcon from '../../../images/close.svg';

class CardForm extends React.Component {

  state = {
    openCardFormPopup: false
  }

  openFormPopup = () => {
    this.setState({
      openCardFormPopup: true
    })
  }

  closeFormPopup = () => {
    this.setState({
      openCardFormPopup: false
    })
  }

  addNewCard = (value) => {
    this.props.addCardTC(value.cardName, value.cardLink)
    this.closeFormPopup()
  }


  render() {
    return (<div>
      <button className={style.openFormButton} onClick={this.openFormPopup}>Добавить место</button>
      {this.state.openCardFormPopup ?
        <div className={style.popup}>
          <div className={style.popupContainer}>
            <img src={closeIcon} className={style.popupClose} onClick={this.closeFormPopup} />
            <AddNewCardFormRedux onSubmit={this.addNewCard} />
          </div>
        </div> : null}
    </div>
    )
  }
}




const maxLength30 = maxLengthC(30)

const AddNewCardForm = (props) => {
  return (
    <form className={style.addCardForm} onSubmit={props.handleSubmit}>
      <p className={style.title}>Добавить новую карточку</p>
      <div className={style.inputContainer}>
        <Field className={style.input} component={Input} name={'cardName'} placeholder='Название' validate={[requiredField, maxLength30]} />
      </div>
      <div className={style.inputContainer}>
        <Field className={style.input} component={Input} name={'cardLink'} placeholder='Ссылка на картинку' validate={[requiredField, linkСhecking]} />
      </div>
      <button type="submit" className={style.submitButton} disabled={props.pristine || props.submitting}>Отправить</button>
    </form>
  )
}

const AddNewCardFormRedux = reduxForm({
  form: 'addNewCard'
})(AddNewCardForm)

export default CardForm
