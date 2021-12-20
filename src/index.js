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
}) => {
  const [search, setSearch] = useState('');

  const searchItem = (text) => {
    setSearch(text);
  };

  return (
    <Modal animationType="slide" visible={showSelect}>
      <View style={styles.selectOverlay}>
        {title && <Text style={styles.selectTitle}>{title}</Text>}
        {enableSearch && (
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              value={search}
              onChangeText={(text) => searchItem(text)}
            />
          </View>
        )}

        <View style={styles.selectContainer}>
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
                    style={styles.optionStyle}
                  >
                    <Text style={styles.optionText}>
                      {item[itemLabelFieldName]}
                    </Text>
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </View>
        <TouchableOpacity onPress={onClose} style={styles.selectDismissButton}>
          <Text style={styles.cancelText}>Dismiss</Text>
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
