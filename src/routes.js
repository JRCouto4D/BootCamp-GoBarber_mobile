/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

export default function Routes() {
  const { signed } = useSelector((state) => state.auth);
  const Stack = createStackNavigator();
  const Tabs = createBottomTabNavigator();

  function NewBottom() {
    return (
      <Stack.Navigator
        initialRouteName="SelectProvider"
        screenOptions={{
          headerTransparent: true,
          headerTintColor: '#FFF',
          headerLeftContainerStyle: {
            marginLeft: 20,
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="SelectProvider"
          component={SelectProvider}
          options={({ navigation }) => ({
            title: 'Selecione um prestador',
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('Dashboard')}
              >
                <Icon name="chevron-left" size={25} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="SelectDateTime"
          component={SelectDateTime}
          options={({ navigation }) => ({
            title: 'Selecione o horário',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={25} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={({ navigation }) => ({
            title: 'Confirmar agendamento',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" size={25} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    );
  }

  function BottomTabs() {
    return (
      <Tabs.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
          activeTintColor: '#fff',
          tabStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 5,
          },
          labelStyle: {
            fontSize: 16,
          },
          style: {
            backgroundColor: '#8d41a8',
          },
        }}
      >
        <Tabs.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarLabel: 'Agendamentos',
            tabBarIcon: ({ color }) => (
              <Icon name="event" size={20} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="New"
          component={NewBottom}
          options={{
            tabBarVisible: false,
            tabBarLabel: 'Agendar',
            tabBarIcon: () => (
              <Icon
                name="add-circle-outline"
                size={20}
                color="rgba(255, 255, 255, 0.6)"
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Meu perfil',
            tabBarIcon: ({ color }) => (
              <Icon name="person" size={20} color={color} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <>
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
                gestureEnabled: false,
                animationEnabled: false,
              }}
              component={BottomTabs}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
