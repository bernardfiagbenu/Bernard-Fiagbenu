
export const hivAidsData = {
    stats2023: {
        livingWithHIV: 39900000,
        noTreatment: 9300000,
        newInfections: 1300000,
        aidsRelatedDeaths: 630000,
        womenAndGirlsLivingWithHIV: 21147000, // 53% of 39.9M
    },
    infectionTrends: [
        { year: 2010, infections: 2100000, deaths: 1900000 }, // Extrapolated deaths for 2010 based on 69% decline from 2004 peak
        { year: 2015, infections: 1800000, deaths: 1200000 },
        { year: 2020, infections: 1500000, deaths: 860000 },
        { year: 2023, infections: 1300000, deaths: 630000 },
    ],
    risingInfectionRegions: [
        { region: "Middle East & North Africa", value: 1 },
        { region: "Eastern Europe & Central Asia", value: 1 },
        { region: "Latin America", value: 1 },
    ],
    genderInequality: {
        region: "Sub-Saharan Africa",
        shareOfNewInfections: 62, // 62%
    },
    funding: {
        needed2025: 29300000000,
        available2023: 20800000000, // Assuming funding in 2023 from a source
    },
    targets: {
        newInfections2025: 370000,
    }
};

export type HivAidsData = typeof hivAidsData;
