import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';


const quizImage = require('../../../assets/btrfly-logo.jpg');

const Mhq = () => {
    return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Mental Health Quiz</Text>
                    <Image source={quizImage} style={styles.headerImage} />
                </View>
            </View>
            <View style={styles.container2}>
            <Text style={styles.title}>About the mental health test</Text>
            <Text style={styles.sectionTitle}>Purpose:</Text>
            <Text style={styles.sectionText}>
                This mental health assessment offers a comprehensive evaluation of an individual’s well-being, focusing on emotional stability, stress resilience, social connections, and overall satisfaction with life. It’s designed to provide a broad perspective on mental health, encouraging self-reflection and proactive engagement with personal well-being.
            </Text>
            <Text style={styles.sectionTitle}>Background:</Text>
            <Text style={styles.sectionText}>
                This tool is the result of collaboration among mental health professionals, incorporating established psychological metrics and research to ensure its effectiveness and reliability. It’s crafted to be inclusive, catering to a diverse audience seeking insights into their mental health.
            </Text>
            <Text style={styles.sectionTitle}>Time Frame for Responses:</Text>
            <Text style={styles.sectionText}>
                Individuals are encouraged to reflect on their experiences and state of mind over the past two weeks when responding to the mental health assessment questions.
            </Text>
            </View>
            <View style={styles.buttonContainer}>
            <Pressable
                
                onPress={() => router.push(`/quiz/mhq/testscreen`)}
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
        alignItems: 'center',
        marginBottom: 40,
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

export default Mhq;