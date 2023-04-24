const dropdown = () => {
  const navFile = document.querySelector("#navFile");
  const navEdit = document.querySelector("#navEdit");
  const navView = document.querySelector("#navView");
  const navHelp = document.querySelector("#navHelp");
  const fileMenu = document.querySelector(".fileMenu");
  const editMenu = document.querySelector(".editMenu");
  const viewMenu = document.querySelector(".viewMenu");
  const helpMenu = document.querySelector(".helpMenu");

  navFile.addEventListener("mouseover", function () {
    fileMenu.classList.remove("hidden");
  });
  navFile.addEventListener("mouseout", function () {
    fileMenu.classList.add("hidden");
  });
  fileMenu.addEventListener("mouseover", function () {
    fileMenu.classList.remove("hidden");
  });
  fileMenu.addEventListener("mouseout", function () {
    fileMenu.classList.add("hidden");
  });
  navEdit.addEventListener("mouseover", function () {
    editMenu.classList.remove("hidden");
  });
  navEdit.addEventListener("mouseout", function () {
    editMenu.classList.add("hidden");
  });
  editMenu.addEventListener("mouseover", function () {
    editMenu.classList.remove("hidden");
  });
  editMenu.addEventListener("mouseout", function () {
    editMenu.classList.add("hidden");
  });
  navView.addEventListener("mouseover", function () {
    viewMenu.classList.remove("hidden");
  });
  navView.addEventListener("mouseout", function () {
    viewMenu.classList.add("hidden");
  });
  viewMenu.addEventListener("mouseover", function () {
    viewMenu.classList.remove("hidden");
  });
  viewMenu.addEventListener("mouseout", function () {
    viewMenu.classList.add("hidden");
  });
  navHelp.addEventListener("mouseover", function () {
    helpMenu.classList.remove("hidden");
  });
  navHelp.addEventListener("mouseout", function () {
    helpMenu.classList.add("hidden");
  });
  helpMenu.addEventListener("mouseover", function () {
    helpMenu.classList.remove("hidden");
  });
  helpMenu.addEventListener("mouseout", function () {
    helpMenu.classList.add("hidden");
  });
};

export { dropdown };
