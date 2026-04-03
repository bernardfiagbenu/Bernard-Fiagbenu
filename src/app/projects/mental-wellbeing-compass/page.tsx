
'use client';

import React, { useState } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { phq9Questions, answerOptions, getSeverity, type SeverityLevel } from './data';
import { AlertTriangle, CheckCircle2, HeartPulse, FileDown, RefreshCw } from 'lucide-react';

type Answers = { [key: number]: number };

export default function MentalWellbeingCompassPage() {
    const [answers, setAnswers] = useState<Answers>({});
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [results, setResults] = useState<{ score: number; severity: SeverityLevel } | null>(null);

    const handleAnswerChange = (questionId: number, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: parseInt(value, 10) }));
    };

    const handleNext = () => {
        if (currentQuestionIndex < phq9Questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            // Last question, calculate results
            const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
            const severity = getSeverity(totalScore);
            setResults({ score: totalScore, severity });
        }
    };
    
    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(prev => prev - 1);
        }
    };

    const handleRestart = () => {
        setAnswers({});
        setCurrentQuestionIndex(0);
        setResults(null);
    };

    const currentQuestion = phq9Questions[currentQuestionIndex];
    const isAnswered = answers[currentQuestion.id] !== undefined;

    if (results) {
        // --- Results View ---
        const { score, severity } = results;
        return (
            <div className="container mx-auto px-4 py-8">
                <SectionContainer title="Your Anonymous Screening Results" subtitle="Based on the PHQ-9 Questionnaire for Depression">
                    <div className="max-w-3xl mx-auto animate-fadeInUp">
                        <Card>
                            <CardHeader className="text-center">
                                <CardTitle className="text-2xl">Your Score: {score} / 27</CardTitle>
                                <CardDescription>Severity Level: 
                                    <span className="font-bold ml-1" style={{ color: score > 9 ? 'hsl(var(--destructive))' : 'hsl(var(--primary))' }}>
                                        {severity.level}
                                    </span>
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="p-4 bg-muted rounded-lg">
                                    <h3 className="font-semibold text-lg mb-2">Recommendation</h3>
                                    <p className="text-muted-foreground">{severity.recommendation}</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-3">Suggested Resources</h3>
                                    <div className="space-y-3">
                                        {severity.resources.map(resource => (
                                            <div key={resource.title} className="p-3 border rounded-md">
                                                <h4 className="font-semibold">{resource.title}</h4>
                                                <p className="text-sm text-muted-foreground">{resource.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <Card className="p-4 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                                    <div className="flex items-start gap-3">
                                        <AlertTriangle className="h-5 w-5 mt-1 text-yellow-600 dark:text-yellow-400" />
                                        <div>
                                            <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">Important Disclaimer</h4>
                                            <p className="text-sm text-yellow-700 dark:text-yellow-300">
                                                This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.
                                            </p>
                                        </div>
                                    </div>
                                </Card>
                            </CardContent>
                            <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                                <Button onClick={handleRestart}><RefreshCw className="mr-2"/> Start Over</Button>
                                <Button variant="outline"><FileDown className="mr-2"/> Save Report as PDF (Coming Soon)</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </SectionContainer>
            </div>
        );
    }
    
    // --- Questionnaire View ---
    return (
        <div className="container mx-auto px-4 py-8">
            <SectionContainer title="Mental Wellbeing Self-Check" subtitle="Anonymously answer 9 questions based on the PHQ-9 screening tool.">
                 <Card className="max-w-2xl mx-auto">
                    <CardHeader>
                        <Progress value={((currentQuestionIndex + 1) / phq9Questions.length) * 100} className="mb-4" />
                        <CardTitle className="flex items-start gap-3">
                            <HeartPulse className="h-6 w-6 text-primary mt-1" />
                            <span>Over the last 2 weeks, how often have you been bothered by the following problems?</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="font-semibold text-lg mb-4 text-center">"{currentQuestion.text}"</p>
                        <RadioGroup
                            onValueChange={(value) => handleAnswerChange(currentQuestion.id, value)}
                            value={answers[currentQuestion.id]?.toString()}
                            className="space-y-2"
                        >
                            {answerOptions.map(option => (
                                <Label key={option.value} className="flex items-center space-x-3 p-3 border rounded-md cursor-pointer hover:bg-muted/50 has-[:checked]:bg-primary/10 has-[:checked]:border-primary">
                                    <RadioGroupItem value={option.value.toString()} id={`q${currentQuestion.id}-o${option.value}`} />
                                    <span>{option.text}</span>
                                </Label>
                            ))}
                        </RadioGroup>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={handleBack} disabled={currentQuestionIndex === 0}>
                            Back
                        </Button>
                        <Button onClick={handleNext} disabled={!isAnswered}>
                            {currentQuestionIndex < phq9Questions.length - 1 ? 'Next' : 'See Results'}
                        </Button>
                    </CardFooter>
                </Card>
            </SectionContainer>
        </div>
    );
}
