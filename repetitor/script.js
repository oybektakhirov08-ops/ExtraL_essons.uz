const tutors = [

  { name: "Амина", subject: "math", price: "80 000 сум" },
  { name: "Данияр", subject: "english", price: "100 000 сум" },
  { name: "Мария", subject: "russian", price: "70 000 сум" },
  { name: "Илья", subject: "physics", price: "90 000 сум" },
  { name: "Ольга", subject: "chemistry", price: "85 000 сум" },
  { name: "София", subject: "biology", price: "95 000 сум" },
  { name: "Никита", subject: "math", price: "75 000 сум" },
  { name: "Екатерина", subject: "english", price: "105 000 сум" },
  { name: "Алексей", subject: "physics", price: "88 000 сум" },
  { name: "Виктория", subject: "russian", price: "72 000 сум" },
  { name: "Дмитрий", subject: "chemistry", price: "90 000 сум" },
  { name: "Марина", subject: "biology", price: "92 000 сум" },
  { name: "Ирина", subject: "math", price: "78 000 сум" },
  { name: "Максим", subject: "physics", price: "85 000 сум" },
  { name: "Алина", subject: "english", price: "98 000 сум" }
];
const tutorsContainer = document.getElementById("tutors");
const select = document.getElementById("subjectSelect");

function renderTutors(list) {
  tutorsContainer.innerHTML = "";

  list.forEach((tutor, index) => {
    const div = document.createElement("div");
    div.className = "tutor";

    div.innerHTML = 
     ` <h4>${tutor.name}</h4>
      <p>Предмет: ${tutor.subject}</p>
      <p class="price">${tutor.price}</p>
      <button class="btn">Оставить заявку</button>`
    ;

    tutorsContainer.appendChild(div);

    // плавное появление с задержкой
    setTimeout(() => {
      div.classList.add("show");
    }, index * 150);
  });
}

// эффект нажатия селекта
select.addEventListener("mousedown", () => {
  select.style.transform = "scale(0.97)";
});
select.addEventListener("mouseup", () => {
  select.style.transform = "scale(1)";
});

// фильтрация
select.addEventListener("change", () => {
  const value = select.value;
  const filtered = value === "all" ? tutors : tutors.filter(t => t.subject === value);
  renderTutors(filtered);
});

// первая отрисовка
renderTutors(tutors);