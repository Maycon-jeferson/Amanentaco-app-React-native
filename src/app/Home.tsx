import { View, Text, Pressable, StyleSheet, Image, Platform } from 'react-native';
import React from 'react';
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
              <Text style={styles.mainButtonLabel}>Tabela</Text>
            </Link>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.mainButton, styles.mainButtonCenter, cardShadow, pressed && styles.mainButtonPressed]}>
            <Link href="/Breastfeeding" style={styles.linkButton}>
              <View style={[styles.iconCircle, styles.iconCircleAccent]}>
                <Image source={require('../source/icons/breastfeeding.png')} style={styles.centerIcon} />
              </View>
              <Text style={styles.mainButtonLabel}>Amamentar</Text>
            </Link>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.mainButton, cardShadow, pressed && styles.mainButtonPressed]}>
            <Link href="/Baby" style={styles.linkButton}>
              <View style={styles.iconCircle}>
                <Image source={require('../source/icons/baby-line.png')} style={styles.mainIcon} />
              </View>
              <Text style={styles.mainButtonLabel}>Bebê</Text>
            </Link>
          </Pressable>
        </View>

        <View style={styles.utilidadesContainer}>
          <Pressable style={({ pressed }) => [styles.utilButton, cardShadow, pressed && styles.utilButtonPressed]}>
            <Link href="/Fraudas" style={styles.utilLink}>
              <Text style={styles.utilText}>Fraldas</Text>
            </Link>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.utilButton, cardShadow, pressed && styles.utilButtonPressed]}>
            <Link href="/Mamadeira" style={styles.utilLink}>
              <Text style={styles.utilText}>Mamadeiras</Text>
            </Link>
          </Pressable>

          <Pressable style={({ pressed }) => [styles.utilButton, cardShadow, pressed && styles.utilButtonPressed]}>
            <Link href="/Sono" style={styles.utilLink}>
              <Text style={styles.utilText}>Sono</Text>
            </Link>
          </Pressable>
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
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 8,
  },

  mainButton: {
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
    fontSize: 13,
    fontWeight: '600',
    color: colors.text,
  },

  utilidadesContainer: {
    width: '100%',
    maxWidth: 340,
    marginTop: 12,
  },

  utilButton: {
    backgroundColor: colors.surface,
    borderRadius: 14,
    height: 48,
    marginVertical: 6,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },

  utilButtonPressed: {
    opacity: 0.9,
    backgroundColor: colors.background,
  },

  utilLink: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  utilText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
  },
});
