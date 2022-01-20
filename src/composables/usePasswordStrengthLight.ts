import { computed, ref } from "vue";

//function regex for password strength validation

function usePasswordStrengthLight(password: string) {
    const passwordStrength = ref(0);

    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const specialCharacters = '!@#$%^&*()'

    //function to split multiple strings into an array
    function splitString(string: string, separator: string) {
        return string.split(separator);
    }

    const result = [upperCaseLetters, lowerCaseLetters, numbers, specialCharacters];

    const main = result.map(item => {
        return splitString(item, '');
    })

    console.log(main)

}

usePasswordStrengthLight('password')