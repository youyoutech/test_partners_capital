import React from 'react';
import logo from './logo.svg';
import './App.css';
import SurveyForm from './component/SurveyForm';
import SurveyResults from './component/SurveyResults';
import { connect } from 'react-redux';
import { SurveyAppState } from './types';
import { Dispatch } from 'redux';

interface AppProps {
    showResults: boolean
    doShowResults: () => void
    doShowSurvey: () => void
}

export const App = (props:AppProps) => {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Transport Survey</h1>
            </header>
            {props.showResults || <div>
                <SurveyForm />
                <button onClick={props.doShowResults}>Show Results</button>
            </div>}
            {
            props.showResults &&
                <div>
                    <button onClick={props.doShowSurvey}>Back To Survey Form</button>
                    <SurveyResults/>
                </div>
            }
          </div>
        );
      }
    

function mapStateToProps(state:SurveyAppState) {
    return {
        showResults: state.showResults
    }
}

function mapDispatchToProps(dispatch:Dispatch) {
    return {
        doShowResults: () => {
            dispatch({type: 'SHOW_RESULTS'})
        },
        doShowSurvey: () => {
            dispatch({type: 'SHOW_SURVEY'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
