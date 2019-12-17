/* @flow */
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import PopupModal from 'modules/WebView/components/PopupModal';

type Props = {
  src: string; // Secure connection is required
  modalVisible: boolean; // Is the warning modal shown
  modalTimeout: number; // How long will the modal be shown before automatically closing
  onLoadEnd: () => {};
};

type State = {
  modalVisible: boolean;
};

const WebViewModule = (props: Props) => {
  const [modalVisible, setModalVisible] = useState(true);
  // Returns a component to be rendered on WebView error
  const onError = (): void => {
    // TODO: Return a view containing the error
    console.log('WebView Error');
  };

  const hidemodal = (): void => {
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1 }}>
      <PopupModal
        modalVisible={modalVisible}
        modalText={`Sinut on ohjattu verkko-osoitteeseen ${props.src}`}
        onClose={hidemodal}
      />
      <WebView
        geolocationEnabled={true}
        source={{ uri: props.src }}
        renderError={onError}
        onLoadEnd={props.onLoadEnd}
      />
    </View>
  );
};

export default WebViewModule;
