// const baseUrl = 'http://localhost:3001'

// const deleteCoin = async (CoinId) => {
//     try {
//         const res = await fetch(`${baseUrl}/coin/${CoinId}`,{
//             method: 'DELETE',
//             headers: {
//                 'Content-type': 'application/json'
//             }
//         })
//         const data = await res.json()
//         return data
//     } catch (error) {
//         console.log('Delete Coin Error: ',error)
//     }
// }

// export default deleteCoin;

const Url = 'http://localhost:3001';


const deleteCoin = async (coinId) => {
    try {
        const response = await fetch(`${Url}/coin/${coinId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error deleting coin:', error);
    }
};

export default deleteCoin;
