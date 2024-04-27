import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Pressable } from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');
const yourTransparentPng = require('../assets/main.png');

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Image
                source={yourTransparentPng}
                style={styles.transparentImage}
            />
            <View style={styles.content}>
                <Text style={styles.title}>Discover Yourself with Therapy Helper</Text>
                <Text style={[styles.paragraph, styles.centeredText]}>
                    Do you lean towards extroversion or prefer solitude? Are you more intellectually inclined or emotionally perceptive? Can you succeed as an entrepreneur?
                </Text>
                <Text style={[styles.paragraph, styles.centeredText, { marginBottom: 10 }]}>
                    Discover insights into these areas and beyond with Therapy Helper’s online mental health tests & personality quizzes.
                </Text>
                <Text style={[styles.paragraph, styles.centeredText, { marginBottom: 40 }]}>
                    Our assessments, each comprising about 10 to 20 questions, can be finished in roughly 2 minutes.
                </Text>
                <Pressable
                    onPress={() => router.push('/quiz')}
                    style={({ pressed }) => [
                        styles.button,
                        {
                            backgroundColor: pressed ? '#E8A133' : '#F0ede9', // Changes background color on press
                        },
                    ]}
                >
                    <Text style={styles.buttonText}>Get Started</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#162238',
        alignItems: 'center',
        justifyContent: 'center',
    },
    transparentImage: {
        resizeMode: 'contain',
        width: width * 0.9,
        maxHeight: '60%',
        position: 'absolute',
        top: 50,
        opacity: 0.9,
    },
    content: {
        padding: 20,
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    paragraph: {
        color: 'white',
        fontSize: 18,
        marginBottom: 10,
    },
    centeredText: {
        textAlign: 'center',
    },
    button: {
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomePage;
