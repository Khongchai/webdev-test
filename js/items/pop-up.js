/**
 *
 * @param {"add" | "remove"} action
 */
let timeout = null;

//Amount user added during the life of one toast.
let addCount = 0;
let removeCount = 0;
export default function popUp(action) {
  clearTimeout(timeout);
  const toast = document.getElementById("toast");

  toast.style.opacity = 1;

  if (action === "add") {
    addCount += 1;
    toast.innerHTML = "Added" + " " + addCount;
  } else if (action === "remove") {
    removeCount += 1;
    toast.innerHTML = "Removed" + " " + removeCount;
  } else {
    toast.innerHTML = "Functionality not implemented; not in the requirements.";
  }

  timeout = setTimeout(() => {
    toast.style.opacity = 0;

    addCount = 0;
    removeCount = 0;
  }, 2000);
}
