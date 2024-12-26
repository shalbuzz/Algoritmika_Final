const Url = 'http://localhost:3001'

const getCountiries = async () => {
    try {
        const res = await fetch(`${Url}/countries`)
        const data = await res.json()
        return data
    } catch (error) {
        throw new Error()
    }
}

export default getCountiries;