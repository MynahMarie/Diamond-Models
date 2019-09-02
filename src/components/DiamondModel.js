import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Keyboard,
  Button,
} from 'react-native';
import Modal from 'react-native-modal';
import {BLUE, GRAY} from '../config/constants';

export default class DiamondModel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputs: [
        {id: 'box1', text: '', isFocused: false},
        {id: 'box2', text: '', isFocused: false},
        {id: 'box3', text: '', isFocused: false},
        {id: 'box4', text: '', isFocused: false},
        {id: 'box5', text: '', isFocused: false},
        {id: 'box6', text: '', isFocused: false},
        {id: 'box7', text: '', isFocused: false},
        {id: 'box8', text: '', isFocused: false},
        {id: 'box9', text: '', isFocused: false},
        {id: 'box10', text: '', isFocused: false},
      ],
      modalVisible: false,
    };
  }

  isNext = (arr, idx) => {
    const prevInputs = arr.slice(0, idx).filter(el => el.text === '').length;
    return prevInputs === 0;
  };

  _onChangeText = (text, idx) => {
    let inputs = this.state.inputs.slice();
    const next = this.isNext(inputs, idx);

    if (!next) {
      inputs[idx].text = '';
      this.setState({inputs, modalVisible: true});
    } else {
      inputs = this.state.inputs.slice();
      inputs[idx].text = text;
      this.setState({inputs});
    }
  };

  _onFocus = idx => {
    let inputs = this.state.inputs.slice();
    inputs[idx].isFocused = true;
    this.setState({inputs});
  };

  _onBlur = idx => {
    let inputs = this.state.inputs.slice();
    inputs[idx].isFocused = false;
    this.setState({inputs});
  };

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };

  clearModel = () => {
    let inputs = this.state.inputs.slice();
    inputs.forEach(item => {
      item.text = '';
    });
    this.setState({inputs});
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <Modal
          isVisible={this.state.modalVisible}
          animationInTiming={600}
          animationOutTiming={600}
          coverScreen={false}
          hasBackdrop={false}
          avoidKeyboard={true}
          style={styles.modal}>
          >
          <View style={{flex: 1, margin: 20}}>
            <Text>Please fill in the boxes in the right order...</Text>
            <View style={{margin: 30}}>
              <Button
                onPress={() => this.setModalVisible(!this.state.modalVisible)}
                title="OK"
                color={BLUE}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.row}>
          <TextInput
            ref={ref => {
              this._box1 = ref;
            }}
            placeholder={'Start Here'}
            multiline={true}
            onFocus={() => this._onFocus(0)}
            onBlur={() => this._onBlur(0)}
            style={[
              styles.inputBox,
              this.state.inputs[0].isFocused ? {borderWidth: 2} : '',
            ]}
            onChangeText={text => this._onChangeText(text, 0)}
            returnKeyType="next"
            onSubmitEditing={() => this._box2 && this._box2.focus()}
            value={this.state.inputs[0].text}
          />
        </View>

        <View style={styles.row}>
          <TextInput
            ref={ref => {
              this._box3 = ref;
            }}
            placeholder={'3'}
            multiline={true}
            onFocus={() => this._onFocus(2)}
            onBlur={() => this._onBlur(2)}
            style={[
              styles.inputBox,
              this.state.inputs[2].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="next"
            onSubmitEditing={() => this._box4 && this._box4.focus()}
            onChangeText={text => this._onChangeText(text, 2)}
            value={this.state.inputs[2].text}
          />
          <TextInput
            ref={ref => {
              this._box2 = ref;
            }}
            placeholder={'2'}
            multiline={true}
            onFocus={() => this._onFocus(1)}
            onBlur={() => this._onBlur(1)}
            style={[
              styles.inputBox,
              this.state.inputs[1].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="next"
            onSubmitEditing={() => this._box3 && this._box3.focus()}
            onChangeText={text => this._onChangeText(text, 1)}
            value={this.state.inputs[1].text}
          />
        </View>

        <View behavior="padding" style={styles.row}>
          <TextInput
            ref={ref => {
              this._box7 = ref;
            }}
            placeholder={'7'}
            multiline={true}
            onFocus={() => this._onFocus(6)}
            onBlur={() => this._onBlur(6)}
            style={[
              styles.inputBox,
              this.state.inputs[6].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="next"
            onSubmitEditing={() => this._box8 && this._box8.focus()}
            onChangeText={text => this._onChangeText(text, 6)}
            value={this.state.inputs[6].text}
          />
          <TextInput
            ref={ref => {
              this._box6 = ref;
            }}
            placeholder={'6'}
            multiline={true}
            onFocus={() => this._onFocus(5)}
            onBlur={() => this._onBlur(5)}
            style={[
              styles.inputBox,
              this.state.inputs[5].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="next"
            onSubmitEditing={() => this._box7 && this._box7.focus()}
            onChangeText={text => this._onChangeText(text, 5)}
            value={this.state.inputs[5].text}
          />
          <TextInput
            ref={ref => {
              this._box5 = ref;
            }}
            placeholder={'5'}
            multiline={true}
            onFocus={() => this._onFocus(4)}
            onBlur={() => this._onBlur(4)}
            style={[
              styles.inputBox,
              this.state.inputs[4].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="next"
            onSubmitEditing={() => this._box6 && this._box6.focus()}
            onChangeText={text => this._onChangeText(text, 4)}
            value={this.state.inputs[4].text}
          />
          <TextInput
            ref={ref => {
              this._box4 = ref;
            }}
            placeholder={'4'}
            multiline={true}
            onFocus={() => this._onFocus(3)}
            onBlur={() => this._onBlur(3)}
            style={[
              styles.inputBox,
              this.state.inputs[3].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="next"
            onSubmitEditing={() => this._box5 && this._box5.focus()}
            onChangeText={text => this._onChangeText(text, 3)}
            value={this.state.inputs[3].text}
          />
        </View>

        <View behavior="padding" style={styles.row}>
          <TextInput
            ref={ref => {
              this._box9 = ref;
            }}
            placeholder={'9'}
            multiline={true}
            onFocus={() => this._onFocus(8)}
            onBlur={() => this._onBlur(8)}
            style={[
              styles.inputBox,
              this.state.inputs[8].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="next"
            onSubmitEditing={() => this._box10 && this._box10.focus()}
            onChangeText={text => this._onChangeText(text, 8)}
            value={this.state.inputs[8].text}
          />
          <TextInput
            ref={ref => {
              this._box8 = ref;
            }}
            placeholder={'8'}
            multiline={true}
            onFocus={() => this._onFocus(7)}
            onBlur={() => this._onBlur(7)}
            style={[
              styles.inputBox,
              this.state.inputs[7].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="next"
            onSubmitEditing={() => this._box9 && this._box9.focus()}
            onChangeText={text => this._onChangeText(text, 7)}
            value={this.state.inputs[7].text}
          />
        </View>

        <View behavior="padding" style={styles.row}>
          <TextInput
            ref={ref => {
              this._box10 = ref;
            }}
            placeholder={'Your Gap'}
            multiline={true}
            onFocus={() => this._onFocus(9)}
            onBlur={() => this._onBlur(9)}
            style={[
              styles.inputBox,
              this.state.inputs[9].isFocused ? {borderWidth: 2} : '',
            ]}
            returnKeyType="done"
            onSubmitEditing={() => Keyboard.dismiss()}
            onChangeText={text => this._onChangeText(text, 9)}
            value={this.state.inputs[9].text}
          />
        </View>
        <View style={styles.btn}>
          <Button color={GRAY} onPress={this.clearModel} title="Clear" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    margin: 7,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  inputBox: {
    backgroundColor: 'white',
    borderColor: BLUE,
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 16,
  },

  modal: {
    backgroundColor: 'white',
    borderColor: BLUE,
    borderRadius: 10,
    borderWidth: 3,
    padding: 22,
  },

  btn: {
    marginRight: '25%',
    marginLeft: '25%',
    marginTop: 30,
    marginBottom: 30,
  },
});
