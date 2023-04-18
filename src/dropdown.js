const dropdown = () => {
  const navFile = document.querySelector("#navFile");
  const navEdit = document.querySelector("#navEdit");
  const navView = document.querySelector("#navView");
  const navHelp = document.querySelector("#navHelp");
  const fileMenu = document.querySelector(".fileMenu");
  const editMenu = document.querySelector(".editMenu");
  const viewMenu = document.querySelector(".viewMenu");
  const helpMenu = document.querySelector(".helpMenu");

  navFile.addEventListener("click", function () {
    if (fileMenu.classList.contains("hidden")) {
      fileMenu.classList.remove("hidden");
    } else {
      fileMenu.classList.add("hidden");
    }
  });
  navEdit.addEventListener("click", function () {
    if (editMenu.classList.contains("hidden")) {
      editMenu.classList.remove("hidden");
    } else {
      editMenu.classList.add("hidden");
    }
  });
  navView.addEventListener("click", function () {
    if (viewMenu.classList.contains("hidden")) {
      viewMenu.classList.remove("hidden");
    } else {
      viewMenu.classList.add("hidden");
    }
  });
  navHelp.addEventListener("click", function () {
    if (helpMenu.classList.contains("hidden")) {
      helpMenu.classList.remove("hidden");
    } else {
      helpMenu.classList.add("hidden");
    }
  });
};

export { dropdown };
