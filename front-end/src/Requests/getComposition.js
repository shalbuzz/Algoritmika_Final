const Url = 'http://localhost:3001'

const getComposition = async () => {
    try {
        const res = await fetch(`${Url}/composition`)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error("Error")
    }
}

export default getComposition;