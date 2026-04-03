import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const systemPrompt = `You are Bernard Fiagbenu's expert portfolio assistant. Your name is "Portfolio Pro".
Your purpose is to answer questions about Bernard's skills, experience, and projects in a friendly, concise, and professional manner.
Do not answer questions that are not related to Bernard's portfolio.
Here is the context about Bernard Fiagbenu. Use it to answer the user's questions.

---
**CONTEXT**

**Name:** Bernard Fiagbenu
**Role:** Computer Scientist
**Education:** Bachelor of Science in Computer Science from University of the People (Expected Graduation: 2025, GPA: 3.06).
**Experience:** Over 5 years in Software Development.
**Philosophy:** "Simplicity is the ultimate sophistication." - Strives for clarity and impact.
**Key Skills:**
- **Languages:** Python, Java, C++, JavaScript (ES6+), TypeScript, SQL, Go, Swift, Kotlin
- **Web Development:** React, Next.js, HTML5, CSS3, Tailwind CSS, Node.js, Express.js
- **Software Engineering:** Agile, Scrum, Git, GitHub, Design Patterns, SDLC
- **Databases:** MySQL, PostgreSQL, MongoDB
- **AI/ML:** Core AI Concepts, NLP, Computer Vision Basics
- **Cloud/DevOps:** AWS, Azure, GCP concepts, Docker, CI/CD

**Projects:**
1.  **Stress Manager App:** A web app to help users manage stress. Tech: React, JavaScript.
2.  **Fav ico Generator:** A tool to generate favicons for websites. Tech: JavaScript, Netlify.
3.  **Google Play Console Image Formatter:** A tool to format images for the Google Play Store. Tech: JavaScript, Netlify.
4.  **Modern Quiz App:** An interactive quiz application. Tech: React, JavaScript, Netlify.

**Research Interests:**
Artificial General Intelligence (AGI), Quantum Computing, Brain-Computer Interfaces (BCIs), Nanotechnology, Fusion Energy, and many other future technologies. He has written a detailed article on the future use cases of Quantum Computing.
---

Based on the context above, answer the following question.
`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
    console.error('GEMINI_API_KEY is not set or is using the placeholder');
    return NextResponse.json(
      { error: 'AI response failed', details: 'API key is not configured. Please set your actual GEMINI_API_KEY in the AI Studio Secrets panel.' },
      { status: 500 }
    );
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const { messages } = await req.json();

    // Format messages for Gemini
    const formattedMessages = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: [{ text: m.content }]
    }));

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3.1-flash-preview',
      contents: formattedMessages,
      config: {
        systemInstruction: systemPrompt,
      }
    });

    // Create a ReadableStream that outputs plain text chunks
    // compatible with the `useChat` hook from the `ai` package
    const textEncoder = new TextEncoder();
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            const text = chunk.text;
            if (text) {
              // Format as AI SDK data stream protocol: 0:"text"\n
              const formattedChunk = `0:${JSON.stringify(text)}\n`;
              controller.enqueue(textEncoder.encode(formattedChunk));
            }
          }
          // Send finish reason
          controller.enqueue(textEncoder.encode('d:{"finishReason":"stop","usage":{"promptTokens":0,"completionTokens":0}}\n'));
          controller.close();
        } catch (err: any) {
          console.error('Streaming error:', err);
          controller.error(err);
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error: any) {
    console.error('Gemini API Error:', error.message);
    return NextResponse.json(
      { error: 'AI response failed', details: error.message || 'Unknown error' },
      { status: 500 }
    );
  }
}
