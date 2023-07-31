import { auth } from "@/firebase/config";
import { ref } from "vue"

const error = ref(null);

const signup = async (email, password, username) => {
    error.value = null;
    try {
        const res = await auth.createUserWithEmailAndPassword(email, password)
        if(!res) throw Error("Could not complete sigup")

        // With creating account also asign a display name
        await res.user.updateProfile({displayName: username})

        error.value = null;
        console.log("User signed in !")
        return res

    } catch (err) {
        console.log(err.message)
        error.value = err.message;
    }
};

const userSignup = () => {
    return {error, signup }
};

export default userSignup