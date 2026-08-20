import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { StoreProvider, useStore } from './src/store';
import { theme } from './src/theme';
import AgeGateScreen from './src/screens/AgeGateScreen';
import LobbyScreen from './src/screens/LobbyScreen';
import GameScreen from './src/screens/GameScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import LeaderboardScreen from './src/screens/LeaderboardScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const ICONS: Record<string, string> = {
  Home: '🎮', Profile: '👤', Board: '🏆', Settings: '⚙️',
};

function TabIcon({ name, focused }: { name: string; focused: boolean }) {
  return <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.45 }}>{ICONS[name]}</Text>;
}

function MainTabs() {
  const { t } = useStore();
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: theme.pink,
        tabBarInactiveTintColor: theme.muted,
        tabBarStyle: { backgroundColor: theme.bgElevated, borderTopColor: theme.cardLine },
        tabBarIcon: ({ focused }) => <TabIcon name={route.name} focused={focused} />,
      })}
    >
      <Tabs.Screen name="Home" component={LobbyScreen} options={{ title: t('tab.home') }} />
      <Tabs.Screen name="Profile" component={ProfileScreen} options={{ title: t('tab.profile') }} />
      <Tabs.Screen name="Board" component={LeaderboardScreen} options={{ title: t('tab.board') }} />
      <Tabs.Screen name="Settings" component={SettingsScreen} options={{ title: t('tab.settings') }} />
    </Tabs.Navigator>
  );
}

function Root() {
  const { ready, progress } = useStore();

  if (!ready) {
    return (
      <View style={{ flex: 1, backgroundColor: theme.bg, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={theme.pink} />
      </View>
    );
  }

  if (!progress.ageConfirmed) return <AgeGateScreen />;

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={MainTabs} />
      <Stack.Screen
        name="Game"
        component={GameScreen}
        options={{ presentation: 'fullScreenModal', animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
}

const navTheme = {
  ...DarkTheme,
  colors: { ...DarkTheme.colors, background: theme.bg, card: theme.bgElevated, text: theme.text },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <StoreProvider>
        <StatusBar style="light" />
        <NavigationContainer theme={navTheme}>
          <Root />
        </NavigationContainer>
      </StoreProvider>
    </SafeAreaProvider>
  );
}
