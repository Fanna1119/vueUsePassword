import zxcvbn from 'zxcvbn'
import { ref, computed } from 'vue'

export default function usePasswordStrength(password: string) {
    const passwordRef = ref(password)
    const result = computed(() => {
        return zxcvbn(passwordRef.value)
    })
    return {
        result
    }
}
