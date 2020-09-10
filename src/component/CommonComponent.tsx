import { SurveyAppState, MODE_OF_TRANSPORT, SurveyTotalsByMode } from "../types"
import React from 'react'
import { connect } from "react-redux"

interface CommonComponentProps {
    journeysByMode: Record<MODE_OF_TRANSPORT, number>
    totalsByMode: SurveyTotalsByMode
    componentName: string
    getValuesFunction: (totalsByMode: SurveyTotalsByMode, journeysByMode: Record<MODE_OF_TRANSPORT, number>) => Record<MODE_OF_TRANSPORT, number>
}

export const CommonComponent: React.FunctionComponent<CommonComponentProps> = (props: CommonComponentProps) => {
    return (<div className="stats-panel">
        <div className="panel-title">{props.componentName}</div>
        {(Object.values(MODE_OF_TRANSPORT) as string[]).map((mode: string) => {
            return (<div key={mode} className='stats-row'>
                <span className='transport-mode'>{mode}: </span>
                <span className="stats-value">{props.getValuesFunction(props.totalsByMode, props.journeysByMode)[mode as MODE_OF_TRANSPORT]}</span>
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

export default connect(mapStateToProps)(CommonComponent);
