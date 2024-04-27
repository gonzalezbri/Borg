import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import { TestData, AnswerOption } from './data';
import { router } from 'expo-router';

interface Props {
    testId: string;
    data: TestData;
    onSubmit: (answers: number[]) => void;
}

const Questionnaire: React.FC<Props> = ({ testId, data, onSubmit }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
    const [showResults, setShowResults] = useState(false);

    const ContinueButton = () => {
        const isDisabled = selectedAnswers[currentIndex] === undefined || selectedAnswers[currentIndex] === null;
        return (
            <Pressable
                onPress={handleNext}
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#E8A133' : 'rgb(60 84 103)' },
                ]}
                disabled={isDisabled}
            >
                <Text style={styles.buttonText}>{isDisabled ? "Select an Answer" : "Continue"}</Text>
            </Pressable>
        );
    };

    const handleNext = () => {
        if (selectedAnswers[currentIndex] !== undefined && selectedAnswers[currentIndex] !== null) {
            setCurrentIndex(currentIndex + 1);
        }
        if (currentIndex === data.questions.length - 1) {
            onSubmit(selectedAnswers);
            setShowResults(true);
        }
    };

    const renderQuestion = () => {
        const currentQuestion = data?.questions[currentIndex];
        if (!currentQuestion) {
            return null;
        }
        return (
            <>
                <Text style={styles.question}>{currentQuestion}</Text>
                <View style={styles.answerOptionsContainer}>
                    {data.answerOptions.map((option: AnswerOption, index: number) => (
                        <TouchableOpacity
                            key={option.option}
                            style={[
                                styles.answerContainer,
                                selectedAnswers[currentIndex] === option.value && styles.selectedAnswer // Apply selectedAnswer style if the option is selected
                            ]}
                            onPress={() => handleAnswer(option.value)}
                        >
                            <Text style={styles.answerText}>{option.option}</Text>
                            <RadioButton
                                value={option.value.toString()}
                                status={selectedAnswers[currentIndex] === option.value ? 'checked' : 'unchecked'}
                            />
                        </TouchableOpacity>
                    ))}
                </View>
            </>
        );
    };

    const handleAnswer = (value: number) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentIndex] = value;
        setSelectedAnswers(updatedAnswers);
    };

    const renderResults = () => {
        if (showResults) {
            const score = data.calculateScore(selectedAnswers); // Pass the selected answers
            return (
                <View style={styles.resultContainer}>
                    <Text style={[styles.resultText, { marginBottom: 60 }]}>{score}</Text>
                    <Text style={[styles.disclaimer, { marginBottom: 60 }]}>Disclaimer: This tool should NOT be considered as a substitute for any professional medical service, NOR as a substitute for clinical judgment.</Text>
                    <Pressable
                        onPress={() => router.push(`../`)}
                        style={({ pressed }) => [
                            styles.goBackButton,
                            { backgroundColor: pressed ? '#E8A133' : 'rgb(60 84 103)' },
                        ]}
                        >
                        <Text style={styles.GBbuttonText}>Go Back</Text>
                    </Pressable>
                </View>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {currentIndex < data.questions.length && <Text style={styles.questionTracker}>{currentIndex + 1}/{data.questions.length}</Text>}
            {renderQuestion()}
            {renderResults()}
            {!showResults && <ContinueButton />}
        </View>
    );
};

const styles = StyleSheet.create({
    answerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        backgroundColor: '#fff',
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
        width: '100%',
    }, 
    selectedAnswer: {
        borderColor: 'blue', // Add blue border
        shadowColor: 'blue', // Add blue shadow color
        shadowOffset: { width: 0, height: 2 }, // Adjust shadow offset as needed
        shadowOpacity: 0.5, // Adjust shadow opacity as needed
        shadowRadius: 3, // Adjust shadow radius as needed
        elevation: 5, // Adjust elevation as needed for Android
    },
    continueButton: {
        borderRadius: 10,
        backgroundColor: '#6E8CED',
        paddingVertical: 15,
        paddingHorizontal: 30,
        marginTop: 20,
    },
    buttonContainer: {
        marginTop: 30, // Increased spacing between banner and buttons
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'rgb(60 84 103)', // Light background color for the button
        width: 250, // Increased width for the buttons
        paddingVertical: 15, // Increased padding for the buttons
        borderRadius: 30, // Rounded corners
        marginBottom: 30, // Increased spacing between buttons
        alignItems: 'center',
    },
    buttonText: {
        color:'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    goBackButton: {
        backgroundColor: 'rgb(60 84 103)',
        width: 250,
        paddingVertical: 15,
        borderRadius: 30,
        marginTop: 30,
        alignItems: 'center',
    },
    GBbuttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    testName: {
        marginBottom: 20,
        fontSize: 18,
        fontWeight: 'bold',
    },
    question: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    answerText: {
        fontSize: 20,
        marginRight: 10,
    },
    answerOptionsContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 40,
    },
    resultContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    resultText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    disclaimer: {
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '500',
    },
    questionTracker: {
        position: 'absolute',
        top: 10,
        right: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});


export default Questionnaire;
