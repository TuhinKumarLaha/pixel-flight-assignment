import CryptoJS from "crypto-js";

export const getEncrypted = (value, secretKey = "aLtAeNCrypT") => {
  //   console.log({ value });
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    secretKey
  ).toString();

  return encrypted;
};

export const getDecrypted = (encryptedValue, secretKey = "aLtAeNCrypT") => {
  const decrypted = CryptoJS.AES.decrypt(encryptedValue, secretKey).toString(
    CryptoJS.enc.Utf8
  );

  return decrypted;
};
