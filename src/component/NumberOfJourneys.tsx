import { MODE_OF_TRANSPORT, SurveyAppState, Survey } from "../types"
import { connect } from "react-redux"
import React from 'react'

interface NumberOfJourneysProps {
    completedSurveys: Survey[]
    journeysByMode: Record<MODE_OF_TRANSPORT, number>
}

export const NumberOfJourneys: React.FunctionComponent<NumberOfJourneysProps> = (props: NumberOfJourneysProps) => {
    return (<div className="stats-panel">
        <div className="panel-title">Number of journeys</div>
        <div className='stats-row'>
            <span className='transport-mode'>Total: </span><span className="stats-value">{props.completedSurveys.length}</span>
        </div>
        {(Object.values(MODE_OF_TRANSPORT) as string[]).map((mode: string) => {
            return (<div key={mode} className='stats-row'><span className='transport-mode'>{mode}</span><span className="stats-value">{props.journeysByMode[mode as MODE_OF_TRANSPORT]}</span></div>)
        })}
    </div>)

}

function mapStateToProps(state: SurveyAppState) {
    return {
        completedSurveys: state.completedSurveys,
        journeysByMode: state.journeysByMode
    }
}

export default connect(mapStateToProps)(NumberOfJourneys);
