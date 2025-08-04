import { useRouter } from 'expo-router';
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import bgPattern from '../../assets/images/login-bg.png';

export default function Welcome() {
  const router = useRouter();

  return (
    <ImageBackground
      source={bgPattern}
      resizeMode="repeat"
      style={styles.background}
      imageStyle={{ opacity: 0.07 }}
    >
      <View style={styles.container}>
        {/* Header / Title */}
        <View style={styles.header}>
          <Text style={styles.title}>Cloth-In</Text>
        </View>

        {/* Slogan */}
        <View style={styles.sloganContainer}>
          <Text style={styles.slogan}>Discover</Text>
          <Text style={styles.slogan}>
            <Text style={styles.bold}>Real</Text> Looks.
          </Text>
          <Text style={styles.slogan}>
            <Text style={styles.bold}>Real</Text> People.
          </Text>
          <Text style={styles.slogan}>
            <Text style={styles.bold}>Real</Text> You.
          </Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => router.push('/auth/signup')}
          >
            <Text style={[styles.buttonText, styles.whiteText]}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => router.push('/auth/login')}
          >
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 48,
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'center',
    marginTop: 16,
    flex: 1,
  },
  title: {
    marginTop: 75,
    fontSize: 50,
    fontWeight: 'bold',
  },
  sloganContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 2,
    paddingBottom: 0,
    gap: 8,
  },
  slogan: {
    fontSize: 25,
    color: '#444',
  },
  bold: {
    fontWeight: 'bold',
    color: '#000',
  },
  buttonContainer: {
    gap: 16,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button: {
    width: '100%',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#000',
  },
  secondaryButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  whiteText: {
    color: '#fff',
  },
});