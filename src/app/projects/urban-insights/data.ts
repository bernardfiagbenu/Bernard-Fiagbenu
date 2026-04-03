
export interface CityData {
    name: string;
    population: number;
    growth_rate: number;
    housing: {
        formal: number;
        slums: number;
    };
    infrastructure: {
        roads: 'high' | 'medium' | 'low';
        electricity: 'high' | 'medium' | 'low';
        water: 'high' | 'medium' | 'low';
    };
    climate_risk: {
        floods: 'high' | 'medium' | 'low';
        heatwaves: 'high' | 'medium' | 'low';
    };
    inequality_score: number;
    population_trend: { year: number; population: number }[];
}

export const cities = [
    { id: 'accra', name: 'Accra' },
    { id: 'nairobi', name: 'Nairobi' },
    { id: 'shanghai', name: 'Shanghai' },
    { id: 'sao-paulo', name: 'São Paulo' },
];

export const cityData: Record<string, CityData> = {
    'accra': {
        name: "Accra",
        population: 2600000,
        growth_rate: 2.1,
        housing: { formal: 65, slums: 35 },
        infrastructure: { roads: "medium", electricity: "medium", water: "low" },
        climate_risk: { floods: "high", heatwaves: "medium" },
        inequality_score: 0.43,
        population_trend: [
            { year: 2020, population: 2514000 },
            { year: 2025, population: 2780000 },
            { year: 2030, population: 3050000 },
            { year: 2035, population: 3320000 },
        ]
    },
    'nairobi': {
        name: "Nairobi",
        population: 4900000,
        growth_rate: 3.8,
        housing: { formal: 40, slums: 60 },
        infrastructure: { roads: "low", electricity: "medium", water: "low" },
        climate_risk: { floods: "medium", heatwaves: "low" },
        inequality_score: 0.55,
        population_trend: [
            { year: 2020, population: 4397000 },
            { year: 2025, population: 5350000 },
            { year: 2030, population: 6540000 },
            { year: 2035, population: 7980000 },
        ]
    },
    'shanghai': {
        name: "Shanghai",
        population: 27800000,
        growth_rate: 1.2,
        housing: { formal: 95, slums: 5 },
        infrastructure: { roads: "high", electricity: "high", water: "high" },
        climate_risk: { floods: "high", heatwaves: "high" },
        inequality_score: 0.38,
        population_trend: [
            { year: 2020, population: 27058000 },
            { year: 2025, population: 28500000 },
            { year: 2030, population: 29800000 },
            { year: 2035, population: 30700000 },
        ]
    },
    'sao-paulo': {
        name: "São Paulo",
        population: 22400000,
        growth_rate: 0.9,
        housing: { formal: 78, slums: 22 },
        infrastructure: { roads: "medium", electricity: "high", water: "medium" },
        climate_risk: { floods: "high", heatwaves: "medium" },
        inequality_score: 0.58,
        population_trend: [
            { year: 2020, population: 22043000 },
            { year: 2025, population: 22900000 },
            { year: 2030, population: 23600000 },
            { year: 2035, population: 24100000 },
        ]
    }
};
