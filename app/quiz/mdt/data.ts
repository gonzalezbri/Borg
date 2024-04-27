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
    calculateScore: (answers: number[]) => string; // Fix the calculateScore function signature
}

const resultMessages: ResultMessage[] = [
    { message: "According to the answers provided in the Mood Disorder Questionnaire, the positive screening criteria has been met. The subject should be seen by a medical professional in order to undergo bipolar disorder further evaluations." },
    { message: "According to the answers provided in the Mood Disorder Questionnaire, the positive screening criteria has not been met. If suspicions persist, the subject should be re-evaluated at a later time and the possibility of he/she to be seen by a medical professional should be taken in consideration." }
];

const testData: TestData = {
    name: undefined,
    questions: [
        "you felt so good or so hyper that other people thought you were not your normal self, or you were so hyper that you got into trouble?",
        "you were so irritable that you shouted at people or started fights or arguments?",
        "you felt much more self-confident than usual?",
        "you got much less sleep than usual and found you didn't really miss it?",
        "you were much more talkative or spoke faster than usual?",
        "thoughts raced through your head or you couldn't slow your mind down?",
        "you were so easily distracted by things around you that you had trouble concentrating or staying on track?",
        "you had much more energy than usual?",
        "you were much more active or did many more things than usual?",
        "you were much more social or outgoing than usual; for example, you telephoned friends in the middle of the night?",
        "you were much more interested in sex than usual?",
        "you did things that were unusual for you or that other people might have thought were excessive, foolish, or risky?",
        "spending money got you or your family into trouble?",
        "If you checked YES to more than one of the above, have several of these ever happened during at least a four day period of time?",
        "How much of a problem did any of these cause you -- like being unable to work; having family, money, or legal troubles; getting into arguments or fights?"
    ],
    answerOptions: [
        { option: "Yes ", value: 1 },
        { option: "No ", value: 0 },
    ],
    resultMessages,
    calculateScore: (answers: number[]) => {
        const partIScore = answers.slice(0, 13).reduce((acc, curr) => acc + curr, 0);
        const question14Response = answers[13] || 0;
        const question15Response = answers[14] || 0;

        let message;
        if (partIScore >= 7 && question14Response === 1 && question15Response === 1) {
            message = resultMessages[0].message;
        } else {
            message = resultMessages[1].message;
        }

        return message;
    }
};

export default testData;
