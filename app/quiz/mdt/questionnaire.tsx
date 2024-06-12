import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, ScrollView, Linking } from 'react-native';
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
                <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <View style={styles.resultContainer}>
                    <Text style={[styles.resultText, { marginBottom: 20 }]}>{score}</Text>
                    <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Next Steps</Text>
                            <Text style={styles.nextStepsText}>
                            Thanks for completing your assessment. Take a moment to review the results, which offer insights into your current situation based on your responses. Remember, this test is a preliminary tool and not a substitute for professional diagnosis. If the results indicate potential concerns, it's advisable to consult with an online therapist who can provide a more in-depth assessment and discuss appropriate next steps or treatment options.
                            </Text>
                    </View>
                        {/* Resources section */}
                        <View style={styles.sectionContainer}>
                        <Text style={styles.nextStepsText}>As a BetterHelp affiliate, we will receive compensation from BetterHelp if you purchase products or services through the links provided on this page.</Text>
                        </View>
                        <View style={styles.sectionContainer}>
                            <Text style={styles.sectionTitle}>Resources</Text>
                            {/* Buttons or Pressables for resources */}
                            <Pressable
                                onPress={() => {
                                    Linking.openURL('https://betterhelp.com/therapyhelpers');
                                }}
                                style={({ pressed }) => [
                                    styles.resourceLink,
                                    { backgroundColor: pressed ? '#E8A133' : 'transparent' },
                                ]}
                            >
                                <View>
                                    <Text style={styles.adtag}>#Ad</Text>
                                    <Text style={styles.resourceLinkTitle}>BetterHelp</Text>
                                    <Text style={styles.resourceLinkDescription}>Professional online counseling with a licensed therapist</Text>
                                </View>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    Linking.openURL('https://therapyhelpers.com/blog/your-guide-to-online-therapy-consultation-what-to-expect-during-your-first-online-therapy-session/');
                                }}
                                style={({ pressed }) => [
                                    styles.resourceLink,
                                    { backgroundColor: pressed ? '#E8A133' : 'transparent' },
                                ]}
                            >
                                <View>
                                    <Text style={styles.resourceLinkTitle}>Therapy Helpers</Text>
                                    <Text style={styles.resourceLinkDescription}>Your Guide to Online Therapy: What to Expect?</Text>
                                </View>
                            </Pressable>
                    </View>
                        
                    <Pressable
                        onPress={() => router.back()}
                        style={({ pressed }) => [
                            styles.goBackButton,
                            { backgroundColor: pressed ? '#E8A133' : 'rgb(60 84 103)' },
                        ]}
                        >
                        <Text style={styles.GBbuttonText}>Go Back</Text>
                    </Pressable>
                    <Text style={[styles.disclaimer, { marginBottom: 30 }]}>Disclaimer: This tool should NOT be considered as a substitute for any professional medical service, NOR as a substitute for clinical judgment.</Text>
                </View>
                </ScrollView>
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
    adtag:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',

    },
    resourceLink: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'rgb(60, 84, 103)',
        borderTopWidth:1,
    },

    resourceLinkTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
    },
    
    resourceLinkDescription: {
        fontSize: 16,
        color: 'black',
        textAlign: 'left',
    },
    nextStepsText: {
        fontSize: 20,
        borderRadius: 10, 
        padding: 10, 
        },
    scrollViewContainer: {
        flexGrow: 1,
    },
    sectionContainer: {
        marginVertical: 20,
        padding: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: 10, 
        elevation: 5, 
        shadowColor: 'black', 
        shadowOpacity: 0.3, 
        shadowRadius: 5, 
        shadowOffset: { width: 0, height: 2 }, 
        marginHorizontal: 10,
        },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        padding: 10,
    },
    resourceButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resourceButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    resourceButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
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
        borderColor: 'blue', 
        shadowColor: 'blue', 
        shadowOffset: { width: 0, height: 2 }, 
        shadowOpacity: 0.5, 
        shadowRadius: 3, 
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
        backgroundColor: 'rgb(60 84 103)', 
        width: 250, 
        paddingVertical: 15, 
        borderRadius: 30, 
        marginBottom: 30, 
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
        marginBottom: 20,
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