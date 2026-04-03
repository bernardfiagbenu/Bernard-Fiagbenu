'use client';

import { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Lightbulb } from 'lucide-react';
import { brainstormSocialSolution } from '@/app/actions';
import ReactMarkdown from 'react-markdown';

export default function SocialImpactPage() {
    const [challenge, setChallenge] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleBrainstorm = async () => {
        setLoading(true);
        setResult(null);
        const response = await brainstormSocialSolution(challenge);
        if (response.success) {
            setResult(response.data);
        } else {
            setResult(`Error: ${response.error}`);
        }
        setLoading(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Social Impact Challenge Brainstormer" subtitle="Co-create Solutions with AI">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>The Challenge</CardTitle>
                            <CardDescription>What social issue are you trying to solve?</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="challenge">Social Challenge</Label>
                                <Input
                                    id="challenge"
                                    placeholder="e.g., Improving access to clean water in rural areas"
                                    value={challenge}
                                    onChange={(e) => setChallenge(e.target.value)}
                                />
                            </div>
                            <Button onClick={handleBrainstorm} disabled={loading || !challenge.trim()} className="w-full">
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Brainstorming...
                                    </>
                                ) : (
                                    <>
                                        <Lightbulb className="mr-2 h-4 w-4" />
                                        Brainstorm Solutions
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {result && (
                        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-accent/20 border-accent/20">
                            <CardHeader className="bg-accent/5">
                                <CardTitle className="text-accent">Innovative Solutions</CardTitle>
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
