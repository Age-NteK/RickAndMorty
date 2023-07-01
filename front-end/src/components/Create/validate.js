const validate = ({ characterCreate}) => {

  const regexURL = /^http:\/\/[^\s/$.?#].[^\s]*$/
  const errors = {};

  if (!characterCreate.id) {
    errors.id = "You must to enter an Id";
  } else if (isNaN(characterCreate.id)) {
    errors.id = "Id must to be a number";
  } else if (characterCreate.id < 827) {
    errors.id = "ID must be a number starting from 826";
  } 
  if (!characterCreate.name) {
    errors.name = "You must to enter character name";
  } else if (!isNaN(characterCreate.name)) {
    errors.name = "You must to enter a valid name";
  } 

  if (!characterCreate.specie) {
    errors.specie = "You must to enter an specie";
  } else if (!isNaN(characterCreate.specie)) {
    errors.specie = "Specie have to be a string";
  }

  if(!characterCreate.gender) {
    errors.gender = 'You must to enter a gender'
  } else if (!isNaN(characterCreate.gender)) {
    errors.gender = "Gender have to be a string";
  }

  if(!characterCreate.origin) {
    errors.origin = 'You must to enter a origin'
  }

  if(!characterCreate.location) {
    errors.location = 'You must to enter a location'
  }

  if(!regexURL.test(characterCreate.image)){
    errors.image = 'You must to enter a valid URL'
  }

  return errors;
};

export default validate;