import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useAppStore } from '../../context/AppContext';
import { cybersaveColors } from '../../theme/cybersave';

const CyberSaveLogo = ({ animatedStyle }) => (
  <Animated.View style={[styles.logoWrap, animatedStyle]}>
    <View style={styles.logoMarkBox}>
      <View style={styles.pixelCluster}>
        <View style={[styles.pixel, styles.pixelA]} />
        <View style={[styles.pixel, styles.pixelB]} />
        <View style={[styles.pixel, styles.pixelC]} />
        <View style={[styles.pixel, styles.pixelD]} />
        <View style={[styles.pixel, styles.pixelE]} />
        <View style={[styles.pixel, styles.pixelF]} />
        <View style={[styles.pixelSmall, styles.pixelG]} />
        <View style={[styles.pixelSmall, styles.pixelH]} />
      </View>
      <View style={styles.cTopArc} />
      <View style={styles.cBottomArc} />
      <View style={styles.lockShackle} />
      <View style={styles.lockBody}>
        <View style={styles.lockSplit} />
        <View style={styles.keyholeCircle} />
        <View style={styles.keyholeStem} />
      </View>
    </View>
    <Text style={styles.brandText}>Cybersave</Text>
    <View style={styles.taglineRow}>
      <View style={styles.tagLine} />
      <Text style={styles.brandTagline}>DIGITAL SERVICES  {'\u2022'}  TRUSTED ALWAYS</Text>
      <View style={styles.tagLine} />
    </View>
  </Animated.View>
);

const DigitalIndiaChip = () => (
  <View style={styles.digitalChip}>
    <View style={[styles.flagLine, styles.saffron]} />
    <View style={[styles.flagLine, styles.whiteLine]} />
    <View style={[styles.flagLine, styles.green]} />
    <Text style={styles.chipText}>DIGITAL INDIA</Text>
  </View>
);

const SplashScreen = ({ navigation }) => {
  const { authRestoring } = useAppStore();
  const logoScale = useRef(new Animated.Value(0.82)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const contentLift = useRef(new Animated.Value(20)).current;
  const chipOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoOpacity, {
          toValue: 1,
          duration: 560,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.spring(logoScale, {
          toValue: 1,
          friction: 7,
          tension: 64,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(contentLift, {
          toValue: 0,
          duration: 460,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(chipOpacity, {
          toValue: 1,
          duration: 420,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [chipOpacity, contentLift, logoOpacity, logoScale]);

  useEffect(() => {
    if (authRestoring) {
      return undefined;
    }

    const timer = setTimeout(() => {
      navigation.replace('Screen1');
    }, 2400);

    return () => clearTimeout(timer);
  }, [authRestoring, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#EEF3FA" barStyle="dark-content" />
      <View style={styles.gradientTop} />
      <View style={styles.gradientMid} />
      <View style={styles.gradientDeep} />

      <View style={styles.centerWrap}>
        <CyberSaveLogo
          animatedStyle={{
            opacity: logoOpacity,
            transform: [{ scale: logoScale }],
          }}
        />
      </View>

      <Animated.View
        style={[
          styles.bottomContent,
          { opacity: chipOpacity, transform: [{ translateY: contentLift }] },
        ]}
      >
        <Text style={styles.title}>All Government Services, One App</Text>
        <Text style={styles.subtitle}>Ministry of Electronics &amp; IT Initiative</Text>
        <DigitalIndiaChip />
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF3FA',
    overflow: 'hidden',
  },
  gradientTop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#F8FAFF',
  },
  gradientMid: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '72%',
    backgroundColor: '#8198C4',
  },
  gradientDeep: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '43%',
    backgroundColor: '#073485',
  },
  centerWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 76,
  },
  logoWrap: {
    width: 246,
    alignItems: 'center',
  },
  logoMarkBox: {
    width: 156,
    height: 139,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pixelCluster: {
    position: 'absolute',
    left: 4,
    top: 42,
    width: 60,
    height: 72,
  },
  pixel: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 4,
    backgroundColor: '#00A8F7',
    shadowColor: '#003A9F',
    shadowOpacity: 0.22,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  pixelSmall: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 3,
    backgroundColor: '#0075FF',
  },
  pixelA: { left: 26, top: 0, backgroundColor: '#0644BE' },
  pixelB: { left: 40, top: 18, backgroundColor: '#0B86F4' },
  pixelC: { left: 0, top: 30, width: 18, height: 18, backgroundColor: '#00B9FF' },
  pixelD: { left: 31, top: 40, backgroundColor: '#023B9F' },
  pixelE: { left: 50, top: 54, backgroundColor: '#00AEEF' },
  pixelF: { left: 8, top: 62, backgroundColor: '#0644BE' },
  pixelG: { left: 39, top: 71, backgroundColor: '#075DF0' },
  pixelH: { left: 21, top: 80, backgroundColor: '#00B9FF' },
  cTopArc: {
    position: 'absolute',
    top: 6,
    left: 45,
    width: 122,
    height: 79,
    borderTopLeftRadius: 122,
    borderTopRightRadius: 122,
    borderWidth: 25,
    borderBottomWidth: 0,
    borderColor: cybersaveColors.blue,
    transform: [{ rotate: '-12deg' }],
  },
  cBottomArc: {
    position: 'absolute',
    bottom: 8,
    left: 45,
    width: 122,
    height: 79,
    borderBottomLeftRadius: 122,
    borderBottomRightRadius: 122,
    borderWidth: 25,
    borderTopWidth: 0,
    borderColor: '#08A9FF',
    transform: [{ rotate: '12deg' }],
  },
  lockShackle: {
    position: 'absolute',
    top: 46,
    left: 79,
    width: 51,
    height: 49,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderWidth: 7,
    borderBottomWidth: 0,
    borderColor: '#072C89',
  },
  lockBody: {
    position: 'absolute',
    top: 80,
    left: 71,
    width: 68,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#005FFE',
    overflow: 'hidden',
    alignItems: 'center',
  },
  lockSplit: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: 34,
    backgroundColor: '#0A8EFF',
  },
  keyholeCircle: {
    marginTop: 22,
    width: 19,
    height: 19,
    borderRadius: 10,
    backgroundColor: '#001B5F',
  },
  keyholeStem: {
    width: 11,
    height: 22,
    marginTop: -2,
    backgroundColor: '#001B5F',
    transform: [{ skewX: '-8deg' }],
  },
  brandText: {
    marginTop: 0,
    color: '#082D87',
    fontSize: 47,
    fontWeight: '900',
    letterSpacing: 0,
  },
  taglineRow: {
    width: 218,
    marginTop: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tagLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#082D87',
  },
  brandTagline: {
    marginHorizontal: 7,
    color: '#082D87',
    fontSize: 6,
    fontWeight: '800',
    letterSpacing: 1.15,
  },
  bottomContent: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 196,
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    color: 'rgba(255,255,255,0.72)',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
  },
  digitalChip: {
    marginTop: 28,
    width: 145,
    height: 36,
    borderRadius: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  flagLine: {
    width: 12,
    height: 3,
    borderRadius: 2,
    marginRight: 7,
  },
  saffron: { backgroundColor: '#FF9F35' },
  whiteLine: { backgroundColor: '#FFFFFF' },
  green: { backgroundColor: '#168F1B', marginRight: 10 },
  chipText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontWeight: '900',
    letterSpacing: 0.1,
  },
});

export default SplashScreen;

