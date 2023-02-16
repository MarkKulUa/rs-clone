function template() {
  return `
    <fieldset>
      <legend></legend>
      <div class="user-gender">
        <input class="gender" type="radio" id="male" name="gender" value="male">
        <label class="gender-style" for="male">Male</label>
        <input class="gender" type="radio" id="female" name="gender" value="female">
        <label class="gender-style" for="female">Female</label>
      </div>
    </fieldset>
    `;
}

export default template;
