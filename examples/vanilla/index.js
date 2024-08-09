import forgotConvert from "../../dist/index.js";

const $suggest = document.querySelector(".suggest");
const $textarea = document.querySelector("textarea");

let suggests = {};

const onChange = (e) => {
  const {
    target: { value },
  } = e;

  onDrawSuggest(value);
};

const onClickSuggest = (key, val) => {
  $textarea.value = $textarea.value.replace(key, val);
  onDrawSuggest($textarea.value);
};

const onDrawSuggest = (val) => {
  const suggsetObj = forgotConvert(val);
  suggests = suggsetObj;
  $suggest.innerHTML = "";
  for (const suggest in suggests) {
    const $btn = document.createElement("button");
    $btn.innerHTML = `${suggest} - ${suggests[suggest]}`;
    $btn.addEventListener("click", () =>
      onClickSuggest(suggest, suggests[suggest])
    );
    $suggest.appendChild($btn);
  }
};

$textarea.addEventListener("input", onChange);
onDrawSuggest($textarea.value);
