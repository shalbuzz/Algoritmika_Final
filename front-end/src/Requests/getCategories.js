const Url='http://localhost:3001'

export const getCategories = async() => {
    const res = await fetch(`${Url}/categories`)
    const data=await res.json()
    return data;
}
