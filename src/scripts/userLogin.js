import { auth } from "@/firebase/config";
import { ref } from "vue";

const error = ref(null);

const login = async (email, password) => {
  error.value = null;

  try {
    const res = auth.signInWithEmailAndPassword(email, password);
    if (!res) throw Error("Could not initialize login");

    error.value = null;
    console.log("User logged in!");
    return res

  } catch (err) {
    console.log(err.message);
    error.value = err.message;
  }
};

const userLogin = () => {
  return { error, login };
};

export default userLogin;
