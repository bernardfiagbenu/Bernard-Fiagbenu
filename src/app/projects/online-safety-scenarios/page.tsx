'use client';

import { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ShieldCheck } from 'lucide-react';
import { generateSafetyScenario } from '@/app/actions';
import ReactMarkdown from 'react-markdown';

export default function OnlineSafetyPage() {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const topics = ['Phishing', 'Social Media Privacy', 'Password Security', 'Online Scams'];

    const handleGenerate = async (topic: string) => {
        setLoading(true);
        setResult(null);
        const response = await generateSafetyScenario(topic);
        if (response.success) {
            setResult(response.data);
        } else {
            setResult(`Error: ${response.error}`);
        }
        setLoading(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Online Safety Scenario Simulator" subtitle="Practice Staying Safe Online">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Select a Topic</CardTitle>
                            <CardDescription>Choose an area to test your safety knowledge.</CardDescription>
                        </CardHeader>
                        <CardContent className="grid grid-cols-2 gap-4">
                            {topics.map((topic) => (
                                <Button key={topic} onClick={() => handleGenerate(topic)} disabled={loading} variant="outline" className="h-20 text-lg">
                                    {topic}
                                </Button>
                            ))}
                        </CardContent>
                    </Card>

                    {loading && (
                        <div className="flex flex-col items-center justify-center p-12">
                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                            <p className="mt-4 text-muted-foreground animate-pulse">Designing your scenario...</p>
                        </div>
                    )}

                    {result && (
                        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 border-primary/50">
                            <CardHeader className="bg-primary/5">
                                <CardTitle className="flex items-center gap-2">
                                    <ShieldCheck className="text-primary" />
                                    Your Safety Challenge
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="prose dark:prose-invert max-w-none pt-6">
                                <ReactMarkdown>{result}</ReactMarkdown>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </SectionContainer>
        </div>
    );
}
