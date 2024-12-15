import { View, Text } from 'react-native'
import { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import WebView from "react-native-webview";

import BrowserHeader from './components/BrowserHeader'
import WebViewContainer from './components/WebViewContainer';
import BottomNavBar from './components/BottomNavBar'


const Index = () => {
  const [currentUrl, setCurrentUrl] = useState('https://www.google.com');
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);


  // set url to begin with https:// if it doesn't
  const handleGo = (url: string) => {
    if (url.startsWith('http')) {
      setCurrentUrl(url);
    } else {
      setCurrentUrl('https://' + url);
    }
  };

  // Handel reload
  const handleReload = () => {
    if (webViewRef.current) webViewRef.current.reload();
  }

  // Handle WebView navigation events
  const handleNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
  };

  return (
    <SafeAreaView>
      <BrowserHeader onGo={handleGo} onReload={handleReload} />

      <View>
        <Text>Current URL: {currentUrl}</Text>
        <WebViewContainer
          ref={webViewRef}
          source={{ uri: currentUrl }}
          style={{ flex: 1 }}
          onNavigationStateChange={handleNavigationStateChange}
          startInLoadingState={true}
          renderLoading={() => (
            <View className="flex-1 items-center justify-center">
              <Text className="text-gray-500">Loading...</Text>
            </View>
          )}
        />
      </View>

      <View>
        <BottomNavBar
          onGoBack={() => webViewRef.current?.goBack()}
          onGoForward={() => webViewRef.current?.goForward()}
          onBookmark={() => alert('Bookmark wil be added')}
          onTabs={() => alert('Tabs will be opened')}
          onShare={() => alert('Share will be opened')}
          canGoBack={canGoBack}
          canGoForward={canGoForward}
        />
      </View>
    </SafeAreaView>
  );
}

export default Index