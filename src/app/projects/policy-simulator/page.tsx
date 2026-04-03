'use client';

import { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, BarChart3 } from 'lucide-react';
import { simulatePolicy } from '@/app/actions';
import ReactMarkdown from 'react-markdown';

export default function PolicySimulatorPage() {
    const [city, setCity] = useState('');
    const [policy, setPolicy] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleSimulate = async () => {
        setLoading(true);
        setResult(null);
        const response = await simulatePolicy(city, policy);
        if (response.success) {
            setResult(response.data);
        } else {
            setResult(`Error: ${response.error}`);
        }
        setLoading(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Urban Policy Simulator" subtitle="Analyze Local Decisions via AI">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Policy Definition</CardTitle>
                            <CardDescription>Enter a city and a proposed policy to simulate its impact.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="city">Target City</Label>
                                <Input
                                    id="city"
                                    placeholder="e.g., Accra, Ghana"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="policy">Proposed Policy</Label>
                                <Input
                                    id="policy"
                                    placeholder="e.g., Implementing a congestion charge in the city center"
                                    value={policy}
                                    onChange={(e) => setPolicy(e.target.value)}
                                />
                            </div>
                            <Button onClick={handleSimulate} disabled={loading || !city.trim() || !policy.trim()} className="w-full">
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Simulating Impact...
                                    </>
                                ) : (
                                    <>
                                        <BarChart3 className="mr-2 h-4 w-4" />
                                        Simulate Policy
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {result && (
                        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <CardHeader>
                                <CardTitle>Impact Analysis</CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none">
                                <ReactMarkdown>{result}</ReactMarkdown>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </SectionContainer>
        </div>
    );
}
