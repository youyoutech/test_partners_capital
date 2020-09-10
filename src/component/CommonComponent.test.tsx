import React from 'react';

import {shallow} from 'enzyme';
import { CommonComponent } from './CommonComponent';
import { mockSurveyResults } from '../mockData';
import { getTotalJourneysByMode, sumByMode, getAverageCostPerJourney } from '../helpers/dataAnalysis';


describe('Common component', () => {
    it('shows average cost per journey results for each mode of transport', () => {
        const app = shallow(<CommonComponent componentName="Average Cost per journey (£)" getValuesFunction={getAverageCostPerJourney} journeysByMode={getTotalJourneysByMode(mockSurveyResults)} totalsByMode={sumByMode(mockSurveyResults)}/>);
        expect(app.find('.panel-title').text()).toBe("Average Cost per journey (£)")
        expect(app.find('.stats-row').length).toBe(6)
        expect(app.find('.stats-row').at(0).find('.transport-mode').text()).toBe('Bike: ')
        expect(app.find('.stats-row').at(0).find('.stats-value').text()).toBe('0')
    })

})