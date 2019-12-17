/* @flow */
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import PopupModal from 'modules/WebView/components/PopupModal';

interface Props {
  src: string;
  modalVisible: boolean;
  modalTimeout: number;
  onLoadEnd?(): void;
}

const WebViewModule = (props: Props): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(true);

  const onError = (): void => {
    console.log('WebView Error');
  };

  const hideModal = (): void => {
    setModalVisible(false);
  };

  useEffect(() => {
    setTimeout(() => {
      hideModal();
    }, props.modalTimeout);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PopupModal
        modalVisible={modalVisible}
        modalText={`Sinut on ohjattu verkko-osoitteeseen ${props.src}`}
        onClose={hideModal}
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
