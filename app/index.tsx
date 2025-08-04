// app/index.tsx
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    // Always redirect to login page on app start
    router.replace('/auth/login');
  }, []);

  return null;
}
