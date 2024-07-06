let globalid = 1;

function markasdone(todoid) {
  const parent = document.getElementById(todoid);
  const doneTime = new Date().toLocaleString();
  parent.children[3].innerHTML = `Done! (Time: ${doneTime})`;
}

function createchild(title, discription, time, id) {
  const child = document.createElement("div");
  const firstgrandparent = document.createElement("div");
  firstgrandparent.innerHTML = `TITLE: ${title}`;
  const secondgrandparent = document.createElement("div");
  secondgrandparent.innerHTML = `DISCRIPTION: ${discription}`;
  const thirdgrandparent = document.createElement("div");
  thirdgrandparent.innerHTML = `Time to do: ${time}`;
  const button = document.createElement("button");
  button.innerHTML = "mark-as-done";
  button.setAttribute("onclick", `markasdone(${id})`);
  const doneStatus = document.createElement("div");
  child.appendChild(firstgrandparent);
  child.appendChild(secondgrandparent);
  child.appendChild(thirdgrandparent);
  child.appendChild(button);
  child.appendChild(doneStatus);
  child.setAttribute("id", id);
  return child;
}

function addtodo() {
  const title = document.getElementById("title").value;
  const discription = document.getElementById("discription").value;
  const time = document.getElementById("time").value;
  const parent = document.getElementById("todos");
  const newchild = createchild(title, discription, time, globalid++);
  parent.appendChild(newchild);

  // Set an alarm
  const alarmTime = new Date(time).getTime();
  const currentTime = new Date().getTime();
  const timeToAlarm = alarmTime - currentTime;

  if (timeToAlarm > 0) {
    setTimeout(() => {
      alert(`It's time to: ${title}`);
    }, timeToAlarm);
  }
}
