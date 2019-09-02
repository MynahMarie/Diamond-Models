import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewShot from 'react-native-view-shot';
import CameraRollExtended from 'react-native-store-photos-album';

import DiamondModel from '../components/DiamondModel';
import {BLUE} from '../config/constants';

export default class ModelScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgUri: '',
    };
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'My App Storage Permission',
          message:
            'My App needs access to your storage so you can save your photos',
        },
      );
      console.log('granted = ', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.takeScreenShot();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.log(err);
    }
  };

  takeScreenShot = () => {
    // eslint-disable-next-line react/no-string-refs
    this.refs.viewShot.capture().then(uri => {
      this.setState({imgUri: uri});
      CameraRollExtended.saveToCameraRoll(
        {uri, album: 'Diamond Models', fileName: Date.now() + '.jpg'},
        'photo',
      )
        .then(img => Alert.alert('Success! Photo added to camera roll!', img))
        .catch(error => {
          Alert.alert('Something went wrong...');
          console.log(error);
        });
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <Header
          containerStyle={styles.header}
          leftComponent={
            <Image
              source={require('../assets/diamond.png')}
              style={styles.headerImg}
            />
          }
          centerComponent={<Text style={styles.headerTxt}>Diamond Models</Text>}
          rightComponent={
            <TouchableOpacity onPress={this.requestCameraPermission}>
              <Icon name={'camera-enhance'} style={styles.headerIcon} />
            </TouchableOpacity>
          }
        />
        <ImageBackground
          source={require('../assets/64002-edit-verypale.jpg')}
          style={{width: '100%', height: '100%'}}
          imageStyle={{resizeMode: 'stretch'}}>
          <ScrollView
            contentContainerStyle={{
              marginTop: 30,
              marginBottom: 60,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {/* eslint-disable-next-line react/no-string-refs */}
            <ViewShot ref="viewShot" options={{format: 'jpg', quality: 0.9}}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={{marginTop: 0, marginBottom: 0}}>
                <DiamondModel />
              </ScrollView>
            </ViewShot>
            <Text>{'\n\n\n\n\n\n\n'}</Text>
          </ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: BLUE,
    padding: 20,
  },
  headerImg: {
    width: 45,
    height: 40,
  },
  headerTxt: {
    color: 'white',
    fontSize: 20,
  },
  headerIcon: {
    fontSize: 45,
    color: 'white',
  },
});
