import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const logout = async () => {
    error.value = null
    try {
        await auth.signOut()
    } catch (err) {
        console.log(err.message)
        error.value = err.message
    } 
}

const userLogin = () => {
  return { logout, error };
};

export default userLogin;
