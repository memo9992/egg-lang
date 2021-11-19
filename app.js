function get(id) {
    return document.getElementById(id);
  }
function add_egg(s) {
  let string = s.split("");
  let pattern = /[aeiuo]/i;
  for (let i = 0; i < string.length; i++) {
    if (pattern.exec(string[i]) != null) {
      string[i] = "egg" + string[i];
    }
  }
  return string.join("");
}
function remove_egg(s) {
  let temp = s.split(" ");

  for (let index = 0; index < temp.length; index++) {
    if (/eggegg/i.exec(temp[index]) != null) {
      temp[index] = temp[index].replaceAll("eggegg", "egg");
    } else {
      temp[index]   = temp[index].replaceAll("egg", "");
    }
  }
  return temp;
}
function clearText() {
  get("output").innerText = "";
}

function make_egg() {
  
  let option = get("options").value;
  clearText();
  if (option == "1")
    get("output").innerText = add_egg(
      get("input").value
    );
  else if (option == "2")
    get("output").innerText = remove_egg(
        get("input").value
    );
}
