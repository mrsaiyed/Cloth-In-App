import { useRouter } from 'expo-router';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { db } from '../firebase/config';

const questions = [
  {
    id: 'style',
    question: 'What style are you into?',
    options: ['Masculine', 'Feminine', 'Gender-Neutral'],
  },
  {
    id: 'categories',
    question: 'What product categories would you like to explore?',
    options: ['Clothing', 'Skincare', 'Makeup', 'Jewelry', 'Tech/Gadgets', 'Home Decor', 'Fitness Gear', 'Sustainable Products', 'Budget Finds'],
  },
  {
    id: 'budget',
    question: 'What’s your typical budget for products?',
    options: ['Budget-Friendly ($0–$50)', 'Mid-Range ($50–$150)', 'Premium ($150–$500)', 'Luxury ($500+)'],
  },
  {
    id: 'brands',
    question: 'Do you prefer specific brands or discovering new ones?',
    options: ['Stick to Favorites', 'Love New Brands'],
  },
  {
    id: 'discovery',
    question: 'How do you prefer to discover products?',
    options: ['Direct Product Listings', 'Pictures and Videos Featuring Products'],
  }
];

export default function Survey() {
  const [currentIndex, setCurrentIndex] = useState(-1); // Start at -1 to show intro
  const [responses, setResponses] = useState({});
  const router = useRouter();

  const toggleOption = (option) => {
    const q = questions[currentIndex];
    const prev = responses[q.id] || [];
    if (prev.includes(option)) {
      setResponses({ ...responses, [q.id]: prev.filter(o => o !== option) });
    } else {
      setResponses({ ...responses, [q.id]: [...prev, option] });
    }
  };

  const skipQuestion = () => {
    nextQuestion();
  };

  const nextQuestion = async () => {
    if (currentIndex + 1 >= questions.length) {
      const user = getAuth().currentUser;
      if (user) {
        await setDoc(doc(db, 'surveyResponses', user.uid), responses);
      }
      router.replace('/home');
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (currentIndex === -1) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Let’s personalize your experience</Text>
        <Text style={styles.subtitle}>This short quiz helps tailor your For You page. You can skip any question!</Text>
        <TouchableOpacity style={styles.button} onPress={nextQuestion}>
          <Text style={styles.buttonText}>Start Survey</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const q = questions[currentIndex];
  const selected = responses[q.id] || [];
  const progress = ((currentIndex + 1) / questions.length) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.question}>{q.question}</Text>
      <ScrollView>
        {q.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.option, selected.includes(option) && styles.optionSelected]}
            onPress={() => toggleOption(option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={skipQuestion}><Text style={styles.skip}>Skip</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={nextQuestion}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 24,
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 16,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#000',
    borderRadius: 4,
  },
  option: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  optionSelected: {
    backgroundColor: '#000',
  },
  optionText: {
    color: '#000',
  },
  skip: {
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
