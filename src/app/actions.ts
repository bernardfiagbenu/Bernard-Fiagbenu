'use server';

import { askAI } from '@/lib/ai';

export async function generateLearningPath(goal: string, currentLevel: string) {
    const systemPrompt = `You are an expert educational consultant. Generate a detailed, step-by-step learning path for the following goal and level. Format the response in clear Markdown with headings and bullet points.`;
    const prompt = `Goal: ${goal}\nCurrent Level: ${currentLevel}\n\nPlease provide a structured path including key concepts to master, recommended project ideas, and estimated timeframes for each stage.`;

    try {
        const response = await askAI(prompt, systemPrompt);
        return { success: true, data: response };
    } catch (error: any) {
        console.error('AI Action Error:', error);
        return { success: false, error: error.message || 'Failed to generate learning path' };
    }
}

export async function generateSafetyScenario(topic: string) {
    const systemPrompt = `You are a cybersecurity and online safety expert. Generate a realistic online safety scenario for a user to practice their response. Include a situation description and 3-4 multiple-choice options for how to respond.`;
    const prompt = `Topic: ${topic}`;

    try {
        const response = await askAI(prompt, systemPrompt);
        return { success: true, data: response };
    } catch (error: any) {
        console.error('AI Action Error:', error);
        return { success: false, error: error.message || 'Failed to generate scenario' };
    }
}

export async function simulatePolicy(city: string, policy: string) {
    const systemPrompt = `You are an urban planning and sustainability expert. Analyze the potential impact of a specific urban policy on a given city. Provide a balanced analysis of pros, cons, and long-term sustainability impacts.`;
    const prompt = `City: ${city}\nPolicy: ${policy}`;

    try {
        const response = await askAI(prompt, systemPrompt);
        return { success: true, data: response };
    } catch (error: any) {
        console.error('AI Action Error:', error);
        return { success: false, error: error.message || 'Failed to simulate policy' };
    }
}

export async function brainstormSocialSolution(challenge: string) {
    const systemPrompt = `You are a social innovation consultant. Brainstorm 3-5 creative and feasible solutions to a given social challenge. For each solution, provide a brief description, potential impact, and key stakeholders.`;
    const prompt = `Social Challenge: ${challenge}`;

    try {
        const response = await askAI(prompt, systemPrompt);
        return { success: true, data: response };
    } catch (error: any) {
        console.error('AI Action Error:', error);
        return { success: false, error: error.message || 'Failed to brainstorm solutions' };
    }
}
