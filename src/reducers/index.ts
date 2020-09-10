import { SurveyAppState, AddSurveyAction } from '../types'
import { mockSurveyResults } from '../mockData'
import {sumByMode, getTotalJourneysByMode} from '../helpers/dataAnalysis'

const initialState: SurveyAppState = {
    completedSurveys: mockSurveyResults,
    totalsByMode: sumByMode(mockSurveyResults),
    journeysByMode: getTotalJourneysByMode(mockSurveyResults),
    showResults: false
}

export default (state: SurveyAppState = initialState, action: AddSurveyAction): SurveyAppState => {
    switch (action.type) {
        case 'SHOW_RESULTS':
            return {
                ...state,
                showResults: true,
            }
        case 'SHOW_SURVEY':
            return {
                ...state,
                showResults: false,
            }
            case 'ADD_SURVEY':
                return {
                    completedSurveys: [...state.completedSurveys, action.payload],
                    totalsByMode: sumByMode([...state.completedSurveys, action.payload]),
                    journeysByMode: getTotalJourneysByMode([...state.completedSurveys, action.payload]),
                    showResults: false
                }
        default:
            return state
    }
}