function checkSpam(str) {
  let conversionStr = str.toLowerCase();

  if (conversionStr.includes("viagra") || conversionStr.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}

alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));
