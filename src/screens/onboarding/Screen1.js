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
    <View style={[styles.dot, styles.dotActive]} />
    <View style={styles.dot} />
    <View style={styles.dot} />
  </View>
);

const FloatingItem = ({ style, children }) => <View style={[styles.floatingItem, style]}>{children}</View>;

const SecurityIllustration = ({ animatedStyle }) => (
  <Animated.View style={[styles.illustration, animatedStyle]}>
    <View style={styles.orbit} />
    <View style={[styles.node, styles.nodeOne]} />
    <View style={[styles.node, styles.nodeTwo]} />
    <View style={[styles.node, styles.nodeThree]} />

    <FloatingItem style={styles.phoneCard}>
      <View style={styles.phoneScreen}>
        <MaterialCommunityIcons name="fingerprint" color="rgba(255,255,255,0.55)" size={22} />
      </View>
    </FloatingItem>

    <FloatingItem style={styles.searchCard}>
      <MaterialCommunityIcons name="magnify" color="#97A0AD" size={48} />
    </FloatingItem>

    <FloatingItem style={styles.docCard}>
      <View style={styles.docLine} />
      <View style={[styles.docLine, styles.docLineShort]} />
      <Text style={styles.docText}>PAN</Text>
    </FloatingItem>

    <FloatingItem style={styles.smallLockRight}>
      <MaterialCommunityIcons name="lock" color="#6F7C8E" size={24} />
    </FloatingItem>

    <View style={styles.platform} />
    <View style={styles.platformGlow} />
    <View style={styles.globe}>
      <MaterialCommunityIcons name="earth" color="#0D6EF8" size={40} />
    </View>
    <View style={styles.coin} />

    <View style={styles.shieldOuter}>
      <View style={styles.shieldInner}>
        <View style={styles.shieldHighlight} />
        <MaterialCommunityIcons name="lock" color="#FFFFFF" size={34} />
      </View>
    </View>

    <View style={styles.aadhaarBadge}>
      <MaterialCommunityIcons name="fingerprint" color="#FF8B2D" size={25} />
      <Text style={styles.aadhaarText}>AADHAAR</Text>
    </View>

    <View style={styles.penWrap}>
      <View style={styles.penBody} />
      <View style={styles.penTip} />
      <MaterialCommunityIcons name="check" color="#FFFFFF" size={28} style={styles.penCheck} />
    </View>
  </Animated.View>
);

