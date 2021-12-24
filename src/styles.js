import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  selectOverlay: {
    flex: 1,
    padding: '5%',
    paddingTop: Platform.OS == 'ios' ? '20%' : '10%',
    paddingBottom: Platform.OS == 'ios' ? '20%' : '10%',
    justifyContent: 'center',
    backgroundColor:
      Platform.OS == 'ios' ? 'rgba(0,0,0,0.6)' : 'rgba(0,0,0,0.8)',
  },
  selectContainer: {
    flexShrink: 1,
    marginBottom: 5,
    marginTop: 8,
    padding: 8,
    paddingBottom: 0,
    paddingTop: 0,
    borderRadius: 10,
    backgroundColor: Platform.OS == 'ios' ? 'rgba(240,240,241,0.8)' : '#fff',
  },
  selectDismissButton: {
    padding: 13,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.8)',
      },
      android: {},
    }),
  },

  cancelText: {
    alignItems: 'center',
    ...Platform.select({
      android: {
        color: 'white',
        fontWeight: 'bold',
      },
    }),
  },

  selectTitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'white',
    fontWeight: '600',
  },
  searchInputContainer: {
    height: 45,
    marginTop: 10,
    backgroundColor: Platform.OS == 'ios' ? 'rgba(240,240,241,0.8)' : '#fff',
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    color: 'rgba(0,0,0,0.8)',
    padding: 10,
    fontSize: 13,
  },
  optionStyle: {
    padding: 14,
    borderBottomWidth: Platform.OS == 'ios' ? 0.7 : 0.9,
    borderBottomColor: '#ccc',
  },
  optionText: {
    color: 'rgba(0,0,0,0.7)',
  },
});
