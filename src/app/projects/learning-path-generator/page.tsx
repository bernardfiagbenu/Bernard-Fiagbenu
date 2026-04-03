'use client';

import { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Sparkles } from 'lucide-react';
import { generateLearningPath } from '@/app/actions';
import ReactMarkdown from 'react-markdown';

export default function LearningPathPage() {
    const [goal, setGoal] = useState('');
    const [level, setLevel] = useState('Beginner');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<string | null>(null);

    const handleGenerate = async () => {
        setLoading(true);
        setResult(null);
        const response = await generateLearningPath(goal, level);
        if (response.success) {
            setResult(response.data);
        } else {
            setResult(`Error: ${response.error}`);
        }
        setLoading(false);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="A.I. Learning Path Generator" subtitle="Your Personalized Map to Success">
                <div className="max-w-3xl mx-auto space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>What do you want to learn?</CardTitle>
                            <CardDescription>Tell us your goal and your current skill level.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="goal">Learning Goal</Label>
                                <Input
                                    id="goal"
                                    placeholder="e.g., Full-stack Web Development with Next.js"
                                    value={goal}
                                    onChange={(e) => setGoal(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="level">Current Level</Label>
                                <select
                                    id="level"
                                    className="w-full p-2 border rounded-md bg-background"
                                    value={level}
                                    onChange={(e) => setLevel(e.target.value)}
                                >
                                    <option>Beginner</option>
                                    <option>Intermediate</option>
                                    <option>Advanced</option>
                                </select>
                            </div>
                            <Button onClick={handleGenerate} disabled={loading || !goal.trim()} className="w-full">
                                {loading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Generating...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="mr-2 h-4 w-4" />
                                        Generate Path
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {result && (
                        <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <CardHeader>
                                <CardTitle>Your Personalized Path</CardTitle>
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
