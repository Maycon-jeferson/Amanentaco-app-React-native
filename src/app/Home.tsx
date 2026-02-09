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

const CARD_WIDTH = 110;
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

  // Carrosel
  const fraldasUltimoSalvo = 'Ultima frauda a 3h';
  const mamadeirasUltimoSalvo = 'Ultima mamadeira a 4h';
  const sonoUltimoSalvo = 'Ultimo sono a 8h';

  const carouselItems = [
    { title: 'Fraldas', href: '/Fraudas', ultimoSalvo: fraldasUltimoSalvo },
    { title: 'Mamadeiras', href: '/Mamadeira', ultimoSalvo: mamadeirasUltimoSalvo },
    { title: 'Sono', href: '/Sono', ultimoSalvo: sonoUltimoSalvo },
  ];

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Hora da Ação</Text>

        {/* BOTÕES PRINCIPAIS */}
        <View style={styles.buttonContainer}>
          <Link href="/Table" asChild>
            <Pressable style={({ pressed }) => [styles.mainButton, cardShadow, pressed && styles.mainButtonPressed]}>
              <View style={styles.linkButton}>
                <View style={styles.iconCircle}>
                  <Image source={require('../source/icons/table.png')} style={styles.mainIcon} />
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/Breastfeeding" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.mainButton,
                cardShadow,
                (pressed || breastfeedingPressed) && styles.mainButtonCenter,
                pressed && styles.mainButtonPressed,
              ]}
              onPressIn={() => setBreastfeedingPressed(true)}
              onPressOut={() => setBreastfeedingPressed(false)}
            >
              <View style={styles.linkButton}>
                <View style={[styles.iconCircle, (breastfeedingPressed) && styles.iconCircleAccent]}>
                  <Image
                    source={require('../source/icons/breastfeeding.png')}
                    style={styles.centerIcon}
                  />
                </View>
              </View>
            </Pressable>
          </Link>

          <Link href="/Baby" asChild>
            <Pressable style={({ pressed }) => [styles.mainButton, cardShadow, pressed && styles.mainButtonPressed]}>
              <View style={styles.linkButton}>
                <View style={styles.iconCircle}>
                  <Image source={require('../source/icons/baby-line.png')} style={styles.mainIcon} />
                </View>
              </View>
            </Pressable>
          </Link>
        </View>

        {/* CARROSSEL */}
        <View style={styles.utilidadesContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
          >
            {carouselItems.map((item, index) => (
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
                      <Text style={styles.carouselPlaceholder}>{item.ultimoSalvo || 'err'}</Text>
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
    justifyContent: 'space-between',
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
    width: 92,
    height: 92,
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
