
import type { LucideIcon } from 'lucide-react';
import { Target, HeartPulse, Baby, ShieldAlert, Package, Plus, Minus } from 'lucide-react';

// UHC Scoreboard Data
export interface Indicator {
    name: string;
    value: number;
    target: number;
    icon: LucideIcon;
    format: 'percentage' | 'number';
}

export const uhcIndicators: Indicator[] = [
    { name: 'Life Expectancy', value: 64, target: 70, icon: HeartPulse, format: 'number' },
    { name: 'Child Mortality (per 1,000)', value: 45, target: 25, icon: Baby, format: 'number' },
    { name: 'NCD Mortality Rate', value: 25, target: 15, icon: ShieldAlert, format: 'percentage' },
    { name: 'UHC Service Coverage Index', value: 60, target: 80, icon: Target, format: 'percentage' },
];

// Emergency Supply Tracker Data
export interface SupplyItem {
    id: string;
    name: string;
    stock: number;
    threshold: number;
    icon: LucideIcon;
}

export const initialSupplies: SupplyItem[] = [
    { id: 'vaccines', name: 'Vaccines (doses)', stock: 500, threshold: 100, icon: ShieldAlert },
    { id: 'masks', name: 'Face Masks', stock: 2500, threshold: 500, icon: Package },
    { id: 'gloves', name: 'Medical Gloves (pairs)', stock: 1500, threshold: 300, icon: Package },
    { id: 'test-kits', name: 'Test Kits', stock: 80, threshold: 20, icon: Package },
];

