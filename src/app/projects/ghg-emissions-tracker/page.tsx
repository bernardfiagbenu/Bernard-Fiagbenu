
'use client';

import { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Globe, Factory, Lightbulb, Tractor, Landmark } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

// Using a public URL for the GeoJSON data
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

// Simulated data
const countries = [
  { name: "United States", coordinates: [-95.7129, 37.0902], emissions: 5280, sector: "Energy" },
  { name: "China", coordinates: [104.1954, 35.8617], emissions: 11500, sector: "Industrial" },
  { name: "India", coordinates: [78.9629, 20.5937], emissions: 2800, sector: "Agriculture" },
  { name: "Germany", coordinates: [10.4515, 51.1657], emissions: 760, sector: "Energy" },
  { name: "Brazil", coordinates: [-51.9253, -14.2350], emissions: 1100, sector: "Land Use Change" },
];

const sectors = ["All", "Energy", "Industrial", "Agriculture", "Land Use Change"];

const SectorIcon = ({ sector }: { sector: string }) => {
    switch (sector) {
        case 'Energy': return <Lightbulb className="h-5 w-5 text-yellow-500" />;
        case 'Industrial': return <Factory className="h-5 w-5 text-gray-500" />;
        case 'Agriculture': return <Tractor className="h-5 w-5 text-green-500" />;
        case 'Land Use Change': return <Landmark className="h-5 w-5 text-orange-500" />;
        default: return <Globe className="h-5 w-5" />;
    }
}

export default function GhgEmissionsTrackerPage() {
    const [selectedSector, setSelectedSector] = useState("All");

    const filteredData = selectedSector === "All" 
        ? countries 
        : countries.filter(c => c.sector === selectedSector);

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Urban Resilience Planner" subtitle="Visualize greenhouse gas emissions data by country and sector">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Controls */}
                    <Card className="md:col-span-1">
                        <CardHeader>
                            <CardTitle>Filters</CardTitle>
                            <CardDescription>Select a sector to view emissions data.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <label htmlFor="sector-select" className="text-sm font-medium">Sector</label>
                                <Select onValueChange={setSelectedSector} defaultValue="All">
                                    <SelectTrigger id="sector-select">
                                        <SelectValue placeholder="Select a sector" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {sectors.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                            <Button className="w-full" onClick={() => setSelectedSector("All")}>Reset Filters</Button>
                        </CardContent>
                    </Card>

                    {/* Map */}
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Emissions Map</CardTitle>
                            <CardDescription>Hover over a marker to see details.</CardDescription>
                        </CardHeader>
                        <CardContent className="aspect-video p-0">
                            <TooltipProvider>
                                <ComposableMap projectionConfig={{ scale: 147 }}>
                                    <Geographies geography={geoUrl}>
                                        {({ geographies }) =>
                                            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />)
                                        }
                                    </Geographies>
                                    {filteredData.map(({ name, coordinates, emissions, sector }) => (
                                        <Tooltip key={name}>
                                            <TooltipTrigger asChild>
                                                <Marker coordinates={[coordinates[0], coordinates[1]]}>
                                                    <circle r={8} fill="hsl(var(--primary))" stroke="#fff" strokeWidth={2} className="cursor-pointer hover:fill-accent" />
                                                </Marker>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <div className="p-2">
                                                    <h4 className="font-bold text-lg">{name}</h4>
                                                    <p>Emissions: {emissions} MtCO₂e</p>
                                                    <div className="flex items-center gap-2">
                                                        <p>Primary Sector:</p>
                                                        <SectorIcon sector={sector} />
                                                        <span>{sector}</span>
                                                    </div>
                                                </div>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </ComposableMap>
                            </TooltipProvider>
                        </CardContent>
                    </Card>
                </div>
            </SectionContainer>
        </div>
    );
}
