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
    <View style={styles.dot} />
    <View style={[styles.dot, styles.dotActive]} />
  </View>
);

const SecureIllustration = ({ animatedStyle }) => (
  <Animated.View style={[styles.illustration, animatedStyle]}>
    <View style={styles.shadowBase} />
    <View style={styles.orbitBack} />
    <View style={styles.orbitFront} />

    <View style={[styles.currencyBubble, styles.rupeeLeft]}>
      <Text style={styles.currencyText}>{'\u20B9'}</Text>
    </View>
    <View style={[styles.currencyBubble, styles.rupeeTop]}>
      <Text style={styles.currencyText}>{'\u20B9'}</Text>
    </View>
    <View style={[styles.currencyBubble, styles.bankTop]}>
      <MaterialCommunityIcons name="bank" color="#FFFFFF" size={17} />
    </View>
    <View style={[styles.lockBubble, styles.lockTopRight]}>
      <MaterialCommunityIcons name="lock" color="#FFFFFF" size={28} />
    </View>
    <View style={[styles.smallLock, styles.lockLeft]} />
    <View style={[styles.smallLock, styles.lockRight]} />

    <View style={styles.safeBody}>
      <View style={styles.safeTop} />
      <View style={styles.safeHighlight} />
      <View style={styles.safeDoor}>
        <View style={styles.safeHandleOuter}>
          <View style={styles.safeHandleInner} />
          <View style={styles.safeHandleBlade} />
        </View>
      </View>
      <View style={styles.safeHinge} />
    </View>
    <View style={styles.safeLid}>
      <View style={styles.lidInner}>
        <MaterialCommunityIcons name="format-list-bulleted" color="#FFFFFF" size={30} />
      </View>
    </View>
  </Animated.View>
);

const Screen3 = ({ navigation }) => {
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
        <View style={styles.headerBlock}>
          <Text style={styles.heading}>Safe &amp; Secure</Text>
          <Text style={styles.description}>Bank-grade encryption protects your documents and personal identity data.</Text>
        </View>

        <SecureIllustration
          animatedStyle={{
            opacity: artOpacity,
            transform: [{ translateY: artTranslate }],
          }}
        />

        <OnboardingDots />

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Language')} activeOpacity={0.86}>
          <Text style={styles.nextText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: cybersaveColors.white },
  content: { flex: 1, paddingHorizontal: 20 },
  headerBlock: { marginTop: 85, alignItems: 'center' },
  heading: { ...cybersaveTypography.heading, color: cybersaveColors.ink, textAlign: 'center' },
  description: { ...cybersaveTypography.body, marginTop: 15, maxWidth: 288, color: cybersaveColors.muted, textAlign: 'center' },
  illustration: { alignSelf: 'center', width: 300, height: 306, marginTop: 42 },
  shadowBase: { position: 'absolute', left: 48, bottom: 29, width: 205, height: 50, borderRadius: 102, backgroundColor: '#DDE8F7' },
  orbitBack: { position: 'absolute', left: 42, top: 74, width: 216, height: 139, borderWidth: 1, borderColor: '#8FB9F2', borderStyle: 'dashed', borderRadius: 100, transform: [{ rotate: '-11deg' }] },
  orbitFront: { position: 'absolute', left: 35, top: 97, width: 232, height: 112, borderWidth: 1, borderColor: '#8FB9F2', borderStyle: 'dashed', borderRadius: 100, transform: [{ rotate: '10deg' }] },
  currencyBubble: { position: 'absolute', width: 33, height: 33, borderRadius: 17, backgroundColor: '#3F91E8', alignItems: 'center', justifyContent: 'center', shadowColor: '#3F91E8', shadowOpacity: 0.25, shadowRadius: 8, shadowOffset: { width: 0, height: 5 }, elevation: 4 },
  currencyText: { color: '#FFFFFF', fontSize: 21, fontWeight: '900' },
  rupeeLeft: { left: 54, top: 126 },
  rupeeTop: { left: 112, top: 60, width: 25, height: 25, borderRadius: 13 },
  bankTop: { right: 82, top: 58, width: 27, height: 27, borderRadius: 14 },
  lockBubble: { position: 'absolute', width: 49, height: 57, borderRadius: 10, backgroundColor: '#F4A33B', alignItems: 'center', justifyContent: 'center', shadowColor: '#E28D20', shadowOpacity: 0.28, shadowRadius: 8, shadowOffset: { width: 0, height: 5 }, elevation: 5 },
  lockTopRight: { right: 50, top: 94 },
  smallLock: { position: 'absolute', width: 16, height: 19, borderRadius: 3, backgroundColor: '#DD8D22' },
  lockLeft: { left: 44, top: 171 },
  lockRight: { right: 35, top: 172 },
  safeBody: { position: 'absolute', left: 75, bottom: 53, width: 151, height: 117, borderRadius: 20, backgroundColor: '#2F83E6', overflow: 'hidden', borderWidth: 2, borderColor: '#74B6FF' },
  safeTop: { position: 'absolute', left: -6, right: -6, top: -15, height: 38, borderRadius: 32, backgroundColor: '#72BAFF' },
  safeHighlight: { position: 'absolute', left: 14, top: 31, width: 120, height: 18, borderRadius: 10, backgroundColor: 'rgba(255,255,255,0.18)' },
  safeDoor: { position: 'absolute', left: 28, bottom: 20, width: 49, height: 54, borderRadius: 25, backgroundColor: '#246BC9', alignItems: 'center', justifyContent: 'center', borderWidth: 3, borderColor: '#6FAEFF' },
  safeHandleOuter: { width: 38, height: 38, borderRadius: 19, backgroundColor: '#26589F', alignItems: 'center', justifyContent: 'center', borderWidth: 4, borderColor: '#A8CDFB' },
  safeHandleInner: { width: 15, height: 15, borderRadius: 8, backgroundColor: '#4D91E5' },
  safeHandleBlade: { position: 'absolute', width: 38, height: 5, borderRadius: 3, backgroundColor: '#B9D8FE', transform: [{ rotate: '4deg' }] },
  safeHinge: { position: 'absolute', right: 28, bottom: 24, width: 10, height: 65, borderRadius: 5, backgroundColor: '#2772D0', borderWidth: 1, borderColor: '#69A6EF' },
  safeLid: { position: 'absolute', left: 122, top: 73, width: 58, height: 58, borderRadius: 29, backgroundColor: '#C4DBFA', alignItems: 'center', justifyContent: 'center', shadowColor: '#3C7BD7', shadowOpacity: 0.3, shadowRadius: 10, shadowOffset: { width: 0, height: 5 }, elevation: 5 },
  lidInner: { width: 43, height: 43, borderRadius: 22, backgroundColor: '#4D8FE5', alignItems: 'center', justifyContent: 'center' },
  dotsRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 22 },
  dot: { width: 7, height: 7, borderRadius: 4, backgroundColor: cybersaveColors.dot, marginHorizontal: 4 },
  dotActive: { width: 20, height: 6, backgroundColor: cybersaveColors.blue },
  nextButton: { position: 'absolute', left: 20, right: 20, bottom: 112, height: 48, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: cybersaveColors.blue, shadowColor: '#1E55C8', shadowOpacity: 0.22, shadowOffset: { width: 0, height: 8 }, shadowRadius: 14, elevation: 4 },
  nextText: { ...cybersaveTypography.button, color: '#FFFFFF' },
});

export default Screen3;




