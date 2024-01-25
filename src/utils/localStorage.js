const parse = (item) => {
  return item === null ? null : JSON.parse(item);
};

const stringify = (item) => {
  return JSON.stringify(item);
};

function getItem(key) {
  return parse(localStorage.getItem(key));
}

function setItem(key, data) {
  localStorage.setItem(key, stringify(data));
}

function removeItem(key) {
  localStorage.removeItem(key);
}

function clear() {
  localStorage.clear();
}

function length() {
  return localStorage.length;
}

export { getItem, setItem, removeItem, clear, length };
