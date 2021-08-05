import CryptoJS from "crypto-js";
const secretKey = "milsimops9517534568521milsimops";

export default {
  //set local storage
  SetItem: function (key, value) {
    localStorage.setItem(key, value);
  },
  SetMultiItem: function (array) {
    array.forEach((item) => {
      localStorage.setItem(item.key, item.value);
    });
  },

  //get local storage
  GetItem: function (key) {
    return localStorage.getItem(key);
  },

  //remove local storage
  RemoveItem: function (key) {
    localStorage.removeItem(key);
  },
  RemoveMultiItem: function (key) {
    var array = key.split(",");
    array.forEach((key) => {
      localStorage.removeItem(key);
    });
  },
  ClearAll: function () {
    localStorage.clear();
  },

  //encrypt/decrypt data
  Encrypt: function (value) {
    if (!value) return;
    return CryptoJS.AES.encrypt(value, secretKey).toString();
  },
  Decrypt: function (value) {
    if (!value) return;
    var bytes = CryptoJS.AES.decrypt(value, secretKey);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    return originalText;
  },
};
