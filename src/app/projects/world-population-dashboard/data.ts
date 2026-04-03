
export const populationData = {
    projections: {
        current: 8_200_000_000,
        peak: 10_300_000_000,
        peakYear: 2085, // Mid-2080s
        endOfCentury: 10_200_000_000,
        trend: [
            { year: 2024, population: 8_200_000_000 },
            { year: 2030, population: 8_700_000_000 }, // Interpolated
            { year: 2040, population: 9_300_000_000 }, // Interpolated
            { year: 2050, population: 9_800_000_000 }, // Interpolated
            { year: 2060, population: 10_100_000_000 }, // Interpolated
            { year: 2070, population: 10_250_000_000 }, // Interpolated
            { year: 2080, population: 10_300_000_000 }, // Interpolated
            { year: 2085, population: 10_300_000_000 }, // Peak
            { year: 2090, population: 10_280_000_000 }, // Interpolated decline
            { year: 2100, population: 10_200_000_000 },
        ]
    },
    milestones: {
        childDeaths2023: 5_000_000,
        ageCrossover: {
            year: "Late 2070s",
            over65population: 2_200_000_000,
            trend: [
                { year: 2024, under18: 2_700_000_000, over65: 800_000_000 }, // Approximate based on current data
                { year: 2040, under18: 2_600_000_000, over65: 1_400_000_000 }, // Interpolated
                { year: 2060, under18: 2_400_000_000, over65: 2_000_000_000 }, // Interpolated
                { year: 2075, under18: 2_200_000_000, over65: 2_200_000_000 }, // Crossover point
                { year: 2090, under18: 2_100_000_000, over65: 2_400_000_000 }, // Interpolated
                { year: 2100, under18: 2_000_000_000, over65: 2_500_000_000 }, // Interpolated
            ]
        },
        peakedCountries: {
            count: 63,
            percentageOfWorld: 28,
            examples: ["China", "Germany", "Japan", "Russian Federation"],
        },
        womenReproductiveAge: {
            current: 2_000_000_000,
            peak: 2_200_000_000,
            peakYear: "Late 2050s"
        }
    },
    lifeExpectancy: {
        current: 73.3,
        future: 77.4,
        futureYear: 2054,
        trend: [
            { year: 2019, years: 72.8 }, // Pre-covid baseline
            { year: 2021, years: 71.0 }, // Covid dip
            { year: 2024, years: 73.3 },
            { year: 2030, years: 74.5 }, // Interpolated
            { year: 2040, years: 75.9 }, // Interpolated
            { year: 2054, years: 77.4 },
        ]
    },
    migration: {
        mitigatingDecline: 50,
        drivingGrowthBy2054: 52,
        drivingGrowthBy2100: 62,
        examples: ["Australia", "Canada", "USA", "Germany", "Italy"]
    }
};

export type PopulationData = typeof populationData;
