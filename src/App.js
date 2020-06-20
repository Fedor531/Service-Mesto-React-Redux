import React from 'react';
import './App.css';
import CardsContainer from './Components/Cards/CardsContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import { connect } from 'react-redux';
import { initializationAppTC } from './Redux/appReducer';
import Preloader from './Components/Preloader/Preloader';
import Header from './Components/Header/Header';

class App extends React.Component {

  componentDidMount() {
    this.props.initializationAppTC()
  }

  render() {

    if (!this.props.initialized) {
      return (
        <div className='preloader'>
          <Preloader />
        </div>
      )
    }
    return (
      <div className="App">
        <Header />
        <ProfileContainer />
        <CardsContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializationAppTC })(App);
