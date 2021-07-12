import api from '../services/api';

const getPost = async () => {
    try{
        const postList = await api.get('posts', {responseType: 'text'})
        if(postList.status !== 200) throw new Error("DEU RUIM")
        return postList.data
    } catch(error) {
        console.log(error)
    }
}

export default getPost;