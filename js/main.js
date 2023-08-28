const element = document.getElementById("phone");
const maskOptions = {
  mask: "+{7}(000)000-00-00",
  lazy: false,
};
const mask = new IMask(element, maskOptions);

/*change/save actions */
document.querySelectorAll(".form__action_change").forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = button.previousElementSibling;
    input.setAttribute("disabled", "");
  });
});
document.querySelectorAll(".form__action_save").forEach((button) => {
  button.addEventListener("click", (e) => {
    const input = button.previousElementSibling;
    input.setAttribute("disabled");
  });
});
/*custom select */
const anchor = document.getElementById("dropdown__anchor");
const dropdown = document.getElementById("dropdown");

anchor.addEventListener("click", function (e) {
  if (dropdown.classList.contains("visible"))
    dropdown.classList.remove("visible");
  else dropdown.classList.add("visible");
});

const checkboxes = document.querySelectorAll(
  "#dropdown__items .custom-checkbox__checkbox"
);
for (i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", checkBoxValue);
}
function checkBoxValue() {
  const selected = document.getElementById("select-subscribe");
  let result = 0;
  if (this.checked) {
    if (selected.value.length > 0) {
      result = selected.value + "," + this.value;
      selected.value = result;
    } else {
      result = this.value;
      selected.value = result;
    }
  }
  if (!this.checked) {
    const compact = selected.value.split(",");
    const index = compact.indexOf(this.value);
    compact.splice(index, 1);
    const newValue = compact.join(",");
    selected.value = newValue;
  }
}
