const verticalNav = document.querySelector(".navContainer");
verticalNav.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("element clicked:", e.target.id);
  verticalNav.classList.remove("visible");
});

const hamburgerBtn = document.querySelector(".hamburger");
hamburgerBtn.addEventListener("click", () => {
  verticalNav.classList.add("visible");
});

const closeBtn = document.querySelector(".closeBox");
closeBtn.addEventListener("click", () => {
  verticalNav.classList.remove("visible");
});

const currentDate = new Date();
let currentYear = currentDate.getFullYear();

const modified = new Date(document.lastModified);

const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: true,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: true,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

function createCourseCard(course) {
  const courseContainer = document.querySelector("#courseContainer");
  const card = document.createElement("div");
  courseContainer.appendChild(card);
  const courseName = document.createElement("p");
  courseName.innerText = `${course.subject} ${course.number}`;
  card.appendChild(courseName);
}

function showCourses(filterfunc) {
  const courseContainer = document.querySelector("#courseContainer");
  courseContainer.innerText = "";
  courses.filter(filterfunc).forEach((course) => createCourseCard(course));
}

function showAll(course) {
  return true;
}

function showWDD(course) {
  const courseSubject = course.subject;
  return courseSubject == "WDD";
}

function showCSE(course) {
  const courseSubject = course.subject;
  return courseSubject == "CSE";
}

allAnchor = document.querySelector("#menu-all");
wddAnchor = document.querySelector("#menu-wdd");
cseAnchor = document.querySelector("#menu-cse");

allAnchor.addEventListener("click", () => {
  showCourses(showAll);
});

wddAnchor.addEventListener("click", () => {
  showCourses(showWDD);
});

cseAnchor.addEventListener("click", () => {
  showCourses(showCSE);
});

showCourses(showAll);

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = modified;
