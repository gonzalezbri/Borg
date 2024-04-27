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
    { message: "While the score doesn't confirm the existence of an anxiety disorder, it does highlight certain symptoms that warrant attention. If there's ongoing concern, it's advisable to keep an eye on these symptoms and retake the questionnaire in one to two weeks to reassess the situation." },
    { message: "The score suggests mild anxiety. Given the presence of signs and ongoing concerns, it's recommended to monitor the situation and retake the questionnaire in one to two weeks for further evaluation. " },
    { message: "The score suggests moderate anxiety as per the individual's self-report. To further assess the condition, it's advisable to employ additional quantitative and qualitative psychological or psychiatric evaluations." },
    { message: "This score indicates the presence of severe anxiety disorder as reported by the subject answering the questions. Other quantitative and qualitative measures of psychological/ psychiatric tested should continue the evaluation further. " },
];

const testData: TestData = {
    name: "GAD 7 – Generalized Anxiety Disorder Test",
    questions: [
        "Feeling nervous, anxious or on edge:",
        "Not being able to stop or control worrying:",
        "Worrying too much about different things:",
        "Trouble relaxing:",
        "Being so restless that it is hard to sit still:",
        "Becoming easily annoyed or irritable:",
        "Feeling afraid as if something awful might happen:"
    ],
    answerOptions: [
        { option: "Nearly every day ", value: 3 },
        { option: "More than half the days ", value: 2 },
        { option: "Several days ", value: 1 },
        { option: "Not at all ", value: 0 }
    ],
    resultMessages,
    calculateScore: (answers: number[]) => {
        let totalScore = answers.reduce((acc, curr) => acc + curr, 0);

        let message;
        if (totalScore <= 4) {
            message = resultMessages[0].message;
        } else if (totalScore <= 9) {
            message = resultMessages[1].message;
        } else if (totalScore <= 14) {
            message = resultMessages[2].message;
        } else {
            message = resultMessages[3].message;
        }

        return `GAD 7 – Generalized Anxiety Disorder Test Score = ${totalScore}. ${message}`;
    },
};

export default testData;
