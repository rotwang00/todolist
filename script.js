let items = [
  {
    title: "Mow the yard",
    notes: "Gotta keep that grass cut",
    urgency: "moderate",
    completed: false,
  },

  {
    title: "Learn to program",
    notes: "C'mon, just do it!",
    urgency: "Now!",
    complete: false,
  },
];

let tasks = document.getElementById("tasks");

buildDisplay();

function buildDisplay() {
  for (let item of items) {
    let title = item.title;
    let notes = item.notes;
    let urgency = item.urgency;
    let completed = item.completed;

    let task = document.createElement("li");
    task.textContent = task.textContent + title + notes + urgency + completed;
    tasks.appendChild(task);
  }
}
