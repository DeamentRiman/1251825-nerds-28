var writeUs = document.querySelector(".map_button");
var writeUsVisible = document.querySelector(".popup_container_wrapper");
var popupClose = writeUsVisible.querySelector(".popup_close");
var writeUsForm = writeUsVisible.querySelector(".popup_form");
var writeUsName = writeUsVisible.querySelector(".input_style_name");
var writeUsEmail = writeUsVisible.querySelector(".input_style_email");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsVisible.classList.add("popup_visible");
    if (storage) {
        writeUsName.value = storage;
        writeUsEmail.focus();
    } else{
        writeUsName.focus();
      }
});
popupClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    writeUsVisible.classList.remove("popup_visible");
    writeUsVisible.offsetWidth = loginPopup.offsetWidth;
    writeUsVisible.classList.remove("popup_error");
  });
  
writeUsForm.addEventListener("submit", function (evt) {
    if (!writeUsName.value || !writeUsEmail.value) {
        evt.preventDefault();
        writeUsVisible.classList.add("popup_error");
    } else {
        if (isStorageSupport) {
        localStorage.setItem("login", writeUsName.value);
      }
      }
});
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (writeUsVisible.classList.contains("popup_visible")) {
        evt.preventDefault();
        writeUsVisible.classList.remove("popup_visible");
        writeUsVisible.classList.remove("popup_show");
        writeUsVisible.classList.remove("popup_error");
      }
    }
  });


/*Оживление слайдера*/
var slider_first = document.querySelector(".first_slide");
var slider_second = document.querySelector(".second_slide");
var slider_third = document.querySelector(".third_slide");
var firstList = document.querySelector(".slide1");
var secondList = document.querySelector(".slide2");
var thirdList = document.querySelector(".slide3");

slider_first.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstList.classList.add("slide_current");
  secondList.classList.remove("slide_current");
  thirdList.classList.remove("slide_current");
  slider_first.classList.add("current");
  slider_second.classList.remove("current");
  slider_third.classList.remove("current");
});

slider_second.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstList.classList.remove("slide_current");
  secondList.classList.add("slide_current");
  thirdList.classList.remove("slide_current");
  slider_first.classList.remove("current");
  slider_second.classList.add("current");
  slider_third.classList.remove("current");
});

slider_third.addEventListener("click", function (evt) {
  evt.preventDefault();
  firstList.classList.remove("slide_current");
  secondList.classList.remove("slide_current");
  thirdList.classList.add("slide_current");
  slider_first.classList.remove("current");
  slider_second.classList.remove("current");
  slider_third.classList.add("current");
});