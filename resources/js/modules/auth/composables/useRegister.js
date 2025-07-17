// resources/js/modules/auth/composables/useRegister.js
import { ref } from 'vue'

export default function useRegister() {
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const showPassword = ref(false)

  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }

  const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
      alert('Las contraseñas no coinciden')
      return
    }

    console.log('Registrando usuario:', {
      name: name.value,
      email: email.value,
      password: password.value,
    })
  }

  return {
    name,
    email,
    password,
    confirmPassword,
    showPassword,
    togglePassword,
    handleRegister
  }
}