const Screen1 = ({ navigation }) => {
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
          <Text style={styles.heading}>
            Welcome to <Text style={styles.headingBrand}>Cybersave</Text>
          </Text>
          <Text style={styles.description}>Access 500+ central and state government services securely from your phone.</Text>
        </View>

        <SecurityIllustration
          animatedStyle={{
            opacity: artOpacity,
            transform: [{ translateY: artTranslate }],
          }}
        />

        <OnboardingDots />

        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Screen2')} activeOpacity={0.86}>
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cybersaveColors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  skipHit: {
    alignSelf: 'flex-end',
    marginTop: 15,
    paddingHorizontal: 5,
    paddingVertical: 6,
  },
  skip: {
    color: cybersaveColors.blue,
    fontSize: 14,
    fontWeight: '700',
  },
  headerBlock: {
    marginTop: 7,
    alignItems: 'center',
  },
  heading: {
    ...cybersaveTypography.heading,
    color: cybersaveColors.ink,
    textAlign: 'center',
  },
  headingBrand: {
    color: '#0642B7',
  },
  description: {
    ...cybersaveTypography.body,
    marginTop: 13,
    maxWidth: 292,
    color: cybersaveColors.muted,
    textAlign: 'center',
  },
  illustration: {
    alignSelf: 'center',
    width: 300,
    height: 300,
    marginTop: 54,
  },
  orbit: {
    position: 'absolute',
    left: 35,
    top: 45,
    width: 230,
    height: 162,
    borderWidth: 1,
    borderColor: cybersaveColors.line,
    borderStyle: 'dashed',
    borderRadius: 105,
    transform: [{ rotate: '8deg' }],
  },
  node: {
    position: 'absolute',
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#4E9DFF',
  },
  nodeOne: { left: 58, top: 77 },
  nodeTwo: { right: 70, top: 53 },
  nodeThree: { left: 18, top: 142 },
  floatingItem: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    shadowColor: '#AAB8C9',
    shadowOpacity: 0.42,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 5,
  },
  phoneCard: {
    left: 28,
    top: 61,
    width: 42,
    height: 78,
    borderRadius: 8,
    transform: [{ rotate: '-19deg' }],
    backgroundColor: '#286ECE',
    padding: 4,
  },
  phoneScreen: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#2E8CF6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchCard: {
    left: 95,
    top: 35,
    width: 58,
    height: 58,
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
  },
  docCard: {
    right: 22,
    top: 58,
    width: 58,
    height: 52,
    borderRadius: 7,
    transform: [{ rotate: '13deg' }],
    padding: 10,
  },
  docLine: {
    height: 4,
    borderRadius: 2,
    backgroundColor: '#D5E0EE',
    marginBottom: 5,
  },
  docLineShort: {
    width: 28,
  },
  docText: {
    color: '#9AA7B8',
    fontSize: 7,
    fontWeight: '800',
  },
  smallLockRight: {
    right: 5,
    top: 131,
    width: 34,
    height: 47,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  platform: {
    position: 'absolute',
    left: 49,
    bottom: 47,
    width: 202,
    height: 47,
    borderRadius: 100,
    backgroundColor: '#9FD4FF',
    transform: [{ scaleY: 0.72 }],
  },
  platformGlow: {
    position: 'absolute',
    left: 72,
    bottom: 64,
    width: 156,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#5EBCFF',
  },
  globe: {
    position: 'absolute',
    left: 50,
    bottom: 64,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#C5EAFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coin: {
    position: 'absolute',
    left: 142,
    bottom: 63,
    width: 34,
    height: 16,
    borderRadius: 17,
    backgroundColor: '#DFA358',
    borderWidth: 3,
    borderColor: '#F5C271',
  },
  shieldOuter: {
    position: 'absolute',
    left: 103,
    top: 98,
    width: 103,
    height: 118,
    borderRadius: 45,
    backgroundColor: '#4BA8FF',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotate: '-1deg' }],
  },
  shieldInner: {
    width: 88,
    height: 104,
    borderRadius: 38,
    backgroundColor: '#F7A85C',
    borderWidth: 3,
    borderColor: '#FFE3B2',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  shieldHighlight: {
    position: 'absolute',
    left: 10,
    top: 8,
    width: 58,
    height: 88,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.26)',
  },
  aadhaarBadge: {
    position: 'absolute',
    left: 34,
    bottom: 89,
    alignItems: 'center',
  },
  aadhaarText: {
    marginTop: -2,
    color: '#6FA2D4',
    fontSize: 6,
    fontWeight: '800',
  },
  penWrap: {
    position: 'absolute',
    right: 28,
    bottom: 53,
    width: 39,
    height: 94,
    alignItems: 'center',
    transform: [{ rotate: '33deg' }],
  },
  penBody: {
    width: 26,
    height: 76,
    borderRadius: 13,
    backgroundColor: '#6D7F82',
    borderWidth: 4,
    borderColor: '#C9D5D6',
  },
  penTip: {
    width: 20,
    height: 18,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#2D3D42',
  },
  penCheck: {
    position: 'absolute',
    top: 26,
    left: 5,
    transform: [{ rotate: '-33deg' }],
  },
  dotsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: cybersaveColors.dot,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 19,
    height: 6,
    backgroundColor: cybersaveColors.blue,
  },
  nextButton: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 112,
    height: 46,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: cybersaveColors.blue,
    shadowColor: '#1E55C8',
    shadowOpacity: 0.22,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 14,
    elevation: 4,
  },
  nextText: {
    ...cybersaveTypography.button,
    color: '#FFFFFF',
  },
});

export default Screen1;
