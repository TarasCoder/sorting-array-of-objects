const table = document.getElementById("myTable");
let coursesData = [
  { name: "Course delegating part 1", value: 1 },
  { name: "Course deleg part 5", value: 5 },
  { name: "Course delegating part 3", value: 3 },
  { name: "Course del part 2", value: 2 },
  { name: "Course del part 7", value: 7 },
  { name: "Course del part 7", value: 7 },
  { name: "Course del part 4", value: 4 },
];
const renderTableRow = (name = "Other course", value = 0) => {
  const tr = document.createElement("tr");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  td1.innerText = name;
  td2.innerText = value;
  tr.append(td1, td2);
  table.append(tr);
};
// Sorting from bigger value to lower
let sortedData = coursesData.sort((a,b) => {
    return b.value - a.value
})
// Rendering data on page
sortedData.forEach((item) => {
  renderTableRow(item.name, item.value);
});


