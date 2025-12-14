import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  ActivityIndicator,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { storage } from '../utils/storage';

type LoginScreenProps = {
  navigation: any;
};

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const checkIfLoggedIn = async () => {
    try {
      const user = await storage.getCurrentUser();
      if (user) {
        navigation.replace('Profile');
      }
    } catch {
      // User is not logged in, stay on login screen
    }
  };

  useEffect(() => {
    checkIfLoggedIn();
  }, []);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    try {
      const user = await storage.loginUser(email.trim(), password);
      if (user) {
        navigation.replace('Profile');
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch {
      Alert.alert('Error', 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1" style={{ backgroundColor: '#04668D' }}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView edges={['top']} className="flex-1">
        {/* Header */}
        <View className="px-6 pt-4 pb-8">
          <View className="flex-row items-center justify-between mb-4">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text className="text-white text-base">←</Text>
            </TouchableOpacity>
            <Text className="text-white text-xl font-bold">AllergyGenie</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text className="text-white text-sm">
                Don&apos;t have an account? <Text className="font-bold">Get Started</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          className="flex-1"
        >
          <ScrollView
            className="flex-1"
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
            {/* White Card */}
            <View
              className="flex-1 bg-white"
              style={{
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginTop: 'auto',
                paddingTop: 40,
                paddingHorizontal: 24,
                paddingBottom: 40,
              }}
            >
              <Text className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</Text>
              <Text className="text-gray-500 text-base mb-8">Enter your details below</Text>

              {/* Form */}
              <View className="mb-6">
                <View className="mb-5">
                  <Text className="text-gray-700 text-sm font-medium mb-2">Email address</Text>
                  <TextInput
                    className="bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base"
                    placeholder="Email address"
                    placeholderTextColor="#9CA3AF"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    style={{
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.05,
                      shadowRadius: 2,
                      elevation: 1,
                    }}
                  />
                </View>

                <View className="mb-6">
                  <Text className="text-gray-700 text-sm font-medium mb-2">Password</Text>
                  <View className="relative">
                    <TextInput
                      className="bg-white border border-gray-200 rounded-2xl px-5 py-4 text-base pr-14"
                      placeholder="Password"
                      placeholderTextColor="#9CA3AF"
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      autoCapitalize="none"
                      style={{
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 1 },
                        shadowOpacity: 0.05,
                        shadowRadius: 2,
                        elevation: 1,
                      }}
                    />
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                      className="absolute right-5 top-0 bottom-0 justify-center"
                    >
                      <Text className="text-primary font-semibold text-sm">
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                {/* Sign In Button with Gradient */}
                <TouchableOpacity
                  onPress={handleLogin}
                  disabled={loading}
                  className="rounded-2xl py-5 items-center justify-center mb-4"
                  style={{
                    shadowColor: '#04668D',
                    shadowOffset: { width: 0, height: 4 },
                    shadowOpacity: 0.3,
                    shadowRadius: 8,
                    elevation: 8,
                  }}
                >
                  <LinearGradient
                    colors={['#04668D', '#01C49A']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className="absolute inset-0 rounded-2xl"
                  />
                  {loading ? (
                    <ActivityIndicator color="#FFFFFF" />
                  ) : (
                    <Text className="text-white text-base font-bold">Sign in</Text>
                  )}
                </TouchableOpacity>

                {/* Forgot Password */}
                <TouchableOpacity className="items-center mb-6">
                  <Text className="text-primary font-medium text-sm">Forgot your password?</Text>
                </TouchableOpacity>

                {/* Divider */}
                <View className="flex-row items-center mb-6">
                  <View className="flex-1 h-px bg-gray-200" />
                  <Text className="px-4 text-gray-500 text-sm">Or sign in with</Text>
                  <View className="flex-1 h-px bg-gray-200" />
                </View>

                {/* Social Login Buttons */}
                <View className="flex-row gap-3 mb-6">
                  <TouchableOpacity
                    className="flex-1 bg-white border border-gray-200 rounded-2xl py-4 items-center justify-center"
                    style={{
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.05,
                      shadowRadius: 2,
                      elevation: 1,
                    }}
                  >
                    <Text className="text-gray-700 font-semibold">Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="flex-1 bg-white border border-gray-200 rounded-2xl py-4 items-center justify-center"
                    style={{
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.05,
                      shadowRadius: 2,
                      elevation: 1,
                    }}
                  >
                    <Text className="text-gray-700 font-semibold">Facebook</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
