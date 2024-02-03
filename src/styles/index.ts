import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  authContainer: {
    // @ts-ignore
    paddingVertical: 36,
    paddingHorizontal: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    
    width: "100%",
  },
  text: {
    fontSize: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
  },
});

export default styles;
