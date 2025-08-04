import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // ✅ Hides the "auth" header for all screens in /auth
      }}
    />
  );
}
