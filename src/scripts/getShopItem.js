import { db } from '@/firebase/config';
import { ref } from 'vue';

const shopItem = ref()
const error = ref(null)

const getItem = async (id) => {
    try {
        error.value = null;
        const res = await db.collection('shopItems').doc(id).get();
        if(!res.exists) throw Error("This item does not exist.")
        shopItem.value = { ...res.data(), id: res.id}


    } catch (err) {
        console.log(err.message)
        error.value = err;
    }
}

const getShopItem = () => {
    return {shopItem, error, getItem}
}

export default getShopItem