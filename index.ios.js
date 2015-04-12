/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
    AppRegistry,
    NavigatorIOS,
    StyleSheet,
    Text,
    View,
} = React;

var MyView = React.createClass({
    _handleBackButtonPress: function() {
        this.props.navigator.pop();
    },
    _handleNextButtonPress: function() {
        this.props.navigator.push(nextRoute);
    },
    render: function () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>test</Text>
            </View>
        );
    }
});

var ReactNativeNavigatorIOS = React.createClass({
  render: function() {
    return (
        <NavigatorIOS 
            style={styles.nav}
            initialRoute={{
                component: MyView,
                title: 'My View Title',
                passProps: {myProp: 'foo'}
            }}
        />
    );
  }
});

var styles = StyleSheet.create({
    nav: {
        // 很神奇，不设置这个样式，竟然看不到MyView渲染出来的内容
        flex: 1
    },
    container: {
        marginTop: 70
    }
});

AppRegistry.registerComponent('ReactNativeNavigatorIOS', () => ReactNativeNavigatorIOS);
