export interface Survey {
    username: string
    modeOfTransport: string
    distance: number
    time: number
    cost: number
}

export interface SurveyAppState {
    completedSurveys: Survey[]
    totalsByMode: SurveyTotalsByMode
    journeysByMode: Record<MODE_OF_TRANSPORT, number>
    showResults: boolean
}

export enum MODE_OF_TRANSPORT {
    BIKE = 'Bike',
    CAR = 'Car',
    WALK = 'Walk',
    TRAIN = 'Train',
    UNDERGROUND = 'Underground',
    BUS = 'Bus'
}

export interface SurveyTotals {
    distance: number
    time: number
    cost: number
}


export type SurveyTotalsByMode = Record<string, SurveyTotals>

export type CostPerKilometerByMode = Record<string, number>

export interface AddSurveyAction {
    type: string
    payload: Survey
}