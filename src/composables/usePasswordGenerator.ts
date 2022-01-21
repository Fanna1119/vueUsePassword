import { ref, readonly } from 'vue'
import { lowerCaseLetters, upperCaseLetters, numberslist, specialCharacters } from './textCharacters'

export interface PasswordOptions {
    /**
     * Set the length of the password
     *
     * @default 8
     */
    length?: number

    /**
     * Should include uppercase letters
     *
     * @default true
     */
    uppercase?: boolean

    /**
     * Should include lowercase letters
     *
     * @default true
     */
    lowercase?: boolean

    /**
     * Should include numbers
     *
     * @default true
     */
    numbers?: boolean

    /**
     * Should include special characters
     *
     * @default true
     */
    special?: boolean

}

//function to generate a strong password
export default function usePasswordGenerator(options: PasswordOptions = {}) {
    const {
        length = 8,
        uppercase = true,
        lowercase = true,
        numbers = true,
        special = true
    } = options

    const password = ref<String>('')

    function generate() {
        password.value = '';
        const characters = []

        if (uppercase) {
            characters.push(...upperCaseLetters)
        }
        if (lowercase) {
            characters.push(...lowerCaseLetters)
        }
        if (numbers) {
            characters.push(...numberslist)
        }
        if (special) {
            characters.push(...specialCharacters)
        }

        for (let i = 0; i < length; i++) {
            const index = Math.floor(Math.random() * characters.length)
            password.value += characters[index]
        }
    }

    return {
        password: readonly(password),
        generate
    }
}
