import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useAppStore } from '../../context/AppContext';
import { authApi } from '../../services/api';
import { cybersaveColors } from '../../theme/cybersave';
import spacing from '../../theme/spacing';

const Login = ({ navigation }) => {
  const { pushActivity } = useAppStore();
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!mail.trim() || !pass.trim()) {
      Alert.alert('Missing details', 'Please enter both email and password.');
      return;
    }

    try {
      setLoading(true);
      const response = await authApi.login({
        email: mail.trim(),
        password: pass,
      });

      pushActivity('Signed in successfully');
      navigation.navigate('OTP', {
        email: response.data?.data?.email || mail.trim(),
        source: 'login',
      });
    } catch (error) {
      Alert.alert(
        'Login failed',
        error?.response?.data?.message || 'Unable to sign in right now.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Access CyberSave securely with your registered account.</Text>
        </View>

        <View style={styles.formBlock}>
          <CustomInput
            label="Email"
            placeholder="example@mail.com"
            value={mail}
            onChangeText={setMail}
          />

          <CustomInput
            label="Password"
            placeholder="Enter password"
            secureTextEntry
            value={pass}
            onChangeText={setPass}
          />

          <TouchableOpacity
            style={styles.inlineAction}
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.inlineText}>Forgot password?</Text>
          </TouchableOpacity>

          <CustomButton
            title="Login"
            onPress={handleLogin}
            loading={loading}
            style={styles.button}
          />

          <View style={styles.orRow}>
            <View style={styles.orLine} />
            <Text style={styles.orText}>or</Text>
            <View style={styles.orLine} />
          </View>

          <TouchableOpacity style={styles.biometricButton} activeOpacity={0.82}>
            <View style={styles.fingerprintCircle}>
              <MaterialCommunityIcons name="fingerprint" color={cybersaveColors.blue} size={42} />
            </View>
            <Text style={styles.biometricText}>Login with Fingerprint / Face ID</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Create Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 58,
    paddingBottom: spacing.xxl,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    color: cybersaveColors.ink,
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    maxWidth: 286,
    color: cybersaveColors.muted,
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
  },
  formBlock: {
    flex: 1,
  },
  inlineAction: {
    alignSelf: 'flex-end',
    marginBottom: spacing.lg,
  },
  inlineText: {
    color: cybersaveColors.blue,
    fontWeight: '700',
  },
  button: {
    marginBottom: 28,
  },
  orRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 27,
  },
  orLine: {
    width: 54,
    height: 1,
    backgroundColor: '#E5ECF5',
  },
  orText: {
    marginHorizontal: 14,
    color: cybersaveColors.muted,
    fontSize: 14,
    fontWeight: '600',
  },
  biometricButton: {
    alignItems: 'center',
    marginBottom: 28,
  },
  fingerprintCircle: {
    width: 78,
    height: 78,
    borderRadius: 39,
    borderWidth: 1.5,
    borderColor: cybersaveColors.blue,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  biometricText: {
    marginTop: 16,
    color: cybersaveColors.blue,
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'center',
  },
  link: {
    textAlign: 'center',
    color: cybersaveColors.blue,
    fontWeight: '800',
  },
});

export default Login;
