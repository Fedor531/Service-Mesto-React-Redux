import React from 'react';
import style from './ProfileAvatar.module.css';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../Common/FormError/FormsError';
import { requiredField, linkСhecking } from '../../../Utils/validators';
import closeIcon from '../../../images/close.svg';

class ProfileAvatar extends React.Component {

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

  addNewAvatar = (value) => {
    this.props.updateProfileAvatarTC(value.link)
    this.closeFormPopup()
  }


  render() {
    return (
      <div>
        <div className={style.photo} onClick={this.openFormPopup} style={{ backgroundImage: `url(${this.props.avatar})` }}></div>
        {this.state.openCardFormPopup ?
          <div className={style.popup}>
            <div className={style.popupContainer}>
              <img src={closeIcon} className={style.popupClose} onClick={this.closeFormPopup} />
              <AddNewAvatarFormRedux onSubmit={this.addNewAvatar} />
            </div>
          </div> : null}
      </div>
    )
  }
}






const AddNewAvatarForm = (props) => {
  return (
    <form className={style.addCardForm} onSubmit={props.handleSubmit}>
      <p className={style.title}>Обновить аватар</p>
      <div className={style.inputContainer}>
        <Field className={style.input} component={Input} name={'link'} placeholder='Ссылка на картинку' validate={[requiredField, linkСhecking]} />
      </div>
      <button type="submit" className={style.submitButton} disabled={props.pristine || props.submitting}>Отправить</button>
    </form>
  )
}

const AddNewAvatarFormRedux = reduxForm({
  form: 'addNewAvatar'
})(AddNewAvatarForm)

export default ProfileAvatar
