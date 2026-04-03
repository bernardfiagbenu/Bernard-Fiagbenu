
export interface Question {
    id: number;
    text: string;
}

export interface AnswerOption {
    text: string;
    value: number;
}

export const phq9Questions: Question[] = [
    { id: 1, text: "Little interest or pleasure in doing things" },
    { id: 2, text: "Feeling down, depressed, or hopeless" },
    { id: 3, text: "Trouble falling or staying asleep, or sleeping too much" },
    { id: 4, text: "Feeling tired or having little energy" },
    { id: 5, text: "Poor appetite or overeating" },
    { id: 6, text: "Feeling bad about yourself—or that you are a failure or have let yourself or your family down" },
    { id: 7, text: "Trouble concentrating on things, such as reading the newspaper or watching television" },
    { id: 8, text: "Moving or speaking so slowly that other people could have noticed? Or the opposite—being so fidgety or restless that you have been moving around a lot more than usual" },
    { id: 9, text: "Thoughts that you would be better off dead or of hurting yourself in some way" },
];

export const answerOptions: AnswerOption[] = [
    { text: "Not at all", value: 0 },
    { text: "Several days", value: 1 },
    { text: "More than half the days", value: 2 },
    { text: "Nearly every day", value: 3 },
];

export interface SeverityLevel {
    level: 'None' | 'Minimal' | 'Mild' | 'Moderate' | 'Moderately Severe' | 'Severe';
    scoreRange: [number, number];
    recommendation: string;
    resources: { title: string; description: string; }[];
}

export const severityLevels: SeverityLevel[] = [
     {
        level: 'None',
        scoreRange: [0, 0],
        recommendation: "Your score suggests you are not currently experiencing significant symptoms of depression. It's still important to practice self-care and be mindful of your mental health.",
        resources: [
            { title: "General Wellness Tips", description: "Explore tips for maintaining a healthy lifestyle, including diet, exercise, and sleep hygiene." },
            { title: "Mindfulness Exercises", description: "Learn simple mindfulness techniques to stay present and reduce stress." }
        ]
    },
    {
        level: 'Minimal',
        scoreRange: [1, 4],
        recommendation: "Your score suggests minimal symptoms of depression, which may not require treatment. It's a good idea to monitor your mood and continue practicing healthy habits.",
        resources: [
            { title: "Self-Help Toolkit", description: "Try our guided breathing exercises or mindfulness tracks to manage daily stress." },
            { title: "WHO 'Doing What Matters'", description: "Access quick, evidence-based exercises for stress management." }
        ]
    },
    {
        level: 'Mild',
        scoreRange: [5, 9],
        recommendation: "Your score indicates mild depression. Lifestyle changes, self-help strategies, and monitoring your symptoms can be very effective. Consider talking to a friend, family member, or a professional if symptoms persist.",
        resources: [
            { title: "Cognitive Behavioral Therapy (CBT) Worksheets", description: "Use our templates to identify and challenge negative thought patterns." },
            { title: "Find Local Services", description: "Use our resource map to find local support groups or clinics for a consultation." }
        ]
    },
    {
        level: 'Moderate',
        scoreRange: [10, 14],
        recommendation: "Your score suggests moderate depression where professional treatment is often recommended. A combination of therapy (like CBT) and sometimes medication can be very effective. Please consider reaching out to a healthcare provider.",
        resources: [
            { title: "How to Talk to a Doctor", description: "Tips and guides on preparing for a conversation about your mental health with a professional." },
            { title: "National Mental Health Hotlines", description: "Find a list of confidential hotlines for immediate support and guidance." }
        ]
    },
    {
        level: 'Moderately Severe',
        scoreRange: [15, 19],
        recommendation: "Your score indicates moderately severe depression. It is highly recommended that you seek help from a mental health professional. Active treatment with therapy and potentially medication is a standard course of action.",
        resources: [
            { title: "Urgent Support & Hotlines", description: "Access immediate support through national and local crisis lines." },
            { title: "Understanding Treatment Options", description: "Learn about different types of therapy and medications available for depression." }
        ]
    },
    {
        level: 'Severe',
        scoreRange: [20, 27],
        recommendation: "Your score suggests severe depression, and it is very important to seek professional help as soon as possible. Please contact a doctor, therapist, or a crisis line immediately. Your safety and well-being are the top priority.",
        resources: [
            { title: "Emergency & Crisis Support", description: "If you are in crisis, go to the nearest emergency room or call a crisis line now. This section provides immediate steps." },
            { title: "Creating a Safety Plan", description: "Guidance on developing a personal safety plan to navigate moments of intense distress." }
        ]
    }
];

export const getSeverity = (score: number): SeverityLevel => {
    return severityLevels.find(level => score >= level.scoreRange[0] && score <= level.scoreRange[1]) || severityLevels[0];
};
