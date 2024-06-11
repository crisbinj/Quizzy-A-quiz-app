// components/QuestionCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const QuestionCard = ({ question, options, onOptionPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.questionText}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => onOptionPress(option)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  questionText: {
    fontSize: 18,
    marginBottom: 16,
  },
  optionButton: {
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  optionText: {
    fontSize: 16,
  },
});

export default QuestionCard;
