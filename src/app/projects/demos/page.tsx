
'use client';

import { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { uhcIndicators, initialSupplies, type Indicator, type SupplyItem } from './data';
import { AlertTriangle, Plus, Minus, Package, Target } from 'lucide-react';
import { cn } from '@/lib/utils';


// --- UHC Scoreboard Demo ---
const UHCScoreboard = () => {
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Target />UHC Scoreboard Demo</CardTitle>
                <CardDescription>Tracking progress toward Universal Health Coverage goals (2030 targets).</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {uhcIndicators.map((indicator) => (
                    <div key={indicator.name}>
                        <div className="flex justify-between items-center mb-1">
                            <h4 className="text-sm font-medium flex items-center gap-2">
                                <indicator.icon className="h-4 w-4 text-muted-foreground" />
                                {indicator.name}
                            </h4>
                            <span className="text-sm text-muted-foreground">
                                {indicator.value}{indicator.format === 'percentage' ? '%' : ''} / <strong>{indicator.target}{indicator.format === 'percentage' ? '%' : ''}</strong>
                            </span>
                        </div>
                        <Progress value={(indicator.value / indicator.target) * 100} className="h-2" />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};


// --- Emergency Supply Tracker Demo ---
const EmergencySupplyTracker = () => {
    const [supplies, setSupplies] = useState<SupplyItem[]>(initialSupplies);

    const handleStockChange = (id: string, amount: number) => {
        setSupplies(supplies.map(item => 
            item.id === id ? { ...item, stock: Math.max(0, item.stock + amount) } : item
        ));
    };
    
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Package />Emergency Supply Tracker</CardTitle>
                <CardDescription>A simple inventory management system for critical supplies.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {supplies.map(item => {
                    const isLowStock = item.stock < item.threshold;
                    return (
                        <div key={item.id} className={cn("p-3 rounded-lg", isLowStock ? 'bg-destructive/10 border border-destructive/20' : 'bg-muted/50')}>
                           <div className="flex justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <item.icon className={cn("h-6 w-6", isLowStock ? "text-destructive" : "text-primary")} />
                                    <div>
                                        <h4 className="font-semibold">{item.name}</h4>
                                        <p className="text-xs text-muted-foreground">
                                            Stock: {item.stock.toLocaleString()} | Threshold: {item.threshold.toLocaleString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => handleStockChange(item.id, -10)}>
                                        <Minus className="h-4 w-4" />
                                    </Button>
                                    <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => handleStockChange(item.id, 10)}>
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                           </div>
                            {isLowStock && (
                                <div className="mt-2 flex items-center gap-2 text-destructive text-xs font-medium">
                                    <AlertTriangle className="h-3 w-3" />
                                    <span>Low stock alert!</span>
                                </div>
                            )}
                        </div>
                    );
                })}
            </CardContent>
        </Card>
    );
};


export default function DemosPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="Project Demos" subtitle="A collection of interactive mini-apps and prototypes.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <UHCScoreboard />
            <EmergencySupplyTracker />
            {/* Future demos will be added here */}
        </div>
      </SectionContainer>
    </div>
  );
}
