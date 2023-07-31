import { ref } from 'vue';
import { db } from '../firebase/config.js';

const shopItems = ref([])
const error = ref(null)

const getItems = async () => {
    try {
        // let data = await fetch("http://localhost:3000/shopItems")
        const res = await db.collection('shopItems').get()
        shopItems.value = res.docs.map(doc =>{ 
            // console.log(doc.data())
            return { ...doc.data(), id: doc.id}
        })

    } catch (err) {
        console.log(err.message)
        console.log(err)
        error.value = err;
    }
}

const getShopItems = () => {
    return {shopItems, error, getItems}
}

export default getShopItems