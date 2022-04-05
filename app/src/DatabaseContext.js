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

  const getAllPosts = async () => {
    const collectionSnapShot = collection(db, 'Post');
    const snapShot = await getDocs(collectionSnapShot);
    return snapShot.docs;

  }

  const getPost = async (post_id) => {
    const post = await getDoc(doc(db, `Post/${post_id}`));
    return post;
  }

  const getUserData = async (user_id) => {
    const dataSnapShot = getDoc(doc(db, `User/${user_id}`));
    return dataSnapShot;
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

  async function addPost(dataToUpload) {
    try {
      const docRef = await addDoc(collection(db, 'Post'), dataToUpload);
    }
    catch (e) {
      console.error("Error adding document to firestore: ", e);
    }
  }

  const value = {
    currentData,
    addPost,
    getPost,
    getUserData,
    getAllPosts
  };

  return (
    <DatabaseContext.Provider value={value}>
      {!loading && children}
    </DatabaseContext.Provider>
  );
}
