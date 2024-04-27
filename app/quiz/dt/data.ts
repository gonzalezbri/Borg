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
    { message: "You are likely not depressed. " },
    { message: "Mild depression. " },
    { message: "Moderate depression. " },
    { message: "Severe depression. " },
];

const testData: TestData = {
    name: "Major Depression Inventory (MDI) Quiz",
    questions: [
        "I feel sad:",
        "I feel discouraged about the future:",
        "I have trouble making decisions, even about small things:",
        "I have lost interest in activities I used to enjoy:",
        "I feel tired without any reason:",
        "I feel worthless or guilty about things I shouldn't:",
        "I have difficulty concentrating, remembering details, or making decisions:",
        "I have thoughts of death or suicide:",
        "I feel restless or have trouble sitting still:",
        "I have lost or gained a significant amount of weight without trying:",
        "I have trouble sleeping, either too much or too little:",
        "I feel like my emotions are numb:",
        "I feel overwhelmed by my responsibilities:",
        "I feel irritable and get annoyed easily:",
        "I have lost interest in maintaining my personal hygiene or appearance:",
        "I feel disconnected from others or my surroundings:",
        "I find it difficult to deal with daily stressors:",
        "I experience physical symptoms like headaches or stomachaches:",
        "I feel a lack of motivation to initiate or complete tasks:",
        "I feel emotionally drained or burnt out:"
    ],
    answerOptions: [
        { option: "Rarely ", value: 0 },
        { option: "Sometimes ", value: 1 },
        { option: "Often ", value: 2 },
        { option: "Most of the time ", value: 3 },
        { option: "All the time ", value: 4 }
    ],
    resultMessages,
    calculateScore: (answers: number[]) => {
        // Calculate total score based on answer values
        let totalScore = answers.reduce((acc, curr) => acc + curr, 0);

        // Determine result message based on score
        let message;
        if (totalScore <= 19) {
            message = resultMessages[0].message;
        } else if (totalScore <= 24) {
            message = resultMessages[1].message;
        } else if (totalScore <= 29) {
            message = resultMessages[2].message;
        } else {
            message = resultMessages[3].message;
        }

        return `Major Depression Inventory (MDI) Score = ${totalScore}. ${message}`;
    },
};

export default testData;
