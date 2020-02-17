/* @flow */
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import PopupModal from './components/PopupModal';

interface Props {
  src: string;
  modalVisible: boolean;
  modalTimeout: number;
  onLoadEnd?(): void;
  onHideModal?(): void;
}

const WebViewModule = (props: Props): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  const translationData = require('../../config/locales.json');
  const onError = (): void => {
    console.log('WebView Error');
  };

  const hideModal = (): void => {
    if (props.onHideModal) {
      props.onHideModal();
    } else {
      setModalVisible(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      hideModal();
    }, props.modalTimeout);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <PopupModal
        modalVisible={props.onHideModal ? props.modalVisible : modalVisible}
        modalText={`${translationData.finnish.WebView.Redirection} ${props.src}`}
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
