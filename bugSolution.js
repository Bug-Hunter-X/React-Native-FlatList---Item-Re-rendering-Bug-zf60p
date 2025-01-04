```javascript
import React, { useState, useMemo, React.memo } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Item = React.memo(({ item }) => (
  <View style={styles.item}>
    <Text>{item.key}</Text>
  </View>
));

const App = () => {
  const [items, setItems] = useState(Array.from({ length: 1000 }, (_, i) => ({ key: i.toString() })));

  const renderItem = ({ item }) => <Item item={item} />;

  const ItemSeparatorComponent = () => (
    <View style={styles.separator} />
  );

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 16
  }
});
export default App;
```