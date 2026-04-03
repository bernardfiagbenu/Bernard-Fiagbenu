import { GoogleGenAI } from '@google/genai';

export async function askAI(prompt: string, systemPrompt?: string) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        throw new Error('API key is not configured. Please set your actual GEMINI_API_KEY in the AI Studio Secrets panel.');
    }
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-preview',
        contents: prompt,
        config: {
            systemInstruction: systemPrompt,
        }
    });
    return response.text || '';
}
