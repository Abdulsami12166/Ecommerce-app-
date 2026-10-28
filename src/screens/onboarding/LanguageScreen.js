import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { cybersaveColors, cybersaveTypography } from '../../theme/cybersave';

const languages = [
  { id: 'en', native: 'English', label: 'English' },
  { id: 'hi', native: '\u0939\u093F\u0928\u094D\u0926\u0940', label: 'Hindi' },
  { id: 'bn', native: '\u09AC\u09BE\u0982\u09B2\u09BE', label: 'Bengali' },
  { id: 'ta', native: '\u0BA4\u0BAE\u0BBF\u0BB4\u0BCD', label: 'Tamil' },
  { id: 'te', native: '\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41', label: 'Telugu' },
  { id: 'kn', native: '\u0C95\u0CA8\u0CCD\u0CA8\u0CA1', label: 'Kannada' },
  { id: 'ml', native: '\u0D2E\u0D32\u0D2F\u0D3E\u0D33\u0D02', label: 'Malayalam' },
  { id: 'mr', native: '\u092E\u0930\u093E\u0920\u0940', label: 'Marathi' },
  { id: 'gu', native: '\u0A97\u0AC1\u0A9C\u0AB0\u0ABE\u0AA4\u0AC0', label: 'Gujarati' },
  { id: 'pa', native: 'Punjabi', label: 'Punjabi' },
  { id: 'or', native: 'Odia', label: 'Odia' },
  { id: 'as', native: '\u0985\u09B8\u09AE\u09C0\u09AF\u09BC\u09BE', label: 'Assamese' },
];

const LanguageOption = ({ item, selected, onPress }) => (
  <TouchableOpacity
    activeOpacity={0.82}
    onPress={onPress}
    style={[styles.option, selected && styles.optionSelected]}
  >
    <View style={styles.optionCopy}>
      <Text style={[styles.optionNative, selected && styles.optionNativeSelected]} numberOfLines={1}>
        {item.native}
      </Text>
      <Text style={styles.optionLabel} numberOfLines={1}>
        {item.label}
      </Text>
    </View>
    <View style={[styles.radio, selected && styles.radioSelected]}>
      {selected ? <MaterialCommunityIcons name="check" color="#FFFFFF" size={15} /> : null}
    </View>
  </TouchableOpacity>
);

const LanguageScreen = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#2242B6" barStyle="dark-content" />
      <View style={styles.blueTop}>
        <Text style={styles.title}>Choose Your Language</Text>
      </View>
      <View style={styles.panel}>
        <Text style={styles.description}>Select your preferred language to customize the app interface and official services.</Text>
        <View style={styles.grid}>
          {languages.map(item => (
            <LanguageOption
              key={item.id}
              item={item}
              selected={selectedLanguage === item.id}
              onPress={() => setSelectedLanguage(item.id)}
            />
          ))}
        </View>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => navigation.replace('Login')} activeOpacity={0.86}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FA' },
  blueTop: { height: 178, backgroundColor: cybersaveColors.blue, alignItems: 'center', paddingTop: 66 },
  title: { color: '#FFFFFF', fontSize: 16, fontWeight: '800', textAlign: 'center' },
  panel: { position: 'absolute', left: 17, right: 17, top: 98, minHeight: 520, borderRadius: 17, backgroundColor: '#FFFFFF', paddingHorizontal: 17, paddingTop: 24, shadowColor: '#A4B1C3', shadowOpacity: 0.12, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 3 },
  description: { ...cybersaveTypography.body, color: cybersaveColors.muted, marginBottom: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  option: { width: '47.8%', height: 54, borderRadius: 16, borderWidth: 1, borderColor: '#E2E9F2', backgroundColor: '#FFFFFF', paddingLeft: 12, paddingRight: 11, marginBottom: 10, flexDirection: 'row', alignItems: 'center' },
  optionSelected: { borderWidth: 2, borderColor: cybersaveColors.blue },
  optionCopy: { flex: 1, minWidth: 0 },
  optionNative: { color: '#263247', fontSize: 13, fontWeight: '800' },
  optionNativeSelected: { color: '#1B2B49' },
  optionLabel: { marginTop: 4, color: cybersaveColors.muted, fontSize: 11, fontWeight: '500' },
  radio: { width: 20, height: 20, borderRadius: 10, borderWidth: 1, borderColor: '#DFE8F2', alignItems: 'center', justifyContent: 'center', marginLeft: 8 },
  radioSelected: { borderColor: cybersaveColors.blue, backgroundColor: cybersaveColors.blue },
  continueButton: { position: 'absolute', left: 17, right: 17, bottom: 63, height: 46, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: cybersaveColors.blue, shadowColor: '#1E55C8', shadowOpacity: 0.22, shadowOffset: { width: 0, height: 8 }, shadowRadius: 14, elevation: 4 },
  continueText: { ...cybersaveTypography.button, color: '#FFFFFF' },
});

export default LanguageScreen;


