import { IWord, IWordOnCanvas } from "../Interfaces";
import defaultWords from "../assets/defaultLibrary";

function loadWordLibrary() {
  if (localStorage.getItem("wordLibrary") == null) {
    return defaultWords as IWord[];
  }

  return JSON.parse(localStorage.getItem("wordLibrary") || "[]") as IWord[]
  /*
  return new Promise((resolve, reject) => {
    // Step 1: Open the database
    let request = indexedDB.open("wordDatabase", 1);

    request.onsuccess = function (event: any) {
      let db = event.target.result;

      // Step 2: Create a transaction
      let transaction = db.transaction(["wordLibrary"], "readonly");

      // Step 3: Access the object store
      let objectStore = transaction.objectStore("wordLibrary");

      // Step 4: Get the record
      let getRequest = objectStore.get(1);

      getRequest.onsuccess = function () {
        if (getRequest.result) {
          // If the record exists, resolve with the words array
          resolve(getRequest.result.words);
        } else {
          // If the record does not exist, resolve with "ok"
          resolve("ok");
        }
      };

      getRequest.onerror = function () {
        // Handle errors in the get request
        reject("Error fetching record from object store: " + getRequest.error);
      };
    };

    request.onerror = function (event: any) {
      // Handle errors in opening the database
      reject("Database error: " + event.target.error);
    };
  });*/
}

function updateWordLibrary(wl: IWord[]) {
  localStorage.setItem('wordLibrary', JSON.stringify(wl));
  /*
  let request = indexedDB.open("wordDatabase", 1);
  request.onupgradeneeded = function (event: any) {
    let db = event.target.result;

    if (!db.objectStoreNames.contains("wordLibrary")) {
      db.createObjectStore("wordLibrary", { keyPath: "id", autoIncrement: true });
    }
  };

  request.onsuccess = function (event: any) {
    let db = event.target.result;

    // Step 3: Create a transaction
    let transaction = db.transaction(["wordLibrary"], "readwrite");

    // Step 4: Access the object store
    let objectStore = transaction.objectStore("wordLibrary");

    // Step 5: Check if the record exists
    let getRequest = objectStore.get(1);

    getRequest.onsuccess = function () {
      let wordLibrary;
      if (getRequest.result) {
        // If the record exists, update it
        wordLibrary = wl;
      } else {
        // If the record does not exist, create a new one
        wordLibrary = defaultWords;
      }

      // Step 6: Add or update the record
      let putRequest = objectStore.put({ id: 1, words: wordLibrary });

      putRequest.onsuccess = function () {
        console.log("wordLibrary updated in IndexedDB");
      };

      putRequest.onerror = function () {
        console.error("Error adding/updating array in the object store:", putRequest.error);
      };
    };

    getRequest.onerror = function () {
      console.error("Error fetching record from object store:", getRequest.error);
    };

    transaction.oncomplete = function () {
      console.log("IndexedDB transaction completed");
    };

    transaction.onerror = function () {
      console.error("Transaction not opened due to error:", transaction.error);
    };
  };

  request.onerror = function (event: any) {
    console.error("Database error:", event.target.error);
  };
*/
}

function loadWords() {
  return JSON.parse(localStorage.getItem("words") || "[]") as IWordOnCanvas[]
}

function updateWords(words:IWordOnCanvas[]) {
  return localStorage.setItem('words', JSON.stringify(words));
}

function loadTheme() {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    return "dark"
  } else {
    return "";
  }
}

function loadMode() {
  if (localStorage.getItem("mode") == null)
    return "normal";

  return localStorage.getItem("mode");
}



export { loadWordLibrary, updateWordLibrary, loadWords, updateWords, loadTheme, loadMode };