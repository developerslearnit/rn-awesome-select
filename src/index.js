import React, { useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { styles } from './styles';

const RNModalSelect = ({
  items,
  itemLabelFieldName,
  title,
  enableSearch,
  showSelect,
  onItemSelected,
  onClose,
  containerStyle,
  overlayColor,
  titleTextStyle,
  searchInputWrapStyle,
  searchInputStyle,
  optionItemStyle,
  optionTextStyle,
  dismissButtonStyle,
  dismissButtonTextStyle,
}) => {
  const [search, setSearch] = useState('');

  const searchItem = (text) => {
    setSearch(text);
  };

  return (
    <Modal animationType="slide" visible={showSelect}>
      <View
        style={[
          styles.selectOverlay,
          overlayColor ? { backgroundColor: overlayColor } : {},
        ]}
      >
        {title && (
          <Text style={[styles.selectTitle, titleTextStyle]}>{title}</Text>
        )}
        {enableSearch && (
          <View style={[styles.searchInputContainer, searchInputWrapStyle]}>
            <TextInput
              style={[styles.searchInput, searchInputStyle]}
              placeholder="Search"
              value={search}
              onChangeText={(text) => searchItem(text)}
            />
          </View>
        )}

        <View style={[styles.selectContainer, containerStyle]}>
          <ScrollView>
            {items.length > 0 &&
              items
                .filter((value) => {
                  if (search == '') {
                    return value;
                  } else {
                    return value.name
                      .toLowerCase()
                      .includes(search.toLowerCase());
                  }
                })
                .map((item, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      onItemSelected(item);
                      onClose();
                    }}
                    key={index}
                    style={[styles.optionStyle, optionItemStyle]}
                  >
                    <Text style={[styles.optionText, optionTextStyle]}>
                      {item[itemLabelFieldName]}
                    </Text>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </View>
        <TouchableOpacity
          onPress={onClose}
          style={[styles.selectDismissButton, dismissButtonStyle]}
        >
          <Text style={[styles.cancelText, dismissButtonTextStyle]}>
            Dismiss
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

RNModalSelect.defaultProps = {
  showSelect: false,
  itemLabelFieldName: 'label',
  items: [],
};

export default RNModalSelect;
