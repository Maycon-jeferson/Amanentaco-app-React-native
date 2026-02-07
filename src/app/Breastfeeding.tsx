import { View, Text, Pressable, StyleSheet, Platform } from 'react-native';
import React, { useState } from 'react';
import Timer from '../components/Timer';
import CountdownTimer from '../components/CountdownTimer';
import { colors } from '../theme';

const cardShadow = Platform.select({
  ios: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  android: { elevation: 3 },
});

export default function BreastFeeding() {
  const [savedTime, setSavedTime] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <View style={[styles.perfil, cardShadow]}>
        <Text style={styles.perfilNome}>Baby</Text>
        <Text style={styles.perfilIdade}>Idade</Text>
        <View style={styles.perfilAvatar}>
          <Text style={styles.perfilAvatarText}>Foto</Text>
        </View>
      </View>

      <Text style={styles.sectionLabel}>Selecione o seio</Text>
      <View style={styles.lrDirection}>
        <Pressable style={({ pressed }) => [styles.lrBlock, cardShadow, pressed && styles.lrBlockPressed]}>
          <Text style={styles.lrText}>L</Text>
          <Text style={styles.lrSubtext}>Esquerdo</Text>
        </Pressable>

        <Pressable style={({ pressed }) => [styles.lrBlock, cardShadow, pressed && styles.lrBlockPressed]}>
          <Text style={styles.lrText}>R</Text>
          <Text style={styles.lrSubtext}>Direito</Text>
        </Pressable>
      </View>

      <View style={[styles.timerSection, cardShadow]}>
        <Timer onSaveTime={setSavedTime} />
      </View>

      <View style={[styles.areaCard, cardShadow]}>
        <Text style={styles.areaLabel}>Tempo da última mamada</Text>
        <Text style={styles.areaValue}>
          {savedTime !== null ? `${savedTime}s` : '—'}
        </Text>
      </View>

      <View style={[styles.areaCard, cardShadow]}>
        <Text style={styles.areaLabel}>Próxima mamada em</Text>
        <CountdownTimer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: 24,
    paddingHorizontal: 16,
  },

  perfil: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
    borderRadius: 16,
  },

  perfilNome: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.textOnPrimary,
  },

  perfilIdade: {
    fontSize: 14,
    color: colors.textOnPrimary,
    opacity: 0.9,
    marginLeft: 12,
    marginTop: 2,
  },

  perfilAvatar: {
    position: 'absolute',
    right: 12,
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.primaryDark,
    alignItems: 'center',
    justifyContent: 'center',
  },

  perfilAvatarText: {
    fontSize: 12,
    color: colors.textOnPrimary,
    opacity: 0.9,
  },

  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: 10,
  },

  lrDirection: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 12,
    height: 140,
  },

  lrBlock: {
    flex: 1,
    backgroundColor: colors.accentLight,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: colors.accent,
    alignItems: 'center',
    justifyContent: 'center',
  },

  lrBlockPressed: {
    opacity: 0.9,
  },

  lrText: {
    fontSize: 36,
    fontWeight: '800',
    color: colors.primaryDark,
  },

  lrSubtext: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 4,
  },

  timerSection: {
    marginBottom: 16,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  areaCard: {
    marginBottom: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  areaLabel: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 6,
  },

  areaValue: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.text,
  },
});
