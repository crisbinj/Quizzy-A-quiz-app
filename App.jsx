// App.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import QuestionCard from './QuestionCard';
import StartScreen from './StartScreen';

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      question: 'What is the capital of Spain?',
      options: ['Lisbon', 'Madrid', 'Rome', 'Paris'],
      correctAnswer: 'Madrid',
    },
    {
      question: 'What is the capital of Germany?',
      options: ['Berlin', 'Vienna', 'Prague', 'Zurich'],
      correctAnswer: 'Berlin',
    },
    {
      question: 'What is the capital of Italy?',
      options: ['Venice', 'Rome', 'Florence', 'Milan'],
      correctAnswer: 'Rome',
    },
    {
      question: 'What is the capital of Portugal?',
      options: ['Lisbon', 'Madrid', 'Porto', 'Barcelona'],
      correctAnswer: 'Lisbon',
    },
    {
      question: 'What is the capital of India?',
      options: ['Mumbai', 'Delhi', 'kolkata', 'Himalaya'],
      correctAnswer: 'Delhi',
    },
    // Add more questions as needed
  ];

  const handleOptionPress = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/Quizy.png')} style={styles.logo} />
      {quizStarted ? (
        showResult ? (
          <View style={styles.resultCard}>
            <Text style={styles.resultText}>Quiz Completed!</Text>
            <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>
            <Button title="Restart Quiz" onPress={handleStartQuiz} />
          </View>
        ) : (
          <QuestionCard
            question={questions[currentQuestionIndex].question}
            options={questions[currentQuestionIndex].options}
            onOptionPress={handleOptionPress}
          />
        )
      ) : (
        <StartScreen onStart={handleStartQuiz} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 50, // Added padding to avoid overlap with the status bar
  },
  logo: {
    width: 200,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
  resultCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultText: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center',
  },
});

export default App;
