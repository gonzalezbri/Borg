export interface AnswerOption {
    option: string;
    value: number;
}

export interface ResultMessage {
    message: string;
}

export interface TestData {
    name?: string;
    questions: string[];
    answerOptions: AnswerOption[];
    resultMessages: ResultMessage[];
    calculateScore: (answers: number[]) => string; // Function to calculate score
}

const resultMessages: ResultMessage[] = [
    { message: "Low Self-Esteem." },
    { message: "Normal Range." },
    { message: "High Self-Esteem." },
];

const testData: TestData = {
    name: "Self-Esteem Test",
    questions: [
        "I feel that I am a person of worth, at least on an equal plane with others.",
        "I feel that I have a number of good qualities.",
        "All in all, I am inclined to feel that I am a failure.",
        "I am able to do things as well as most other people.",
        "I feel I do not have much to be proud of.",
        "I take a positive attitude toward myself.",
        "On the whole, I am satisfied with myself.",
        "I wish I could have more respect for myself.",
        "I certainly feel useless at times.",
        "At times I think I am no good at all."
    ],
    answerOptions: [
        { option: "Strongly Agree ", value: 3 },
        { option: "Agree ", value: 2 },
        { option: "Disagree ", value: 1 },
        { option: "Strongly Disagree ", value: 0 }
    ],
    resultMessages,
    calculateScore: (answers: number[]) => {
        // Calculate total score based on answer values
        let totalScore = answers.reduce((acc, curr) => acc + curr, 0);

        // Determine result message based on score
        let message;
        if (totalScore <= 15) {
            message = resultMessages[0].message;
        } else if (totalScore <= 25) {
            message = resultMessages[1].message;
        } else {
            message = resultMessages[2].message;
        }

        return `Self-Esteem Test Score = ${totalScore}. ${message}`;
    },
};

export default testData;
