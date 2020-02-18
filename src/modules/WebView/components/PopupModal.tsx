import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
  Platform,
} from 'react-native';
import colors from '../../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  modalVisible: boolean;
  modalText: string;
  onClose(): void;
}

const styles = {
  wrapper: {
    backgroundColor: colors.max + 'EE',
    padding: 15,
    flexDirection: 'row',
    ...Platform.select({
      android: {
        marginTop: 80,
      },
      ios: {
        marginTop: 90,
      },
    }),
  },
  textWrapper: {
    flex: 2,
  },
  modalText: {
    color: colors.min,
    justifyContent: 'flex-start',
  },
  modalButton: {
    justifyContent: 'flex-end',
  },
};

const PopupModal = (props: Props): JSX.Element => {
  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onClose}>
      <View style={styles.wrapper}>
        <View style={styles.textWrapper}>
          <Text style={styles.modalText}>{props.modalText}</Text>
        </View>
        <TouchableHighlight onPress={props.onClose} style={styles.modalButton}>
          <Icon name='close' size={40} color={colors.min} />
        </TouchableHighlight>
      </View>
      <TouchableWithoutFeedback onPressIn={props.onClose}>
        <View style={{ flex: 1 }}></View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default PopupModal;
