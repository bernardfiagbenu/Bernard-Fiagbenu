
'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { urbanInsightsSketch } from '@/components/p5/UrbanInsightsSketch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Download, Building2, Droplet, Sun, Zap, Users, BarChart2, TrendingUp, ShieldAlert, Scale } from 'lucide-react';
import SectionContainer from '@/components/ui/SectionContainer';
import { cities, cityData, type CityData } from './data';
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, CartesianGrid } from 'recharts';
import { Progress } from '@/components/ui/progress';

// Dynamically import the P5Sketch component to ensure it's client-side only
const P5Sketch = dynamic(() => import('@/components/ui/P5Sketch'), {
  ssr: false,
  loading: () => <div className="h-[250px] w-full bg-gray-900 animate-pulse" />,
});

const InfrastructureItem = ({ label, value }: { label: string, value: 'high' | 'medium' | 'low' }) => {
    const progressValues = { high: 85, medium: 50, low: 25 };
    const progressColors = { high: 'bg-green-500', medium: 'bg-yellow-500', low: 'bg-red-500' };
    return (
        <div>
            <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium text-muted-foreground">{label}</span>
                <span className="text-xs font-semibold uppercase">{value}</span>
            </div>
            <Progress value={progressValues[value]} className="h-2 [&>div]:bg-primary" />
        </div>
    );
};

const RiskItem = ({ label, value, icon: Icon }: { label: string, value: string, icon: React.ElementType }) => (
    <div className="flex items-center gap-3">
        <Icon className="h-8 w-8 text-destructive" />
        <div>
            <p className="font-semibold">{label}</p>
            <p className="text-sm text-muted-foreground capitalize">{value}</p>
        </div>
    </div>
);


