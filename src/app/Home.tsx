import { View, Text, Pressable, StyleSheet, Image, Platform, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Agenda from '../components/Agenda';
import { Link } from 'expo-router';
import { colors } from '../theme';

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

        <View style={styles.buttonContainer}>
          <Pressable style={({ pressed }) => [styles.mainButton, cardShadow, pressed && styles.mainButtonPressed]}>
            <Link href="/Table" style={styles.linkButton}>
              <View style={styles.iconCircle}>
                <Image source={require('../source/icons/table.png')} style={styles.mainIcon} />
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
            <Link href="/Breastfeeding" style={styles.linkButton}>
              <View style={[styles.iconCircle, breastfeedingPressed && styles.iconCircleAccent]}>
                <Image source={require('../source/icons/breastfeeding.png')} style={styles.centerIcon} />
              </View>
            </Link>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.mainButton, cardShadow, pressed && styles.mainButtonPressed]}>
            <Link href="/Baby" style={styles.linkButton}>
              <View style={styles.iconCircle}>
                <Image source={require('../source/icons/baby-line.png')} style={styles.mainIcon} />
              </View>
            </Link>
          </Pressable>
        </View>

        <View style={styles.utilidadesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
          >
            <Pressable style={({ pressed }) => [styles.carouselCard, cardShadow, pressed && styles.utilButtonPressed]}>
              <Link href="/Fraudas" style={styles.carouselLink}>
                <Text style={styles.carouselTitle}>Fraldas</Text>
                <Text style={styles.carouselPlaceholder}>Salvo por último</Text>
              </Link>
            </Pressable>

            <Pressable style={({ pressed }) => [styles.carouselCard, cardShadow, pressed && styles.utilButtonPressed]}>
              <Link href="/Mamadeira" style={styles.carouselLink}>
                <Text style={styles.carouselTitle}>Mamadeiras</Text>
                <Text style={styles.carouselPlaceholder}>Salvo por último</Text>
              </Link>
            </Pressable>

            <Pressable style={({ pressed }) => [styles.carouselCard, cardShadow, pressed && styles.utilButtonPressed]}>
              <Link href="/Sono" style={styles.carouselLink}>
                <Text style={styles.carouselTitle}>Sono</Text>
                <Text style={styles.carouselPlaceholder}>Salvo por último</Text>
              </Link>
            </Pressable>
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
    letterSpacing: 0.5,
  },

  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '100%',
  },

  mainButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 12,
    minWidth: 95,
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
    marginBottom: 8,
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

  mainButtonLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.text,
  },

  utilidadesContainer: {
    width: '100%',
    marginTop: 16,
    marginBottom: 8,
  },

  carouselContent: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },

  carouselCard: {
    width: 140,
    marginRight: 12,
    backgroundColor: colors.surface,
    borderRadius: 14,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },

  utilButtonPressed: {
    opacity: 0.9,
    backgroundColor: colors.background,
  },

  carouselLink: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
  },

  carouselTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    textAlign: 'center',
    marginBottom: 4,
  },

  carouselPlaceholder: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
