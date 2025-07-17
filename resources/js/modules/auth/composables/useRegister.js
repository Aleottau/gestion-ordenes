import { ref } from 'vue'

export default function useRegister() {
  const email = ref('')
  const password = ref('')
  const confirmPassword = ref('')
  const showPassword = ref(false)
  const showConfirmPassword = ref(false)
  const errors = ref({})

  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }

  const toggleConfirmPassword = () => {
    showConfirmPassword.value = !showConfirmPassword.value
  }

  const isValidEmail = (value) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  const handleRegister = () => {
    errors.value = {}

    if (!name.value) {
      errors.value.name = 'El nombre es obligatorio'
    }

    if (!email.value) {
      errors.value.email = 'El correo es obligatorio'
    } else if (!isValidEmail(email.value)) {
      errors.value.email = 'El correo no es válido'
    }

    if (!password.value) {
      errors.value.password = 'La contraseña es obligatoria'
    }

    if (!confirmPassword.value) {
      errors.value.confirmPassword = 'Confirma tu contraseña'
    } else if (confirmPassword.value !== password.value) {
      errors.value.confirmPassword = 'Las contraseñas no coinciden'
    }

    if (Object.keys(errors.value).length === 0) {
      console.log('Registrando con:', email.value, password.value)
      // Aquí podrías llamar a una API o seguir con el flujo
    }
  }

  return {
    email,
    password,
    confirmPassword,
    showPassword,
    showConfirmPassword,
    togglePassword,
    toggleConfirmPassword,
    errors,
    handleRegister
  }
}
