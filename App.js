import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';

export default function App() {



  //----------------------------------    WRITING THE DATA FROM FIRESTORE    -------------------------------------------------
  useEffect(() => {


    //writing data by random unique id
    // firestore()
    //   .collection('Users')
    //   .add({
    //     name: 'Ada Lovelace',
    //     age: 30,
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });


     //writing data by customized unique id
    // firestore()
    //   .collection('Users')
    //   .doc('ABC')
    //   .set({
    //     name: 'Ada Lovelace',
    //     age: 30,
    //   })
    //   .then(() => {
    //     console.log('User added!');
    //   });


      //update any specific value
    // firestore()
    //   .collection('Users')
    //   .doc('ABC')
    //   .update({
    //     name: 'Thomas',
    //     age: 22,
    //   })
    //   .then(() => {
    //     console.log('User updated!');
    //   });



  }, []);



  //----------------------------------    READING THE DATA FROM FIRESTORE    -------------------------------------------------
  // useEffect(() => {


  //To filter documents within a collection, the where method can be chained onto a collection reference. 
  // firestore()
  //   .collection('Users')
  // Filter 1 results
  // .where('id', '>=', 52)

  // Filter by 'OR' results
  // .where('campus', 'in', ['ryk', 'bwp'])

  //We also apply limit to our fetch data
  // .limit(1)

  //  To order the documents by a specific value, use the orderBy method:
  // .orderBy('id', 'desc')


  // .get()
  // .then(querySnapshot => {

  //   console.log("Total size: ",querySnapshot.size);

  //   querySnapshot.forEach(documentSnapshot => {
  //     console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().name);
  //   });

  // });


  //QUERY SNAPSHOT TO PICK ALL VALUES FROM THE TABLE
  // firestore()
  //   .collection('Users')
  //   .get()
  //   .then(querySnapshot => {
  //     console.log('Total users: ', querySnapshot.size);

  //     querySnapshot.forEach(documentSnapshot => {
  //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().id);
  //     });
  //   });


  // SPECIFIC DOCUMENT SNAPSHOT 
  // firestore()
  // .collection('Users')
  // .get()
  // .then(documentSnapshot => {
  //   console.log('User exists: ', documentSnapshot.exists);

  //   if (documentSnapshot.exists) {
  //     console.log('User data: ', documentSnapshot.data());
  //   }
  //   else {
  //     console.log("No document exists");
  //   }
  // });

  // }, []);


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})