


(function () {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey('MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCTV3pBapJz29aR4kmDZUB/CTBYzUQC+4rDLTb0tHLot4kCah6p0iQWuxRvTkzsso4i6JHUKc4+yYC0HVHcFVRlPxH74yORfzYTD+FKLbVQLPlb5AzMIkrXJIjVJfFLefIjqUUKOqGGAGT/j5PbsaFeZ0VWSlMteU3roM3A+8LTZwIDAQAB');
    window.OBJ_RSA_ENCRYPT = encrypt;
})();


// rsa 加密调用方法
// var encryptText = window.OBJ_RSA_ENCRYPT.encrypt(s);