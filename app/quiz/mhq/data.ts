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
        // Your result messages here
        { message: "Very low mental well-being; it's crucial to seek professional guidance to address your mental health and find ways to improve your overall well-being." },
        { message: "Lower mental well-being; you may frequently encounter difficulties or feel a lack of fulfillment and support. Exploring strategies to enhance your mental health could be beneficial." },
        { message: "Moderate mental well-being; you have many positive experiences but also some challenges. There might be areas where you could seek improvement or support." },
        { message: "High mental well-being; you generally experience positive emotions, feel engaged in life, and have strong coping mechanisms and support." },
    ];
    
    const testData: TestData = {
        name: "Mental Health Quiz",
        questions: [
        "How often do you feel happy?",
        "Do you feel capable of handling personal problems?",
        "How often do you feel nervous or anxious?",
        "Do you feel confident about your abilities?",
        "How often do you feel down, depressed, or hopeless?",
        "Do you feel you have a lot of energy?",
        "How often do you feel overwhelmed by your responsibilities?",
        "Do you feel you are able to relax and handle stress well?",
        "How often do you feel optimistic about your future?",
        "Do you feel valued and respected by others?",
        "How often do you feel that you have someone to turn to for support when needed?",
        "Do you feel engaged and interested in your daily activities?",
        "How often do you feel that your life has a sense of direction or meaning?",
        "Do you feel able to cope when things go wrong?",
        "How often do you feel grateful for the things in your life?"
        ],
        answerOptions: [
        { option: "Almost always", value: 4 },
        { option: "Often ", value: 3 },
        { option: "Sometimes ", value: 2 },
        { option: "Rarely ", value: 1 },
        { option: "Almost never", value: 0 }
        ],
        resultMessages,
        calculateScore: (answers: number[]) => {
        // Calculate total score based on answer values
        let totalScore = answers.reduce((acc, curr) => acc + curr, 0);
    
        // Determine result message based on score
        let message;
        if (totalScore <= 15) {
            message = resultMessages[0].message;
        } else if (totalScore <= 30) {
            message = resultMessages[1].message;
        } else if (totalScore <= 45) {
            message = resultMessages[2].message;
        } else {
            message = resultMessages[3].message;
        }
    
        return `Your mental well-being score is ${totalScore}. ${message}`;
        },
    };
    
    export default testData;