export default function UrbanInsightsPage() {
    const [selectedCityId, setSelectedCityId] = useState<string | null>(null);
    const [currentCityData, setCurrentCityData] = useState<CityData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        if (!selectedCityId) return;
        
        const fetchCityData = async () => {
            setIsLoading(true);
            // Simulating fetch from a local data source
            await new Promise(resolve => setTimeout(resolve, 500)); 
            
            const data = cityData[selectedCityId];
            setCurrentCityData(data); 
            setIsLoading(false);
        };

        fetchCityData();
    }, [selectedCityId]);

    const handleSaveReport = () => {
        setIsSaving(true);
        // PDF generation logic would go here
        console.log('Generating PDF for', currentCityData?.name);
        setTimeout(() => setIsSaving(false), 2000);
    };

    const housingData = currentCityData ? [
        { name: 'Formal', value: currentCityData.housing.formal, fill: 'hsl(var(--primary))' },
        { name: 'Slums', value: currentCityData.housing.slums, fill: 'hsl(var(--destructive))' }
    ] : [];

    return (
        <div>
            <header className="relative">
                <P5Sketch sketch={urbanInsightsSketch} />
            </header>
            <div className="container mx-auto px-4 py-8 -mt-16 relative z-10">
                <SectionContainer title="Urban Insights Dashboard" subtitle="Visualize data for major urban centers">
                    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
                        <Select onValueChange={setSelectedCityId} disabled={isLoading}>
                            <SelectTrigger className="w-full sm:w-[280px]">
                                <SelectValue placeholder="Select a City to Begin" />
                            </SelectTrigger>
                            <SelectContent>
                                {cities.map(city => (
                                    <SelectItem key={city.id} value={city.id}>{city.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Button onClick={handleSaveReport} disabled={!selectedCityId || isSaving}>
                            {isSaving ? (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            ) : (
                                <Download className="mr-2 h-4 w-4" />
                            )}
                            Save Report as PDF
                        </Button>
                    </div>

                    {isLoading && (
                         <div className="text-center p-12">
                            <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto" />
                            <p className="mt-4 text-muted-foreground">Loading city data...</p>
                        </div>
                    )}
                    
                    {!isLoading && selectedCityId && currentCityData && (
                        <div id="dashboard-content" className="animate-fadeInUp space-y-6">
                            <h2 className="text-3xl font-headline font-bold text-center">
                                Dashboard for <span className="text-primary">{currentCityData.name}</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                               <Card><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">Population</CardTitle><Users className="h-4 w-4 text-muted-foreground"/></CardHeader><CardContent><div className="text-2xl font-bold">{currentCityData.population.toLocaleString()}</div></CardContent></Card>
                               <Card><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">Growth Rate</CardTitle><TrendingUp className="h-4 w-4 text-muted-foreground"/></CardHeader><CardContent><div className="text-2xl font-bold">{currentCityData.growth_rate}%</div></CardContent></Card>
                               <Card><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">Slum Population</CardTitle><Building2 className="h-4 w-4 text-muted-foreground"/></CardHeader><CardContent><div className="text-2xl font-bold">{currentCityData.housing.slums}%</div></CardContent></Card>
                               <Card><CardHeader className="flex flex-row items-center justify-between pb-2"><CardTitle className="text-sm font-medium">Inequality (Gini)</CardTitle><Scale className="h-4 w-4 text-muted-foreground"/></CardHeader><CardContent><div className="text-2xl font-bold">{currentCityData.inequality_score}</div></CardContent></Card>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <Card className="lg:col-span-2">
                                    <CardHeader><CardTitle className="flex items-center gap-2"><BarChart2 className="h-5 w-5" />Population Growth</CardTitle><CardDescription>Projected population over the next decades.</CardDescription></CardHeader>
                                    <CardContent className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <LineChart data={currentCityData.population_trend}>
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="year" />
                                                <YAxis tickFormatter={(val) => `${(val / 1000000).toFixed(1)}M`} />
                                                <Tooltip formatter={(val: number) => [val.toLocaleString(), "Population"]} />
                                                <Legend />
                                                <Line type="monotone" dataKey="population" stroke="hsl(var(--primary))" strokeWidth={2} />
                                            </LineChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><CardTitle className="flex items-center gap-2"><Building2 className="h-5 w-5" />Housing Situation</CardTitle><CardDescription>Distribution of formal vs. informal housing.</CardDescription></CardHeader>
                                    <CardContent className="h-80">
                                        <ResponsiveContainer width="100%" height="100%">
                                            <PieChart>
                                                <Pie data={housingData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                                                    {housingData.map((entry, index) => (
                                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                                    ))}
                                                </Pie>
                                                <Tooltip formatter={(val: number, name: string) => [`${val}%`, name]} />
                                                <Legend />
                                            </PieChart>
                                        </ResponsiveContainer>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5" />Infrastructure Access</CardTitle></CardHeader>
                                    <CardContent className="space-y-4">
                                        <InfrastructureItem label="Electricity" value={currentCityData.infrastructure.electricity} />
                                        <InfrastructureItem label="Water" value={currentCityData.infrastructure.water} />
                                        <InfrastructureItem label="Roads" value={currentCityData.infrastructure.roads} />
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><CardTitle className="flex items-center gap-2"><ShieldAlert className="h-5 w-5" />Climate Risks</CardTitle></CardHeader>
                                    <CardContent className="space-y-4">
                                       <RiskItem label="Floods" value={currentCityData.climate_risk.floods} icon={Droplet} />
                                       <RiskItem label="Heatwaves" value={currentCityData.climate_risk.heatwaves} icon={Sun} />
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader><CardTitle className="flex items-center gap-2"><Scale className="h-5 w-5" />Inequality</CardTitle></CardHeader>
                                     <CardContent>
                                        <div className="text-center">
                                            <p className="text-sm text-muted-foreground">Gini Coefficient</p>
                                            <p className="text-5xl font-bold text-primary mt-2">{currentCityData.inequality_score}</p>
                                            <p className="text-xs text-muted-foreground mt-2">(0 = Perfect Equality, 1 = Perfect Inequality)</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    )}

                    {!isLoading && !selectedCityId && (
                        <div className="text-center p-12 border-2 border-dashed rounded-lg">
                            <p className="text-muted-foreground">Please select a city to view its dashboard.</p>
                        </div>
                    )}

                </SectionContainer>
            </div>
        </div>
    );
}
