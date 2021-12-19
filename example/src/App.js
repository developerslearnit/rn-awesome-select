import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';

import { StyleSheet, View, Text } from 'react-native';
import RNModalSelect from 'rn-awesome-select';

const items = [
  {
    id: '1',
    name: 'Apple',
  },
  {
    id: '2',
    name: 'Blogger',
  },
  {
    id: '3',
    name: 'Dropbox',
  },
  {
    id: '4',
    name: 'Gmail',
  },
  {
    id: '5',
    name: 'Heroku',
  },
  {
    id: '6',
    name: 'Outlook',
  },
  {
    id: '7',
    name: 'Skype',
  },
  {
    id: '8',
    name: 'Slack',
  },
];

export default function App() {
  const [visible, setVisible] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        style={{
          backgroundColor: 'blue',
          padding: 10,
          width: '60%',
          alignItems: 'center',
        }}
      >
        <Text style={{ color: 'white' }}>Select Item</Text>
      </TouchableOpacity>
      <RNModalSelect
        items={items}
        itemLabelFieldName="name"
        enableSearch={true}
        title="Select Platform"
        showSelect={visible}
        onItemSelected={(item) => {
          console.log(item);
        }}
        onClose={() => setVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
