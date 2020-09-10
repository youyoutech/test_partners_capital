import { MODE_OF_TRANSPORT, SurveyAppState, SurveyTotalsByMode } from "../types"
import { getCostPerKilometerByMode } from "../helpers/dataAnalysis"
import { connect } from "react-redux"
import React from 'react'

interface CostPerKmProps {
    totalsByMode: SurveyTotalsByMode
}

export const CostPerKm:React.FunctionComponent<CostPerKmProps> = (props:CostPerKmProps) => {
return (<div className="stats-panel">
    <div className="panel-title">Cost per km</div>
    {(Object.values(MODE_OF_TRANSPORT) as string[]).map((mode:string) => {
        return (<div key={mode} className='stats-row'><span className='transport-mode'>{mode}</span><span className="stats-value">{getCostPerKilometerByMode(props.totalsByMode)[mode as MODE_OF_TRANSPORT].toLocaleString('en', {
            style: 'currency',
            currency: 'GBP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        })}</span></div>)
    } ) }
</div>)

}

function mapStateToProps(state:SurveyAppState) {
    return {
        totalsByMode: state.totalsByMode
    }
}

export default connect(mapStateToProps)(CostPerKm);
