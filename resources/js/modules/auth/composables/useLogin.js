import { ref } from 'vue'
import { loginUser } from '@/modules/auth/services/authService'

export default function useLogin() {
  const email = ref('')
  const password = ref('')
  const showPassword = ref(false)

  const togglePassword = () => {
    showPassword.value = !showPassword.value
  }

  const handleLogin = async () => {
    if (!email.value || !password.value) {
      alert('Por favor completa todos los campos.')
      return
    }

    try {
      const response = await loginUser({
        email: email.value,
        password: password.value
      })

      console.log('✅ Login exitoso', response)
    } catch (error) {
      console.error('❌ Error en login:', error)
      alert('Error al iniciar sesión.')
    }
  }

  return {
    email,
    password,
    showPassword,
    togglePassword,
    handleLogin
  }
}
