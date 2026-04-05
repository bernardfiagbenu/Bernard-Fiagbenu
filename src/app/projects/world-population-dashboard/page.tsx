
'use client';

import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, AreaChart, Area, CartesianGrid } from 'recharts';
import { populationData, type PopulationData } from './data';
import { Users, TrendingUp, Baby, Bot, User, Activity } from 'lucide-react';

const formatNumber = (num: number, decimals = 1): string => {
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(decimals)}B`;
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(decimals)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(decimals)}K`;
    return num.toString();
};

const StatCard = ({ title, value, icon: Icon, description }: { title: string, value: string, icon: React.ElementType, description: string }) => (
    <Card className="transform transition-all duration-300 hover:shadow-2xl hover:scale-105 perspective-container dashboard-3d rounded-[2.5rem]">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

export default function WorldPopulationDashboard() {
    const { projections, milestones, lifeExpectancy } = populationData;

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Global Population Trends Dashboard" subtitle="Visualizing Our Changing World Demographics">
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <StatCard title="Current Population (2024)" value={formatNumber(projections.current, 1)} icon={Users} description="World population as of 2024." />
                    <StatCard title="Peak Population Projection" value={formatNumber(projections.peak, 1)} icon={TrendingUp} description={`Projected to peak in the mid-2080s.`} />
                    <StatCard title="Children Under 5 Deaths (2023)" value={`< ${formatNumber(milestones.childDeaths2023, 1)}`} icon={Baby} description="A historic low, showing progress in child survival." />
                    <StatCard title="Life Expectancy (2024)" value={`${lifeExpectancy.current} yrs`} icon={Activity} description={`Returning to pre-COVID levels.`} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>World Population Projection (2024-2100)</CardTitle>
                            <CardDescription>The global population is expected to peak in the mid-2080s before a gradual decline.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={projections.trend} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                    <defs>
                                        <linearGradient id="colorPopulation" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis tickFormatter={(val) => formatNumber(val, 0)} domain={['dataMin', 'dataMax']} />
                                    <Tooltip formatter={(value: number) => [formatNumber(value), "Population"]} />
                                    <Legend />
                                    <Area type="monotone" dataKey="population" name="Projected Population" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorPopulation)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>The Great Age Crossover</CardTitle>
                            <CardDescription>Population of people aged 65+ vs. children under 18.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-80">
                             <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={milestones.ageCrossover.trend} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                     <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis tickFormatter={(val) => formatNumber(val, 0)} />
                                    <Tooltip formatter={(value: number) => formatNumber(value)} />
                                    <Legend />
                                    <Line type="monotone" dataKey="over65" name="Age 65+" stroke="hsl(var(--primary))" strokeWidth={2} />
                                    <Line type="monotone" dataKey="under18" name="Under 18" stroke="hsl(var(--accent))" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Global Life Expectancy Rise</CardTitle>
                             <CardDescription>Life expectancy is recovering and projected to continue increasing.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-80">
                             <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={lifeExpectancy.trend} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                     <defs>
                                        <linearGradient id="colorLife" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.8}/>
                                            <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis domain={['dataMin - 2', 'dataMax + 2']} tickFormatter={(val) => `${val} yrs`} />
                                    <Tooltip formatter={(value: number) => [`${value} years`, "Life Expectancy"]} />
                                    <Legend />
                                    <Area type="monotone" dataKey="years" name="Life Expectancy" stroke="hsl(var(--accent))" fill="url(#colorLife)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>
            </SectionContainer>
        </div>
    );
}
