# React Native FlatList Item Re-rendering Bug

This repository demonstrates a common performance issue in React Native's `FlatList` component where items are re-rendered unnecessarily, especially with large datasets. The issue is caused by improper data management and updates.

## Problem

The `renderItem` function within `FlatList` is being called multiple times for the same item, leading to performance degradation and visual glitches.  This frequently occurs when the component re-renders due to state updates that don't actually change the item's data.

## Solution

The solution involves using `ItemSeparatorComponent` and efficient data management techniques to prevent unnecessary re-renders. The key is to make sure that the `renderItem` prop only re-renders when the data associated with a particular item actually changes.  This can often be achieved by using `React.memo` to memoize the `renderItem` function or by using `useMemo` to create the item data.  Also, using appropriate keys is crucial for FlatList's performance.  Avoid unnecessary state updates which trigger re-renders.