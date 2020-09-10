import React from 'react';
import {AverageSpeed} from './AverageSpeed';
import {shallow} from 'enzyme';
import { mockSurveyResults } from '../mockData';
import { getTotalJourneysByMode, sumByMode } from '../helpers/dataAnalysis';

describe('AverageSpeed component', () => {
    it('shows survey results for each mode of transport', () => {
        const app = shallow(<AverageSpeed journeysByMode={getTotalJourneysByMode(mockSurveyResults)} totalsByMode={sumByMode(mockSurveyResults)}/>);
        expect(app.find('.stats-row').length).toBe(6)
        expect(app.find('.stats-row').at(0).find('.transport-mode').text()).toBe('Bike: ')
        expect(app.find('.stats-row').at(0).find('.stats-value').text()).toBe('13.734939759036145')
        expect(app.find('.stats-row').at(1).find('.transport-mode').text()).toBe('Car: ')
        expect(app.find('.stats-row').at(1).find('.stats-value').text()).toBe('21.428571428571427')
        expect(app.find('.stats-row').at(2).find('.transport-mode').text()).toBe('Walk: ')
        expect(app.find('.stats-row').at(2).find('.stats-value').text()).toBe('6')
        expect(app.find('.stats-row').at(3).find('.transport-mode').text()).toBe('Train: ')
        expect(app.find('.stats-row').at(3).find('.stats-value').text()).toBe('33.599999999999994')
        expect(app.find('.stats-row').at(4).find('.transport-mode').text()).toBe('Underground: ')
        expect(app.find('.stats-row').at(4).find('.stats-value').text()).toBe('11.586206896551724')
        expect(app.find('.stats-row').at(5).find('.transport-mode').text()).toBe('Bus: ')
        expect(app.find('.stats-row').at(5).find('.stats-value').text()).toBe('4.354838709677419')
    })

})


