import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Image,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Agenda from '../components/Agenda';
import { Link } from 'expo-router';
import { colors } from '../theme';

const CARD_WIDTH = 120;
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const cardShadow = Platform.select({
  ios: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
  },
  android: { elevation: 4 },
});

export default function Home() {
  const [breastfeedingPressed, setBreastfeedingPressed] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hora da Ação</Text>

        {/* BOTÕES PRINCIPAIS */}
        <View style={styles.buttonContainer}>
          <Pressable style={({ pressed }) => [styles.mainButton, cardShadow, pressed && styles.mainButtonPressed]}>
            <Link href="/Table" asChild>
              <View style={styles.linkButton}>
                <View style={styles.iconCircle}>
                  <Image source={require('../source/icons/table.png')} style={styles.mainIcon} />
                </View>
              </View>
            </Link>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.mainButton,
              cardShadow,
              breastfeedingPressed && styles.mainButtonCenter,
              pressed && styles.mainButtonPressed,
            ]}
            onPressIn={() => setBreastfeedingPressed(true)}
            onPressOut={() => setBreastfeedingPressed(false)}
          >
            <Link href="/Breastfeeding" asChild>
              <View style={styles.linkButton}>
                <View style={[styles.iconCircle, breastfeedingPressed && styles.iconCircleAccent]}>
                  <Image
                    source={require('../source/icons/breastfeeding.png')}
                    style={styles.centerIcon}
                  />
                </View>
              </View>
            </Link>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.mainButton, cardShadow, pressed && styles.mainButtonPressed]}>
            <Link href="/Baby" asChild>
              <View style={styles.linkButton}>
                <View style={styles.iconCircle}>
                  <Image source={require('../source/icons/baby-line.png')} style={styles.mainIcon} />
                </View>
              </View>
            </Link>
          </Pressable>
        </View>

        {/* CARROSSEL */}
        <View style={styles.utilidadesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
          >
            {[
              { title: 'Fraldas', href: '/Fraudas' },
              { title: 'Mamadeiras', href: '/Mamadeira' },
              { title: 'Sono', href: '/Sono' },
            ].map((item, index) => (
              <Pressable
                key={index}
                style={({ pressed }) => [
                  styles.carouselCard,
                  cardShadow,
                  pressed && styles.utilButtonPressed,
                ]}
              >
                <Link href={item.href} asChild>
                  <View style={styles.carouselLink}>
                    <View style={styles.carouselTextBox}>
                      <Text style={styles.carouselTitle}>{item.title}</Text>
                      <Text style={styles.carouselPlaceholder}>Salvo por último</Text>
                    </View>
                  </View>
                </Link>
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </View>

      <Agenda />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 20,
    alignItems: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 28,
  },

  /* BOTÕES PRINCIPAIS */
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 10,
  },

  mainButton: {
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 16,
    minWidth: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainButtonCenter: {
    backgroundColor: colors.accentLight,
    borderWidth: 2,
    borderColor: colors.accent,
  },

  mainButtonPressed: {
    opacity: 0.85,
  },

  linkButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconCircleAccent: {
    backgroundColor: colors.accent,
  },

  mainIcon: {
    width: 36,
    height: 36,
  },

  centerIcon: {
    width: 44,
    height: 44,
  },

  /* CARROSSEL */
  utilidadesContainer: {
    width: '100%',
    marginTop: 16,
  },

  carouselContent: {
    paddingHorizontal: (SCREEN_WIDTH - CARD_WIDTH) / 30,
  },

  carouselCard: {
    width: 110,
    height: 80,
    marginRight: 12,
    backgroundColor: colors.surface,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
  },

  utilButtonPressed: {
    opacity: 0.9,
  },

  carouselLink: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  carouselTextBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  carouselTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
  },

  carouselPlaceholder: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
});
