import React from 'react';
import {CostPerKm} from './CostPerKm';
import {shallow} from 'enzyme';
import { mockSurveyResults } from '../mockData';
import { sumByMode } from '../helpers/dataAnalysis';

describe('CostPerKm component', () => {
    it('shows survey results for each mode of transport', () => {
        const app = shallow(<CostPerKm totalsByMode={sumByMode(mockSurveyResults)} />);
        expect(app.find('.stats-row').length).toBe(6)
        expect(app.find('.stats-row').at(0).find('.transport-mode').text()).toBe('Bike')
        expect(app.find('.stats-row').at(0).find('.stats-value').text()).toBe('£0')
        //ok enough to get the idea
    })

})


