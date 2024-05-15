import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';

const quizImage = require('../../assets/btrfly-logo.jpg');

const Quiz = () => {
        return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.headerText}>Assessments</Text>
                    <Image source={quizImage} style={styles.headerImage} />
                </View>
            </View>
            <View style={styles.buttonContainer}>
            {quizButtons.map((button, index) => (
                <Pressable
                key={index}
                onPress={() => router.push(`/quiz/${button.route}`)}
                style={({ pressed }) => [
                    styles.button,
                    { backgroundColor: pressed ? '#E8A133' : 'rgb(60 84 103)' },
                ]}
                >
                <Text style={styles.buttonText}>{button.text}</Text>
                </Pressable>
            ))}
            </View>
            <Text style={[styles.disclaimer, { marginBottom: 60,width:350 }]}>Disclaimer: This tool should NOT be considered as a substitute for any professional medical service, NOR as a substitute for clinical judgment.</Text>
        </View>
        );
    };

    const quizButtons = [
        { text: 'Mental Health Quiz', route: 'mhq' },
        { text: 'Self-Esteem Test', route: 'set' },
        { text: 'Anxiety Test', route: 'at' },
        { text: 'Depression Test', route: 'dt' },
        { text: 'Mood Disorder Test', route: 'mdt' },
    ];

const styles = StyleSheet.create({
    disclaimer: {
        fontSize: 12,
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '500',
    },
    container: {
        flex: 1,
        backgroundColor: '#F0ede9', 
        alignItems: 'center',
        justifyContent: 'flex-start', 
    },
    header: {
        backgroundColor: '#162238', 
        width: '100%',
        paddingVertical: 30, 
        alignItems: 'center',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 28, 
        fontWeight: 'bold',
        color: 'white',
    },
    headerImage: {
        width: 40, 
        height: 40, 
        marginLeft: 10,
    },
    buttonContainer: {
        marginTop: 30, 
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
});

export default Quiz;
