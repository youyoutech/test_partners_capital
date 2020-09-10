import React from 'react';
import { Survey, SurveyAppState } from '../types';
import { connect } from 'react-redux';
import CostPerKm from './CostPerKm';
import './SurveyResults.css'
import NumberOfJourneys from './NumberOfJourneys';
import CommonComponent  from './CommonComponent';
import { getAverageSpeedByMode, getAverageCostPerJourney, getAverageDistanceCovered, getAverageTimeTaken } from '../helpers/dataAnalysis';

interface SurveyResultsProps {
    completedSurveys: Survey[]
}

class SurveyResults extends React.Component<SurveyResultsProps> {

  render() {
      return (<div>
            <div className="survey-stats">
                <CostPerKm/>
                <NumberOfJourneys/>
                <CommonComponent componentName="Average Cost per journey (£)" getValuesFunction={getAverageCostPerJourney}/>
                <CommonComponent componentName="Average Distance covered (km)" getValuesFunction={getAverageDistanceCovered}/>
                <CommonComponent componentName="Average Time Taken (min)" getValuesFunction={getAverageTimeTaken}/>
                <CommonComponent componentName="Average Speed (km/h)" getValuesFunction={getAverageSpeedByMode}/>
            </div>
          </div>)
  }
}

function mapStateToProps(state:SurveyAppState) {
    return {
        completedSurveys: state.completedSurveys
    }
}

export default connect(mapStateToProps)(SurveyResults)