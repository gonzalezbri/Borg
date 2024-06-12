import React from 'react';
import { View, Text, Image, StyleSheet, Pressable,ScrollView } from 'react-native';
import { router } from 'expo-router';


const quizImage = require('../../../assets/btrfly-logo.jpg');

const At = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Anxiety Test</Text>
                    <Image source={quizImage} style={styles.headerImage} />
                </View>
            </View>
            <View style={styles.container2}>
            <Text style={styles.title}>About the Generalized Anxiety Disorder Test (GAD-7)</Text>
            <Text style={styles.sectionTitle}>Purpose:</Text>
            <Text style={styles.sectionText}>
                This simple questionnaire assesses the severity of the most common seven anxious disorder symptoms.
            </Text>
            <Text style={styles.sectionTitle}>Background:</Text>
            <Text style={styles.sectionText}>
                Generalized Anxiety Disorder (GAD) is a chronic condition marked by excessive, uncontrollable worry about daily life, impacting various aspects of functioning.
            </Text>
            <Text style={styles.sectionTitle}>Time Frame for Responses:</Text>
            <Text style={styles.sectionText}>
                Individuals are encouraged to reflect on their experiences and state of mind over the past two weeks when responding to the GAD-7 questions.
            </Text>
        </View>
            <View style={styles.buttonContainer}>
            <Pressable
                
                onPress={() => router.push(`/quiz/at/testscreen`)}
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
    scrollViewContainer: {
        flexGrow: 1,
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
});

export default At;