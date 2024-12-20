const SERVICES_1 = {
  Headings: [
    "Apple Services",
    "Canva Pro",
    "Youtube Premium",
    "Spotify",
    "Gift Cards",
    "Accsell blog",
  ],
  col_1: [
    "General Services",
    "Data Center",
    "Cloud Storage",
    "Apple Subscribtions",
  ],
  col_2: ["Graphics Services", "Video and Photo Edit", "Stock Fotages"],
  col_3: [
    "Study Services",
    "Language Learning",
    "Code Learning",
    "Proccesing Courses",
    "Music Learning",
  ],
  col_4: [
    "Game Services",
    "PlayStation",
    "Prime Gaming",
    "Ping Optimizition",
    "Steam",
  ],
};
const SERVICES_2 = {
  Headings: [
    "Random Steam key",
    "Netflix persian subtitle",
    "PS4 & PS5 Plus",
    "Apple Music",
    "Game Pass",
    "USA Digital Number",
  ],
  col_1: [
    "Steaming Services",
    "Animation & Cartoons",
    "Movies",
    "Series",
    "Anime",
    "Online TV",
    "Sports",
  ],
};

// document.querySelector("#services-1").addEventListener("mouseover", () => {
//   const content = document.querySelector(".drop-down ul");
//   console.log('sadasdasdsad');

//   content.style.display = content.style.display === "flex" ? "none" : "flex";
// });

console.log(SERVICES_1.Headings);

document.querySelector(".drop-down .Headings").innerHTML =
  SERVICES_1.Headings.map((element) => `<li>${element}</li>`).join(" ");
document.querySelector(".drop-down .col-1").innerHTML = SERVICES_1.col_1
  .map((element) => `<li>${element}</li>`)
  .join(" ");
document.querySelector(".drop-down .col-2").innerHTML = SERVICES_1.col_2
  .map((element) => `<li>${element}</li>`)
  .join(" ");
document.querySelector(".drop-down .col-3").innerHTML = SERVICES_1.col_3
  .map((element) => `<li>${element}</li>`)
  .join(" ");
document.querySelector(".drop-down .col-4").innerHTML = SERVICES_1.col_4
  .map((element) => `<li>${element}</li>`)
  .join(" ");

document.querySelector(".drop-down-2 .Headings").innerHTML =
  SERVICES_2.Headings.map((element) => `<li>${element}</li>`).join(" ");
document.querySelector(".drop-down-2 .col-1").innerHTML = SERVICES_2.col_1
  .map((element) => `<li>${element}</li>`)
  .join(" ");
