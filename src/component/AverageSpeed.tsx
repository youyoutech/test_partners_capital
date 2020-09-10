import { SurveyAppState, Survey, MODE_OF_TRANSPORT, SurveyTotalsByMode } from "../types"
import React from 'react'
import { connect } from "react-redux"
import { getAverageSpeedByMode } from "../helpers/dataAnalysis"

interface AverageSpeedProps {
    journeysByMode: Record<MODE_OF_TRANSPORT, number>
    totalsByMode: SurveyTotalsByMode
}

export const AverageSpeed: React.FunctionComponent<AverageSpeedProps> = (props: AverageSpeedProps) => {
    return (<div className="stats-panel">
        <div className="panel-title">Average Speed (km/h)</div>
        {(Object.values(MODE_OF_TRANSPORT) as string[]).map((mode: string) => {
            return (<div key={mode} className='stats-row'>
                <span className='transport-mode'>{mode}: </span>
                <span className="stats-value">{getAverageSpeedByMode(props.totalsByMode, props.journeysByMode)[mode as MODE_OF_TRANSPORT]}</span>
            </div>)
        })}
    </div>)
}

function mapStateToProps(state: SurveyAppState) {
    return {
        totalsByMode: state.totalsByMode,
        journeysByMode: state.journeysByMode
    }
}

export default connect(mapStateToProps)(AverageSpeed);
