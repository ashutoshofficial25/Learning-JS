function jarvis(n, str, o, c, result) {
  if (str.length == n * 2) {
    result.push(str);
    return;
  }
  if (o == 0) {
    str = str + "(";
    jarvis(n, str, o + 1, c, result);
    return result;
  } else if (o == n) {
    str = str + ")";
    jarvis(n, str, o, c + 1, result);
  } else {
    jarvis(n, str + "(", o + 1, c, result);
    if (o != c) jarvis(n, str + ")", o, c + 1, result);
  }
}

jarvis(3, "", 0, 0, []);
