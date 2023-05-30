import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  TextInput,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch} from 'react-redux';
import {addPost} from '../../redux/PostSlice';

const Add = ({onPost}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  dispatch = useDispatch();
  const [photo, setPhoto] = useState({
    assets: [
      {
        fileName: '',
        fileSize: 61562,
        height: 2400,
        type: 'image/png',
        uri: '',
        width: 1080,
      },
    ],
  });
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        openCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const openCamera = async () => {
    const result = await launchCamera({mediaType: 'photo'});
    if (!result.didCancel) {
      setPhoto(result);
    }
    console.log('launchCamera-result', result);
  };
  const addItem = () => {
    dispatch(
      addPost({
        name: name,
        price: price,
        desc: desc,
        image: photo.assets[0].uri,
        category:
          selectedCategory == 1
            ? 'Car'
            : selectedCategory == 2
            ? 'Bike'
            : selectedCategory == 3
            ? 'Laptop'
            : selectedCategory == 4
            ? 'Mobile'
            : selectedCategory == 5
            ? 'Furniture'
            : 'House',
      }),
    );
    onPost();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Post</Text>
      </View>
      <TouchableOpacity
        onPress={() => requestCameraPermission()}
        style={styles.imageView}>
        {photo.assets[0].uri == '' ? (
          <Image
            style={styles.imageView}
            source={require('../../assets/add-image.jpg')}
          />
        ) : (
          <Image style={styles.imageView} source={{uri: photo.assets[0].uri}} />
        )}
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Enter item name"
        value={name}
        onChangeText={txt => setName(txt)}
      />
      <TextInput
        style={[styles.input, {marginTop: 20}]}
        placeholder="Enter item Desc"
        value={desc}
        onChangeText={txt => setDesc(txt)}
      />
      <TextInput
        keyboardType="number-pad"
        style={[styles.input, {marginTop: 20}]}
        placeholder="Enter item Price"
        value={price}
        onChangeText={txt => setPrice(txt)}
      />
      <Text style={styles.categoryTitle}>Category</Text>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => setSelectedCategory(1)}
          style={[
            styles.category,
            {
              borderColor: selectedCategory == 1 ? 'black' : 'lightgrey',
              borderWidth: selectedCategory == 1 ? 2 : 2,
            },
          ]}>
          <Text style={styles.categoryText}>Car</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedCategory(2)}
          style={[
            styles.category,
            {
              borderColor: selectedCategory == 2 ? 'black' : 'lightgrey',
              borderWidth: selectedCategory == 2 ? 2 : 2,
            },
          ]}>
          <Text style={styles.categoryText}>Bike</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedCategory(3)}
          style={[
            styles.category,
            {
              borderColor: selectedCategory == 3 ? 'black' : 'lightgrey',
              borderWidth: selectedCategory == 3 ? 2 : 2,
            },
          ]}>
          <Text style={styles.categoryText}>Laptop</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          onPress={() => setSelectedCategory(4)}
          style={[
            styles.category,
            {
              borderColor: selectedCategory == 4 ? 'black' : 'lightgrey',
              borderWidth: selectedCategory == 4 ? 2 : 2,
            },
          ]}>
          <Text style={styles.categoryText}>Mobile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedCategory(5)}
          style={[
            styles.category,
            {
              borderColor: selectedCategory == 5 ? 'black' : 'lightgrey',
              borderWidth: selectedCategory == 5 ? 2 : 2,
            },
          ]}>
          <Text style={styles.categoryText}>Furniture</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedCategory(6)}
          style={[
            styles.category,
            {
              borderColor: selectedCategory == 6 ? 'black' : 'lightgrey',
              borderWidth: selectedCategory == 6 ? 2 : 2,
            },
          ]}>
          <Text style={styles.categoryText}>Houses</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => addItem()} style={styles.button}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Add;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 100,
    backgroundColor: '#a2f2e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
  },
  imageView: {
    width: '94%',
    alignSelf: 'center',
    height: 300,
    marginTop: 20,
  },
  input: {
    width: '80%',
    height: 80,
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 50,
    alignSelf: 'center',
    padding: 20,
    fontSize: 20,
  },
  button: {
    backgroundColor: 'black',
    width: '80%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  categoryTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: '10%',
    marginTop: 15,
  },
  categoryContainer: {
    flexDirection: 'row',
  },
  category: {
    width: '20%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    marginLeft: '10%',
    borderRadius: 50,
    marginTop: 20,
    borderWidth: 1,
    color: 'black',
  },
  categoryText: {
    fontSize: 20,
    color: 'black',
  },
});
