import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';


const quizImage = require('../../../assets/btrfly-logo.jpg');

const dt = () => {
    return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Mood Disorder Test</Text>
                    <Image source={quizImage} style={styles.headerImage} />
                </View>
            </View>
            <View style={styles.container2}>
            <Text style={styles.title}>About Bipolar Disorder</Text>
            <Text style={styles.sectionTitle}>Overview of the MDQ:</Text>
            <Text style={styles.sectionText}>
                The Mood Disorder Questionnaire (MDQ) is a specialized screening instrument designed to identify signs indicative of bipolar disorder, assisting in the evaluation of bipolar spectrum disorders such as bipolar I, bipolar II, and cyclothymia.
            </Text>
            <Text style={styles.sectionTitle}>What is Bipolar Disorder?</Text>
            <Text style={styles.sectionText}>
                Bipolar disorder is identified as a mental health condition where individuals experience significant fluctuations in mood, oscillating between manic episodes (highs) and periods of depression (lows), occasionally accompanied by psychotic symptoms.
            </Text>
            <Text style={styles.sectionTitle}>Structure of the MDQ:</Text>
            <View style={styles.bulletList}>
                <View style={styles.bulletListItem}>
                    <View style={styles.bulletIcon} />
                    <Text style={styles.bulletText}>Part I: Consists of 13 questions focusing on the key symptoms commonly associated with bipolar disorder.</Text>
                </View>
                <View style={styles.bulletListItem}>
                    <View style={styles.bulletIcon} />
                    <Text style={styles.bulletText}>Part II: Delves into the individual’s family history concerning mental illness, previous personal mental health diagnoses, and the subjective assessment of the disorder’s impact.</Text>
                </View>
            </View>
            <Text style={styles.sectionTitle}>Completing the MDQ:</Text>
            <Text style={styles.sectionText}>
                The questionnaire is designed for ease of use, typically taking about 5 minutes to complete. It’s crucial for individuals to carefully reflect on each question, striving to provide responses that are both accurate and reflective of their experiences.
            </Text>
        </View>
            <View style={styles.buttonContainer}>
            <Pressable
                
                onPress={() => router.push(`/quiz/mdt/testscreen`)}
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#E8A133' : 'rgb(60 84 103)' },
                ]}
                >
                <Text style={styles.buttonText}>Begin Assesment</Text>
                </Pressable>
            </View>
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    bulletList: {
        marginLeft: 20,
        marginBottom: 10,
    },
    bulletListItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 5,
    },
    bulletIcon: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'black',
        marginRight: 5,
        marginTop: 4, // Adjust this value if needed
    },
    bulletText: {
        flex: 1,
        fontSize: 16,
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    container2: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    sectionText: {
        fontSize: 16,
        marginBottom: 15,
    },

    container: {
        flex: 1,
        backgroundColor: '#F0ede9', // Light yellow background color for the page
        alignItems: 'center',
        justifyContent: 'flex-start', // Align content to the top
    },
    header: {
        backgroundColor: '#162238', // Blue background color for the header
        width: '100%',
        paddingVertical: 30, // Increased padding for the banner
        alignItems: 'center',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28, // Increased font size for the header text
        fontWeight: 'bold',
        color: 'white',
    },
    headerImage: {
        width: 40, // Increased size for the header image
        height: 40, // Increased size for the header image
        marginLeft: 10,
    },
    buttonContainer: {
        marginTop: 10, // Increased spacing between banner and buttons
        alignItems: 'center',
        marginBottom: 30,
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
});

export default dt;