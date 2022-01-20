import zxcvbn from 'zxcvbn'
import { ref, computed } from 'vue'


export default function usePasswordStrength(password: string) {
    const passwordRef = ref(password)
    const score = computed(() => {
        const result = zxcvbn(passwordRef.value)
        return result.score
    })
    const feedback = computed(() => {
        const result = zxcvbn(passwordRef.value)
        return result.feedback
    })
    return {
        passwordRef,
        score,
        feedback
    }
}
