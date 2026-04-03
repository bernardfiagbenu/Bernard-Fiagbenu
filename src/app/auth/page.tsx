'use client';

import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import Link from 'next/link';

export default function AuthPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center items-center py-12">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <CardTitle className="text-2xl">Authentication</CardTitle>
                        <CardDescription>
                            Authentication is currently being upgraded. Please check back soon!
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-muted-foreground">
                            We are migrating our authentication system to provide a better experience.
                            In the meantime, you can explore the portfolio freely.
                        </p>
                        <Button asChild className="w-full">
                            <Link href="/">
                                <LogIn className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}