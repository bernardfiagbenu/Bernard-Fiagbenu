'use client';

import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import SectionContainer from '@/components/ui/SectionContainer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ProfilePage() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/auth');
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <SectionContainer title="Profile" subtitle="Loading your profile...">
          <div className="flex justify-center items-center h-48">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </SectionContainer>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <SectionContainer title="Profile" subtitle="You are not signed in">
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">Please sign in to view your profile.</p>
            <Button asChild>
              <Link href="/auth">Go to Sign In</Link>
            </Button>
          </div>
        </SectionContainer>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionContainer title="My Profile" subtitle="Welcome to your personal dashboard">
        <div className="max-w-md mx-auto">
          <Card className="hover:shadow-2xl transition-all duration-300 perspective-container dashboard-3d rounded-[2.5rem]">
            <CardHeader className="items-center text-center">
              <CardTitle className="text-2xl">{user.displayName || 'User'}</CardTitle>
              <CardDescription>{user.email || user.phoneNumber || 'No contact info'}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                This is your profile page. More features coming soon!
              </p>
            </CardContent>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
}