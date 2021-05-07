import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons';
import Feeds from './Tabs/Feeds';
import Profile from './Tabs/Profile';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
          tabStyle: {height:70, backgroundColor: '#3a474e'},
          labelStyle: {color: 'white', fontSize: 16},
          showIcon:true,
          }}>
          <Tab.Screen 
            name="Feeds" 
            component={Feeds}
            options={{
              tabBarIcon:() => {
                <Ionicons name='home'
                color='white'
                size={24}/>
              }
            }}
          />
          <Tab.Screen 
          name="Profile" 
          component={Profile}
          options={{
            tabBarIcon:() => {
              <Ionicons name='person'
              color='white'
              size={24}/>
            }
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default App;