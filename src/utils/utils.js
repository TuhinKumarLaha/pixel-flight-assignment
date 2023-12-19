import CryptoJS from "crypto-js";

export const getEncrypted = (secretKey = "aLtAeNCrypT", value) => {
  const encrypted = CryptoJS.AES.encrypt(
    JSON.stringify(value),
    secretKey
  ).toString();

  return encrypted;
};
