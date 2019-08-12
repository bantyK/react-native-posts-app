import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import AddPostScreen from "./src/posts/screens/AddPost";
import PostsListScreen from "./src/posts/screens/PostsList";
import ViewPostsScreen from "./src/posts/screens/ViewPosts";

const AppNavigator = createStackNavigator(
  {
    List: PostsListScreen,
    Add: AddPostScreen,
    View: ViewPostsScreen,
  },
  {
    initialRouteName: "List",
    headerLayoutPreset: "center",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EEEEEE',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center'
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}