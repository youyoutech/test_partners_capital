import React from 'react';
import {NumberOfJourneys} from './NumberOfJourneys';
import {shallow} from 'enzyme';
import { mockSurveyResults } from '../mockData';
import { getTotalJourneysByMode } from '../helpers/dataAnalysis';

describe('NumberOfJourneys component', () => {
    it('shows survey results for each mode of transport', () => {
        const app = shallow(<NumberOfJourneys completedSurveys={mockSurveyResults} journeysByMode={getTotalJourneysByMode(mockSurveyResults)}/>);
        expect(app.find('.stats-row').length).toBe(7)
        expect(app.find('.stats-row').at(1).find('.transport-mode').text()).toBe('Bike')
        expect(app.find('.stats-row').at(1).find('.stats-value').text()).toBe('2')
        //ok enough to get the idea
    })

})


