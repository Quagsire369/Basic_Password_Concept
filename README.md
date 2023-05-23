# Password-Challenge
Challenge 3, the password challenge. UO bootcamp 2023

What it does: 
This site will generate a pssword for the user based upon certian user requeirments. When the user clicks the genreate password button the user will be propted to choose a password length(bettween 8 and 128 characters). They will then be prompted to choose if they would like to include Upercase letters, Special characters, as well as numbers. Once the user has mad these choices in the browser a  random password will be generated 

WARNING: This is a proof of concept, It may be unsafe to use this for actual password genration


User Story:
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

Acceptance Criteria:
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page