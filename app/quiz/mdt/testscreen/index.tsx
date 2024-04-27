import React from 'react';
import Questionnaire from '../questionnaire';
import testData from '../data';

const MyTestScreen = () => {
    const submitAnswer = (answers: number[]) => {
        console.log("Submitted answers:", answers);
    };

    return (
        <Questionnaire 
            testId="myTestId" // Identifier for this data set
            data={testData}
            onSubmit={submitAnswer}
        />
    );
};

export default MyTestScreen;