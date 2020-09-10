import { getTotalJourneysByMode, getCostPerKilometerByMode, getAverageSpeedByMode, sumByMode, getAverageDistanceCovered, getAverageCostPerJourney, getAverageTimeTaken } from "./dataAnalysis"
import { mockSurveyResults } from "../mockData"
import { MODE_OF_TRANSPORT } from "../types"


describe('getTotalJourneysByMode', () => {
    let totalJourneys: Record<MODE_OF_TRANSPORT, number>
    beforeEach(() => {
        totalJourneys = getTotalJourneysByMode(mockSurveyResults)
    })
    it('returns expected sum for Walk journeys', () => {
        expect(totalJourneys.Walk).toBe(1)
    })
    it('returns expected sum for Bike journeys', () => {
        expect(totalJourneys.Bike).toBe(2)
    })
    it('returns expected sum for Car journeys', () => {
        expect(totalJourneys.Car).toBe(2)
    })
    it('returns expected sum for Bus journeys', () => {
        expect(totalJourneys.Bus).toBe(2)
    })
    it('returns expected sum for Train journeys', () => {
        expect(totalJourneys.Train).toBe(3)
    })
    it('returns expected sum for Underground journeys', () => {
        expect(totalJourneys.Underground).toBe(3)
    })
})

describe('getCostPerKilometerByMode', () => {
    let costPerKilometerByMode: Record<MODE_OF_TRANSPORT, number>
    beforeEach(() => {
        costPerKilometerByMode = getCostPerKilometerByMode(sumByMode(mockSurveyResults))
    })
    it('returns expected cost/km for Walk journeys', () => {
        expect(costPerKilometerByMode.Walk).toBe(0)
    })
    it('returns expected cost/km for Bike journeys', () => {
        expect(costPerKilometerByMode.Bike).toBe(0)
    })
    it('returns expected cost/km for Car journeys', () => {
        expect(costPerKilometerByMode.Car).toBe(0.61)
    })
    it('returns expected cost/km for Bus journeys', () => {
        expect(costPerKilometerByMode.Bus).toBe(1.0555555555555556)
    })
    it('returns expected cost/km for Train journeys', () => {
        expect(costPerKilometerByMode.Train).toBe(0.6571428571428571)
    })
    it('returns expected cost/km for Underground journeys', () => {
        expect(costPerKilometerByMode.Underground).toBe(0.5535714285714286)
    })

})

describe('getAverageSpeedByMode', () => {
    let averageSpeedByMode: Record<MODE_OF_TRANSPORT, number>
    beforeEach(() => {
        averageSpeedByMode = getAverageSpeedByMode(sumByMode(mockSurveyResults), getTotalJourneysByMode(mockSurveyResults))
    })
    it('returns expected average speed in km/h for Walk journeys', () => {
        expect(averageSpeedByMode.Walk).toBe(6)
    })
    it('returns expected average speed in km/h for Bike journeys', () => {
        expect(averageSpeedByMode.Bike).toBe(13.734939759036145)
    })
    it('returns expected average speed in km/h for Car journeys', () => {
        expect(averageSpeedByMode.Car).toBe(21.428571428571427)
    })
    it('returns expected average speed in km/h for Bus journeys', () => {
        expect(averageSpeedByMode.Bus).toBe(4.354838709677419)
    })
    it('returns expected average speed in km/h for Train journeys', () => {
        expect(averageSpeedByMode.Train).toBe(33.599999999999994)
    })
    it('returns expected average speed in km/h for Underground journeys', () => {
        expect(averageSpeedByMode.Underground).toBe(11.586206896551724)
    })
    
})

describe('getAverageCostPerJourney', () => {
    let averageCostPerJourney: Record<MODE_OF_TRANSPORT, number>
    beforeEach(() => {
        averageCostPerJourney = getAverageCostPerJourney(sumByMode(mockSurveyResults), getTotalJourneysByMode(mockSurveyResults))
    })
    it('returns expected cost/journey for Walk journeys', () => {
        expect(averageCostPerJourney.Walk).toBe(0)
    })
    it('returns expected cost/journey for Bike journeys', () => {
        expect(averageCostPerJourney.Bike).toBe(0)
    })
    it('returns expected cost/journey for Car journeys', () => {
        expect(averageCostPerJourney.Car).toBe(15.25)
    })
    it('returns expected cost/journey for Bus journeys', () => {
        expect(averageCostPerJourney.Bus).toBe(4.75)
    })
    it('returns expected cost/journey for Train journeys', () => {
        expect(averageCostPerJourney.Train).toBe(15.333333333333334)
    })
    it('returns expected cost/journey for Underground journeys', () => {
        expect(averageCostPerJourney.Underground).toBe(5.166666666666667)
    })
    
})

describe('getAverageDistanceCovered', () => {
    let averageDistanceCovered: Record<MODE_OF_TRANSPORT, number>
    beforeEach(() => {
        averageDistanceCovered = getAverageDistanceCovered(sumByMode(mockSurveyResults), getTotalJourneysByMode(mockSurveyResults))
    })
    it('returns expected average distance covered for Walk journeys', () => {
        expect(averageDistanceCovered.Walk).toBe(2)
    })
    it('returns expected average distance covered for Bike journeys', () => {
        expect(averageDistanceCovered.Bike).toBe(9.5)
    })
    it('returns expected average distance covered for Car journeys', () => {
        expect(averageDistanceCovered.Car).toBe(25)
    })
    it('returns expected average distance covered for Bus journeys', () => {
        expect(averageDistanceCovered.Bus).toBe(4.5)
    })
    it('returns expected average distance covered for Train journeys', () => {
        expect(averageDistanceCovered.Train).toBe(23.333333333333332)
    })
    it('returns expected average distance covered for Underground journeys', () => {
        expect(averageDistanceCovered.Underground).toBe(9.333333333333334)
    })
    
})

describe('getAverageTimeTaken', () => {
    let averageTimeTaken: Record<MODE_OF_TRANSPORT, number>
    beforeEach(() => {
        averageTimeTaken = getAverageTimeTaken(sumByMode(mockSurveyResults), getTotalJourneysByMode(mockSurveyResults))
    })
    it('returns expected average time taken for Walk journeys', () => {
        expect(averageTimeTaken.Walk).toBe(20)
    })
    it('returns expected average time taken for Bike journeys', () => {
        expect(averageTimeTaken.Bike).toBe(41.5)
    })
    it('returns expected average time taken for Car journeys', () => {
        expect(averageTimeTaken.Car).toBe(70)
    })
    it('returns expected average time taken for Bus journeys', () => {
        expect(averageTimeTaken.Bus).toBe(62)
    })
    it('returns expected average time taken for Train journeys', () => {
        expect(averageTimeTaken.Train).toBe(41.666666666666664)
    })
    it('returns expected average time taken for Underground journeys', () => {
        expect(averageTimeTaken.Underground).toBe(48.333333333333336)
    })
    
})