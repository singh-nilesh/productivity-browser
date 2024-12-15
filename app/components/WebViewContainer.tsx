import React, { forwardRef } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import WebView, { WebViewProps } from "react-native-webview";

// Extend WebViewProps to include the props passed to WebViewContainer
interface WebViewContainerProps extends WebViewProps {}

// Use forwardRef to allow parent components to control the WebView instance
const WebViewContainer = forwardRef<WebView, WebViewContainerProps>(
  ({ source, onNavigationStateChange, startInLoadingState, renderLoading, style, ...props }, ref) => {
    return (
      <View style={[{ flex: 1 }, style]}>
        <WebView
          ref={ref}
          source={source}
          onNavigationStateChange={onNavigationStateChange} 
          startInLoadingState={startInLoadingState} // Show loading state during navigation
          renderLoading={renderLoading} // Custom loading component
          {...props} // Spread other WebViewProps for flexibility
        />
      </View>
    );
  }
);

export default WebViewContainer;
