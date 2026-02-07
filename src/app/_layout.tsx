import { Stack } from 'expo-router';
import { colors } from '../theme';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: colors.textOnPrimary,
        headerTitleStyle: { fontWeight: '600', fontSize: 18 },
        headerShadowVisible: false,
        contentStyle: { backgroundColor: colors.background },
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Table" options={{ title: 'Tabela' }} />
      <Stack.Screen name="Breastfeeding" options={{ title: 'Amamentar' }} />
      <Stack.Screen name="Baby" options={{ title: 'Bebê' }} />
      <Stack.Screen name="Fraudas" options={{ title: 'Fraldas' }} />
      <Stack.Screen name="Mamadeira" options={{ title: 'Mamadeiras' }} />
      <Stack.Screen name="Sono" options={{ title: 'Sono' }} />
    </Stack>
  );
}
