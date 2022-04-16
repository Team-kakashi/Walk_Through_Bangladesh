import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Homepage } from './travellerLanding.screen';
import { Rating } from './travellerRating.screen';


const Tab = createBottomTabNavigator();

export const TravellerTabNavigation = () => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Homepage" component={Homepage} />
        <Tab.Screen name="Rating" component={Rating} />
      </Tab.Navigator>
  );w
}