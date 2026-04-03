
'use client';

import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Bar, LineChart, Line, CartesianGrid, Legend } from 'recharts';
import { hivAidsData, type HivAidsData } from './data';
import { Users, Droplets, TrendingUp, AlertTriangle, Target, HeartOff, PersonStanding, Info } from 'lucide-react';

const formatNumber = (num: number): string => {
    if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1)}B`;
    if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
    return num.toString();
};


const StatCard = ({ title, value, icon: Icon, description }: { title: string, value: string, icon: React.ElementType, description: string }) => (
    <Card className="transform transition-all duration-300 hover:shadow-2xl hover:scale-105">
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

export default function HivAidsDashboardPage() {
    const { stats2023, infectionTrends, risingInfectionRegions, genderInequality, funding, targets } = hivAidsData;

    const treatmentGap = stats2023.livingWithHIV - stats2023.noTreatment;
    const treatmentData = [
        { name: 'Receiving Treatment', value: treatmentGap, fill: 'hsl(var(--primary))' },
        { name: 'No Treatment', value: stats2023.noTreatment, fill: 'hsl(var(--destructive))' }
    ];

    const fundingGap = funding.needed2025 - funding.available2023;
    const fundingData = [
        { name: 'Available Funding (2023)', value: funding.available2023, fill: 'hsl(var(--primary))' },
        { name: 'Funding Gap (by 2025)', value: fundingGap, fill: 'hsl(var(--destructive))' }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Global HIV/AIDS Epidemic Dashboard" subtitle="Visualizing UNAIDS Data and Key Challenges">
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <StatCard title="People Living with HIV (2023)" value={formatNumber(stats2023.livingWithHIV)} icon={Users} description="Total number of people living with HIV globally." />
                    <StatCard title="New HIV Infections (2023)" value={formatNumber(stats2023.newInfections)} icon={Droplets} description={`Target for 2025 is ${formatNumber(targets.newInfections2025)}.`} />
                    <StatCard title="AIDS-Related Deaths (2023)" value={formatNumber(stats2023.aidsRelatedDeaths)} icon={HeartOff} description="Deaths have declined by 69% since the 2004 peak." />
                    <StatCard title="People Without Treatment (2023)" value={formatNumber(stats2023.noTreatment)} icon={AlertTriangle} description="Almost a quarter are not on life-saving therapy." />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Infection and Death Trends (2010-2023)</CardTitle>
                            <CardDescription>Progress in reducing new infections and deaths.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={infectionTrends} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis tickFormatter={formatNumber}/>
                                    <Tooltip formatter={(value: number) => formatNumber(value)} />
                                    <Legend />
                                    <Line type="monotone" dataKey="infections" name="New Infections" stroke="hsl(var(--destructive))" strokeWidth={2} />
                                    <Line type="monotone" dataKey="deaths" name="AIDS-Related Deaths" stroke="hsl(var(--primary))" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Treatment Gap (2023)</CardTitle>
                             <CardDescription>Out of 39.9M people, 9.3M are not receiving treatment.</CardDescription>
                        </CardHeader>
                        <CardContent className="h-80">
                             <ResponsiveContainer width="100%" height="100%">
                                <BarChart layout="vertical" data={treatmentData} margin={{ top: 5, right: 20, left: 50, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis type="number" tickFormatter={formatNumber} />
                                    <YAxis type="category" dataKey="name" width={100} />
                                    <Tooltip formatter={(value: number) => formatNumber(value)}/>
                                    <Bar dataKey="value" background={{ fill: 'hsl(var(--muted) / 0.2)' }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    <Card className="lg:col-span-2">
                        <CardHeader>
                            <CardTitle>Funding vs. Need</CardTitle>
                            <CardDescription>A significant funding gap jeopardizes the goal of ending AIDS by 2030.</CardDescription>
                        </CardHeader>
                         <CardContent className="h-80">
                             <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={fundingData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis tickFormatter={formatNumber} />
                                    <Tooltip formatter={(value: number) => `$${formatNumber(value)}`} />
                                    <Bar dataKey="value" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><PersonStanding/>Gender Disparities</CardTitle>
                             <CardDescription>Women and girls are disproportionately affected.</CardDescription>
                        </CardHeader>
                        <CardContent className="text-center">
                            <p className="text-4xl font-bold text-primary">{genderInequality.shareOfNewInfections}%</p>
                            <p className="text-muted-foreground mt-2">of all new HIV infections in {genderInequality.region} in 2023 were among women and girls.</p>
                        </CardContent>
                    </Card>

                     <Card>
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2"><TrendingUp/>Regions with Rising Infections</CardTitle>
                             <CardDescription>Despite global progress, new infections are increasing in these areas.</CardDescription>
                        </CardHeader>
                        <CardContent>
                           <ul className="space-y-2">
                                {risingInfectionRegions.map(item => (
                                    <li key={item.region} className="text-sm font-medium text-destructive flex items-center">
                                       <AlertTriangle className="h-4 w-4 mr-2"/> {item.region}
                                    </li>
                                ))}
                           </ul>
                        </CardContent>
                    </Card>
                </div>
                 <Card className="mt-8 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-300">
                            <Info />
                            <span>The Path to End AIDS</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-700 dark:text-blue-200">
                        <p>Ending AIDS by 2030 is a Sustainable Development Goal. Achieving this requires closing the treatment and funding gaps, addressing gender inequalities, fighting stigma, and focusing efforts on the regions and populations most affected. This dashboard highlights the data-driven path forward.</p>
                    </CardContent>
                </Card>
            </SectionContainer>
        </div>
    );
}
