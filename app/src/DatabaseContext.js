import React, { useState, useContext, useEffect, createContext } from 'react';
import { db } from './firebase';
import {
  collection,
  addDoc,
  getDocs,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';

const DatabaseContext = createContext();

export function useDatabase() {
  return useContext(DatabaseContext);
}

export function DatabaseProvider({ children }) {
  const [currentData, setData] = useState();
  const [loading, setLoading] = useState(true);

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

  const value = {
    currentData,
  };

  return (
    <DatabaseContext.Provider value={value}>
      {!loading && children}
    </DatabaseContext.Provider>
  );
}
