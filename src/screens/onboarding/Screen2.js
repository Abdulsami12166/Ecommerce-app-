import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { cybersaveColors, cybersaveTypography } from '../../theme/cybersave';

const OnboardingDots = () => (
  <View style={styles.dotsRow}>
    <View style={styles.dot} />
    <View style={[styles.dot, styles.dotActive]} />
    <View style={styles.dot} />
  </View>
);

const ServicesIllustration = ({ animatedStyle }) => (
  <Animated.View style={[styles.illustration, animatedStyle]}>
    <View style={styles.shadowOval} />
    <View style={styles.phoneShell}>
      <View style={styles.phoneTop} />
      <View style={styles.phoneScreen}>
        <View style={styles.shieldOuter}>
          <View style={styles.shieldInner}>
            <MaterialCommunityIcons name="lock" size={35} color="#1F2D55" />
          </View>
        </View>
        <MaterialCommunityIcons name="heart-outline" size={32} color="#FFFFFF" style={styles.heartIcon} />
      </View>
    </View>

    <View style={[styles.docCard, styles.aadhaarCard]}>
      <MaterialCommunityIcons name="fingerprint" size={36} color="#FF7E18" />
      <View style={styles.aadhaarLine} />
      <View style={styles.cardPin} />
    </View>

    <View style={[styles.docCard, styles.panCard]}>
      <Text style={styles.panTitle}>PAN card</Text>
      <View style={styles.panLineWide} />
      <View style={styles.panLine} />
    </View>

    <View style={[styles.docCard, styles.profileCard]}>
      <View style={styles.plusCircle}>
        <Text style={styles.plusText}>+</Text>
      </View>
      <MaterialCommunityIcons name="account" size={31} color="#7386B3" />
    </View>
  </Animated.View>
);

const Screen2 = ({ navigation }) => {
  const artOpacity = useRef(new Animated.Value(0)).current;
  const artTranslate = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(artOpacity, {
        toValue: 1,
        duration: 620,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.spring(artTranslate, {
        toValue: 0,
        friction: 8,
        tension: 56,
        useNativeDriver: true,
      }),
    ]).start();
  }, [artOpacity, artTranslate]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={cybersaveColors.white} barStyle="dark-content" />
      <View style={styles.content}>
        <TouchableOpacity style={styles.skipHit} onPress={() => navigation.replace('Login')} activeOpacity={0.72}>
          <Text style={styles.skip}>Skip</Text>
        </TouchableOpacity>

        <View style={styles.headerBlock}>
          <Text style={styles.heading}>All Services in One Place</Text>
          <Text style={styles.description}>Aadhaar, PAN, Certificates, Bills, Banking &amp; more. Safe digital storage for daily life.</Text>
        </View>

        <ServicesIllustration
          animatedStyle={{
            opacity: artOpacity,
            transform: [{ translateY: artTranslate }],
          }}
        />

        <OnboardingDots />

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Screen3')} activeOpacity={0.86}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cybersaveColors.white },
  content: { flex: 1, paddingHorizontal: 20 },
  skipHit: { alignSelf: 'flex-end', marginTop: 15, paddingHorizontal: 5, paddingVertical: 6 },
  skip: { color: cybersaveColors.blue, fontSize: 14, fontWeight: '700' },
  headerBlock: { marginTop: 40, alignItems: 'center' },
  heading: { ...cybersaveTypography.heading, color: cybersaveColors.ink, textAlign: 'center' },
  description: { ...cybersaveTypography.body, marginTop: 14, maxWidth: 292, color: cybersaveColors.muted, textAlign: 'center' },
  illustration: { alignSelf: 'center', width: 300, height: 286, marginTop: 54 },
  shadowOval: { position: 'absolute', left: 67, bottom: 16, width: 164, height: 14, borderRadius: 82, backgroundColor: 'rgba(40,75,128,0.11)' },
  phoneShell: { position: 'absolute', left: 104, top: 21, width: 118, height: 221, borderRadius: 21, backgroundColor: '#1358AE', borderWidth: 5, borderColor: '#96BEEE', shadowColor: '#376EA9', shadowOpacity: 0.35, shadowRadius: 12, shadowOffset: { width: 0, height: 10 }, elevation: 7, transform: [{ rotate: '8deg' }] },
  phoneTop: { position: 'absolute', top: 6, left: 34, width: 48, height: 8, borderRadius: 7, backgroundColor: '#0D2C5F', zIndex: 3 },
  phoneScreen: { flex: 1, borderRadius: 16, backgroundColor: '#0D5BB6', alignItems: 'center', justifyContent: 'center' },
  shieldOuter: { width: 78, height: 91, borderRadius: 31, backgroundColor: '#F2B12F', alignItems: 'center', justifyContent: 'center', borderWidth: 4, borderColor: '#FFE08A' },
  shieldInner: { width: 59, height: 70, borderRadius: 26, backgroundColor: '#FFD04D', alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#FFF1B8' },
  heartIcon: { position: 'absolute', bottom: 35 },
  docCard: { position: 'absolute', backgroundColor: '#FFFFFF', borderRadius: 8, shadowColor: '#9FB3D1', shadowOpacity: 0.34, shadowRadius: 12, shadowOffset: { width: 0, height: 7 }, elevation: 5, borderWidth: 1, borderColor: '#EDF3FA' },
  aadhaarCard: { left: 44, top: 68, width: 63, height: 57, alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '-2deg' }] },
  aadhaarLine: { width: 28, height: 4, borderRadius: 2, backgroundColor: '#19C67A', marginTop: 3 },
  cardPin: { position: 'absolute', top: 6, right: 7, width: 5, height: 5, borderRadius: 3, backgroundColor: '#FFB84D' },
  panCard: { left: 43, bottom: 62, width: 69, height: 42, padding: 7, transform: [{ rotate: '6deg' }] },
  panTitle: { color: '#24436F', fontSize: 8, fontWeight: '700' },
  panLineWide: { marginTop: 8, width: 48, height: 4, borderRadius: 2, backgroundColor: '#7D9CC9' },
  panLine: { marginTop: 5, width: 35, height: 4, borderRadius: 2, backgroundColor: '#B6C7DF' },
  profileCard: { right: 39, bottom: 52, width: 59, height: 59, alignItems: 'center', justifyContent: 'center', transform: [{ rotate: '4deg' }] },
  plusCircle: { position: 'absolute', right: 5, top: 5, width: 14, height: 14, borderRadius: 7, backgroundColor: '#648CE0', alignItems: 'center', justifyContent: 'center' },
  plusText: { color: '#FFFFFF', fontSize: 12, lineHeight: 13, fontWeight: '800' },
  dotsRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 27 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: cybersaveColors.dot, marginHorizontal: 4 },
  dotActive: { width: 19, height: 6, backgroundColor: cybersaveColors.blue },
  nextButton: { position: 'absolute', left: 20, right: 20, bottom: 112, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: cybersaveColors.blueDeep, shadowColor: '#1E55C8', shadowOpacity: 0.22, shadowOffset: { width: 0, height: 8 }, shadowRadius: 14, elevation: 4 },
  nextText: { ...cybersaveTypography.button, color: '#FFFFFF' },
});

export default Screen2;
