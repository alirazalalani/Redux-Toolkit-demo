import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {update, remove} from '../reduxx/user/userSlice';

const Update = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  // console.log(name, email);
  const handleUpdate = () => {
    dispatch(update({name, email}));
  };
  const handleDelete = () => {
    console.log('hd');
    dispatch(remove());
  };
  return (
    <View style={{marginTop: 20, paddingHorizontal: 10}}>
      <View>
        <Text>User Name</Text>
        <TextInput
          placeholder={user.name}
          style={{borderWidth: 1}}
          value={name}
          onChangeText={e => setName(e)}
        />
      </View>
      <View>
        <Text>Email</Text>
        <TextInput
          placeholder={user.email}
          style={{borderWidth: 1}}
          value={email}
          onChangeText={e => setEmail(e)}
        />
      </View>
      <View>
        <Text>PAssword</Text>
        <TextInput placeholder="Enter PAssword" style={{borderWidth: 1}} />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          alignSelf: 'center',
          marginTop: 20,
        }}
        onPress={handleUpdate}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Update
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 20,
          alignSelf: 'center',
          marginTop: 20,
        }}
        onPress={handleDelete}>
        <Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Update;

const styles = StyleSheet.create({});
