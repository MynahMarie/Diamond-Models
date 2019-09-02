import React from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
import {BLUE, GRAY} from '../config/constants';

const EnglishHowTo = props => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Text style={styles.header}>How to make a diamond model</Text>

      <Text style={styles.subheader}>Step 1</Text>
      <Text style={styles.info}>
        Write in the top box the existing situation you want to explore.{'\n\n'}
        It can be just about anything. Especially worth exploring if it disturbs
        your peace of mind. For example: "Tension in the workplace" or "I have a
        flat tire in my bicycle".{'\n\n'}
        Hold the feeling, the emotion, (in metaistic -language it is called
        "vibration") that the situation makes you feel and write in the 2 slots
        beneath the first 2 associations it evokes in you. The first one in the
        right box and the second one in the left.{'\n'}
      </Text>

      <Text style={styles.subheader}>Step 2</Text>
      <Text style={styles.info}>
        Now concentrate on the word or pair of words in the right box, feel and
        vibrate its frequency, and write in the 2 boxes below the first two
        associations that come to you with the sensation, the first in the right
        slot and the second in the left.{'\n\n'}Now move to the word on the left
        of the model.{'\n'}
        Feel it, connect with the "vibration" it brings and write the first two
        associations that come to your mind first in the right box and second in
        the left.{'\n'}
      </Text>

      <Text style={styles.subheader}>Step 3</Text>
      <Text style={styles.info}>
        Look at the sensations that are in the two boxes on the bottom right.
        {'\n\n'}
        Feel, connect to the sensation in right slot and then connect it to the
        sensation in the left one.{'\n\n'}
        Write in the box below the first association that comes up.{'\n\n'}
        Move to the left side, sensing the "vibration" of the right slot and
        connecting the "vibration" of the left slot.{'\n\n'}
        Write down the association that you have came up with in the box below.
        {'\n'}
      </Text>

      <Text style={styles.subheader}>Step 4</Text>
      <Text style={styles.info}>
        Take a look at the last pair of vibrations that appear. Concentrate on
        the right vibration, feel it and immediately connect with it the
        sensations that emerge from the left box.
        {'\n\n'}
        Connect the two vibrations to each other through a free association.
        {'\n\n'}
        Write the subconscious vibration that leads to the unwanted situation
        you you arestyles.infog. In Metaism, it's called the "gap." Like the
        between what you want and what your current situation is.{'\n\n'}
        In order to allow bridging of this gap, and achieving the desired state
        of affairs, we must do some conscious work that leads to denounce or
        give up the gap. This process is what we call "transformation."{'\n'}
      </Text>

      <Text style={styles.header}>
        Highlights for working with the diamond model
      </Text>
      <Text style={styles.info}>
        Do not repeat the same word or vibration twice.{'\n\n'}
        Always move from right to left, to allow synchronization of the two
        minds. Do not skip any step and skip to the next step. {'\n\n'}
        Vibrations and sensations that illustrate “solution” (how i solve) to
        negative feelings should be avoided.
        {'\n\n'}
        For example, if I have two slots of "fear" and "nausea," and the
        association that comes to me is "escape," it is likely that “escape” is
        a “solution” that I find to these unpleasant sensations, when their
        combination is clearly unbearable. The "escape" in this case is the
        "solution" to the resulting conflict.
        {'\n\n'}
        In our investigation, we strive to reach the depth of feeling we are
        fleeing from. So it could be "death" for example.
        {'\n\n\n\n\n\n\n\n'}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginLeft: 15,
    marginRight: 15,
  },
  header: {
    color: BLUE,
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 30,
    marginBottom: 20,
  },
  subheader: {
    color: GRAY,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  info: {
    fontSize: 14,
    textAlign: 'justify',
  },
});

export default EnglishHowTo;
