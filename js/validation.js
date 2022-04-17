
const stateAbbreviations = [
  'AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
  'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
  'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
  'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
  'VT','VI','VA','WA','WV','WI','WY'
 ];
         
function initValidation(formName) {

  let $form = $(formName);

  $('form :input').change(function(ev){
    validateForm();
    if(!this.checkValidity())
      $(this).addClass("was-validated")

    //NOTE: we use 'was-validated' class so that you show the error indications only for the single field rather
    //than the whole form at once
  });
  
  $form.submit(function(event){
    $form = $(this);
    formEl=$form.get(0);

    event.preventDefault();  //prevent default browser submit
    event.stopPropagation(); //stop event bubbling

    validateForm();

    console.log(formEl.checkValidity());
    if (!formEl.checkValidity()){
      $(":input").addClass("was-validated")
    }
    else{
      //TODO
      // $form.();
      //hide form
      $('#log-visit').hide();
      $("#thank-you").show();
      //show thank you message
    }
   

  });
}

function validateForm() {
  
  validateState("#state", "You must enter a valid two character state code, e.g., UT");
  
  /*note, to validate the group, just passing in id of one of them ("#newspaper"), we will use groupName to check status of group.  Just call setElementValidity on the '#newspaper' element to show the error message*/
 
  if (validateCheckboxGroup("#grader", "discover", "You must select at least one!")) {
    $(".errorMsg").hide();
  } else {
    $(".errorMsg").show();
    $(".errorMsg").text("You must select at least one!");
  }
  
}
function validateState(id, msg){
  $el = $(id);
  let valid=false;
  //get value from $el, and convert to upper case
  $el.val($el.val().toUpperCase());
  //check whether the value is in the stateAbbreviations array
  for (let i = 0; i < stateAbbreviations.length; i++) {
    if (stateAbbreviations[i] == $el.val()) {
      valid = true;
    }
  }
  setElementValidity(id, valid, msg);
}

function validateCheckboxGroup(fieldName, groupName, message) {
  let valid=false;
  $checks = $(":checkbox");

  for (let i = 0; i < $checks.length; i++) {
    // if one is checked, set valid to true.
    if ($checks[i].checked) {
      valid = true;
    }
  }
  
  setElementValidity(fieldName, valid, message);
  
  return valid;
}

function setElementValidity(fieldName, valid, message){
  let $field=$(fieldName);
  let el = $field.get(0);
  console.log(el);
  console.log(valid);
  if (valid) {  //it has a value
    el.setCustomValidity('');  //sets to no error message and field is valid

  } else {

    el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
    // el.reportValidity();
   
  }
  //TODO  insert or remove message in error div for element
  if (!el.checkValidity()) {
    // It's good to go!
    console.log("tis valid");
  } else {
    // It's invalid
    el.reportValidity();
    console.log("tis invalid");
  }


}

$(document).ready(function () {
  initValidation("#visitor-form");
});