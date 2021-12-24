# rn-awesome-select

A cross-platform (iOS / Android), modal select React Native component.

## Installation

```sh
npm install rn-awesome-select
```

## Screenshots

| IOS                                                                                                                         | ANDROID                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://res.cloudinary.com/panachora/image/upload/v1639963663/rn-select-ios_tcvrcg.png" width="320" height="700"> | <img src="https://res.cloudinary.com/panachora/image/upload/v1639963663/rn-select-android_uzarep.png" width="320"  height="700"> |

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

## Datasource structure

The datasource (items) should be an array of objects with at least one property see example below:

```js
[
  {
    id: '1',
    label: 'Apple',
  },
];
```

If you have a different object structure than the example above, in that case, you can specify which one you want to use as the label by passing the `itemLabelFieldName="yourfieldName"`

##Props

| Prop               | Description                                                  | Type    | Required | Default |
| :----------------- | :----------------------------------------------------------- | :------ | :------- | :------ |
| items              | Array of objects to display                                  | Array   | true     | []      |
| itemLabelFieldName | The field name to be used as the label                       | string  | false    | label   |
| enableSearch       | Allow you to enable or disable search                        | boolean | false    | false   |
| title              | The title of the select modal                                | string  | true     | null    |
| showSelect         | Set to true to show select modal                             | string  | true     | false   |
| onItemSelected     | The function that is called when an item is selected         | func    | true     | null    |
| onClose            | The function that is called when the dismiss button is click | func    | true     | null    |

## Custom styles

Custom styles allows you to change all the default style to suite your app theme.

##### overlayColor

Changes the overlay color of the modal. `Usage overlayColor='rgba(0,0,0,0.5)'`

##### containerStyle

Modifies the overall style of the select container. The default is `rgba(240,240,241,0.8)`. Accepts all view styles

##### titleTextStyle

The text style of the select title. Accepts all Text styles

##### searchInputWrapStyle

Styles of the search input wrapper. Accepts all View's styles

##### searchInputStyle

Styles of the search input. Accepts all TextInput styles

##### optionItemStyle

Styles of the select items. Accepts all TouchableOpacity styles

##### optionTextStyle

Styles of the option text. Accepts all Text styles

##### dismissButtonStyle

Styles of the dismiss button. Accepts all TouchableOpacity styles

##### dismissButtonTextStyle

Styles of the dismiss button text. Accepts all Text styles

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
