import React from 'react';
import {App} from './App';
import {shallow} from 'enzyme';


describe('App component', () => {
    describe('when show results is false', () => {
          it('shows survey form', () => {
              const app = shallow(<App showResults={false} doShowResults={()=>{}} doShowSurvey={()=>{}}/>);
              expect(app.find('Connect(SurveyForm)').length).toBe(1)
          })
      
          it('doesn\'t show survey results', () => {
            const app = shallow(<App showResults={false} doShowResults={()=>{}} doShowSurvey={()=>{}}/>);
            expect(app.find('Connect(SurveyResults)').length).toBe(0)
          })
    })

    describe('when show results is true', () => {
      
          it('doesn\'t show survey form', () => {
            const app = shallow(<App showResults={true} doShowResults={()=>{}} doShowSurvey={()=>{}}/>);
            expect(app.find('Connect(SurveyForm)').length).toBe(0)
          })
      
          it('shows survey results', () => {
            const app = shallow(<App showResults={true} doShowResults={()=>{}} doShowSurvey={()=>{}}/>);
            expect(app.find('Connect(SurveyResults)').length).toBe(1)
          })
    })

})


