import { useEffect, useState } from 'react';
import ToggleAdvancedFilterIcon from '../assets/ToggleFilterIcon';
import './searchBox.css'
import SearchBox from './SearchBox';
import getCountiries from '../Requests/getCountries';
import getComposition from '../Requests/getComposition';
//import getQualities from '../Request/getQualities';



const SearchComponent = ({ submitHandler, searchListData, toggleCategories  }) => {
    const [countries, setCountries] = useState([])
    const [compositions, setComposition] = useState([])
    const [qualities, setQuailties] = useState([])

    const [filterShow, setFilterShow] = useState(false)
    const [formValues, setForumValues] = useState({
        search: '',
        country: '',
        metal: '',
        quality: '',
        fromPrice: '',
        toPrice: '',
        fromYear: '',
        toYear: ''
    })
    useEffect(() => {
        if (searchListData) {
            searchListData.forEach(item => {
                setForumValues(prevState => ({
                    ...prevState,
                    [item[0]]: item[1]
                }))
            })
        }

        getCountiries().then(data => setCountries(data))
        getComposition().then(data => setComposition(data))
        // getQualities().then(data => setQuailties(data))

    }, [searchListData]);

    console.log("searchListData: " +searchListData)

    const onChangeForm = (e) => {
        const { name, value } = e.target
        setForumValues(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    console.log("formValues: ", formValues)

    const onSumbitForm = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const formDataToArray = [...formData.entries()]
        console.log('formDataToArray: ', formDataToArray)
        const resultData = {}
        formDataToArray.forEach(item => {
            if (item[1]) {
                resultData[item[0]] = item[1]
            }
        })
        submitHandler(resultData)
    }

    // const toggleFilter = () => {
    //     console.log('Filter toggle clicked');
    //     setFilterShow(!filterShow); // Переключаем состояние фильтра
    //     if (toggleCategories) {
    //         console.log('toggleCategories called');
    //         toggleCategories(); // Скрываем или показываем категории
    //     } else {
    //         console.error('toggleCategories is not passed to SearchComponent');
    //     }
    // };

    return (
        <form onChange={onChangeForm} onSubmit={onSumbitForm}>
            <SearchBox formValues={formValues.search} />
            <div onClick={() => setFilterShow(!filterShow)}  className='toggle-advanced-filter'>
                <span>Advanced filter</span>
                <ToggleAdvancedFilterIcon isClosed={!filterShow} />
            </div>
            {filterShow && <div className='advanced-filter'>
                <div>
                    <div className='advanced-label-box'>
                        <label >
                            <p className='filter-title'>Issuing country</p>
                            <select onChange={onChangeForm} className='filter-select' name='country' value={formValues.country}>
                            <option value={''} >Select a country</option>
                                {
                                    countries.map((country, index) => (
                                        <option key={index} value={country.issuing_country}>{country.issuing_country}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </div>
                    <div className='advanced-label-box'>
                        <label>
                            <p className='filter-title'>Metal</p>
                            <select onChange={onChangeForm} className='filter-select' name='metal' value={formValues.metal}>
                                <option value={''} >Select a metal</option>
                                {
                                    compositions.map((compositions,index)=>(
                                        <option key={index} value={compositions.composition}>{compositions.composition}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </div>
                    <div className='advanced-label-box'>
                        <label>
                            <p className='filter-title'>Quality of the coin</p>
                            <select onChange={onChangeForm} className='filter-select' name='quality' value={formValues.quality}>
                                <option value=''>Select a quality</option>
                                {
                                    qualities.map((qualities,index)=>(
                                        <option key={index} value={qualities.quality}>{qualities.quality}</option>
                                    ))
                                }
                            </select>
                        </label>
                    </div>
                </div>
                <div>
                    <div className='advanced-label-box'>
                        <label>
                            <p className='filter-title'> Price</p>
                            <span>from </span>
                            <input onChange={onChangeForm} type="number" className='filter-input' name='fromPrice' value={formValues.fromPrice} />
                            <span>to </span>
                            <input onChange={onChangeForm} type="number" className='filter-input' name='toPrice' value={formValues.toPrice} />
                        </label>
                    </div>
                    <div className='advanced-label-box'>
                        <label>
                            <p className='filter-title'>Year of issue</p>
                            <span>from </span>
                            <input onChange={onChangeForm} type="number" className='filter-input' name='fromYear' value={formValues.fromYear} />
                            <span>to </span>
                            <input onChange={onChangeForm} type="number" className='filter-input' name='toYear' value={formValues.toYear} />
                        </label>
                    </div>
                </div>
            </div>}
        </form>
    );
}

export default SearchComponent