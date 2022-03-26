import React, { useState, useContext, useEffect, createContext } from 'react';
import { db } from './firebase';
import {
  doc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';

const DatabaseContext = createContext();

export function useDatabase() {
  return useContext(DatabaseContext);
}

export function DatabaseProvider({ children }) {
  const [currentData, setData] = useState();
  const [loading, setLoading] = useState(true);

  const userCollectionRef = collection(db, 'User');
  //const userCollectionRefQuery = query(collection(db,'User') where ("user_id"))
  const postCollectionRef = collection(db, 'Post');

  const getUserData = async (passed_id) => {
    const docs = await getDocs(userCollectionRef);
    docs.forEach((doc) => {
      const userData = doc.data();

      if (userData.user_id === passed_id) {
        return userData;
      } else {
        console.log('worng');
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'Post'), (snapshot) => {
      const newData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setData(newData);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  function addPost(id, landmark, title, description) {
    const postRef = doc(
      db,
      'UserID',
      'Landmark',
      'Title',
      'Description',
      'Date'
    );
    return setDoc(
      postRef,
      { UserID: id },
      { Landmark: landmark },
      { Title: title },
      { Description: description },
      { Date: Date.now() }
    );
  }

  const value = {
    currentData,
    addPost,
    getUserData,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {!loading && children}
    </DatabaseContext.Provider>
  );
}
