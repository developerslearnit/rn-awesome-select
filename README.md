# rn-awesome-select

A cross-platform (iOS / Android), modal select React Native component.

## Installation

```sh
npm install rn-awesome-select
```

## Usage

```js
import RNModalSelect from 'rn-awesome-select';

// ...

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
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
