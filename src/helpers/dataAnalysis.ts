import { Survey, MODE_OF_TRANSPORT, SurveyTotalsByMode, SurveyTotals, CostPerKilometerByMode } from "../types";

export function getTotalJourneysByMode(completedSurveys: Survey[]): Record<MODE_OF_TRANSPORT, number> {
    return completedSurveys.reduce((totalJourneysByMode:Record<string, number>, survey:Survey) => {
        totalJourneysByMode[survey.modeOfTransport] = (totalJourneysByMode[survey.modeOfTransport] || 0) + 1
        return totalJourneysByMode
    }, {})
}

export function getAverageSpeedByMode(totalsByMode: SurveyTotalsByMode, journeysByMode: Record<MODE_OF_TRANSPORT, number>):  Record<MODE_OF_TRANSPORT, number> {

    let averageSpeedByMode: Record<MODE_OF_TRANSPORT, number> = {} as Record<MODE_OF_TRANSPORT, number>

    Object.values(MODE_OF_TRANSPORT).forEach((mode: string) => {
        averageSpeedByMode[mode as MODE_OF_TRANSPORT] = 
        totalsByMode[mode].distance / (totalsByMode[mode].time / 60)
    })
    
    return averageSpeedByMode
}

export function getAverageCostPerJourney(totalsByMode: SurveyTotalsByMode, totalJourneysByMode: Record<MODE_OF_TRANSPORT, number>): Record<MODE_OF_TRANSPORT, number> {

    let averageCostPerJourney: Record<MODE_OF_TRANSPORT, number> = {} as Record<MODE_OF_TRANSPORT, number>

    Object.values(MODE_OF_TRANSPORT).forEach((mode: string) => {
        averageCostPerJourney[mode as MODE_OF_TRANSPORT] = 
        totalsByMode[mode].cost / totalJourneysByMode[mode as MODE_OF_TRANSPORT]
    })

    return averageCostPerJourney
}

export function getAverageDistanceCovered(totalsByMode: SurveyTotalsByMode, totalJourneysByMode: Record<MODE_OF_TRANSPORT, number>): Record<MODE_OF_TRANSPORT, number> {

    let averageDistanceCovered: Record<MODE_OF_TRANSPORT, number> = {} as Record<MODE_OF_TRANSPORT, number>

    Object.values(MODE_OF_TRANSPORT).forEach((mode: string) => {
        averageDistanceCovered[mode as MODE_OF_TRANSPORT] = 
        totalsByMode[mode].distance / totalJourneysByMode[mode as MODE_OF_TRANSPORT]
    })

    return averageDistanceCovered
}

export function getAverageTimeTaken(totalsByMode: SurveyTotalsByMode, totalJourneysByMode: Record<MODE_OF_TRANSPORT, number>): Record<MODE_OF_TRANSPORT, number> {

    let averageTimeTaken: Record<MODE_OF_TRANSPORT, number> = {} as Record<MODE_OF_TRANSPORT, number>

    Object.values(MODE_OF_TRANSPORT).forEach((mode: string) => {
        averageTimeTaken[mode as MODE_OF_TRANSPORT] = 
        totalsByMode[mode].time / totalJourneysByMode[mode as MODE_OF_TRANSPORT]
    })

    return averageTimeTaken
}

export function getCostPerKilometerByMode(totalsByMode: SurveyTotalsByMode): CostPerKilometerByMode {


    let costPerKilometerByMode: CostPerKilometerByMode = {} as CostPerKilometerByMode

    Object.values(MODE_OF_TRANSPORT).forEach((mode: string) => {
        costPerKilometerByMode[mode as MODE_OF_TRANSPORT] =
            totalsByMode[mode].cost / totalsByMode[mode].distance
    })

    return costPerKilometerByMode
}

export function sumByMode(completedSurveys: Survey[]): SurveyTotalsByMode {

    let totalsByMode: SurveyTotalsByMode = {} as SurveyTotalsByMode

    Object.values(MODE_OF_TRANSPORT).forEach((mode: string) => {
        totalsByMode[mode] =
            { distance: 0, cost: 0, time: 0 } as SurveyTotals

    })

    return completedSurveys.reduce((totalByMode: SurveyTotalsByMode, survey: Survey) => {
        totalByMode[survey.modeOfTransport] = {
            cost: totalByMode[survey.modeOfTransport].cost + survey.cost,
            time: totalByMode[survey.modeOfTransport].time + survey.time,
            distance: totalByMode[survey.modeOfTransport].distance + survey.distance,
        }
        return totalByMode
    }, totalsByMode)
    
} 