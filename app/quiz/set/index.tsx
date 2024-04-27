import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';


const quizImage = require('../../../assets/btrfly-logo.jpg');

const Sett = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Self-Esteem Test</Text>
                    <Image source={quizImage} style={styles.headerImage} />
                </View>
            </View>
            <View style={styles.container2}>
            <Text style={styles.title}>About the Self-Esteem Test</Text>
            <Text style={styles.sectionTitle}>Purpose:</Text>
            <Text style={styles.sectionText}>
                This scale assesses feelings of self-esteem by utilizing the Rosenberg Self-Esteem (RSE) Scale, which evaluates both positive and negative self-perceptions.
            </Text>
            <Text style={styles.sectionTitle}>Background:</Text>
            <Text style={styles.sectionText}>
            Created by sociologist Morris Rosenberg in 1965, the scale’s development involved data from 5,024 adolescents across 10 randomly chosen schools in New York State. It is now a commonly employed measure of self-esteem in the field of social science research.
            </Text>
            <Text style={styles.sectionTitle}>Time Frame for Responses:</Text>
            <Text style={styles.sectionText}>
            Individuals are encouraged to reflect on their experiences and state of mind over the past two weeks when responding to the Self-Esteem questions.
            </Text>
        </View>
            <View style={styles.buttonContainer}>
            <Pressable
                
                onPress={() => router.push(`/quiz/set/testscreen`)}
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#E8A133' : 'rgb(60 84 103)' },
                ]}
                >
                <Text style={styles.buttonText}>Begin Assesment</Text>
                </Pressable>
            </View>
        </View>
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

export default Sett;