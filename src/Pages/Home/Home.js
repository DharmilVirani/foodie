import React, { useEffect, useState } from 'react'
import { Card } from 'antd'
import { foodDishes, foodTable, restaurants } from '../../Components/Constant'

const { Meta } = Card

const Home = () => {
    const [data, setData] = useState([])

    const getData = () => {
        let newData = []
        foodTable.forEach((item) => {
            let newItem = { ...item }
            item.foodName = foodDishes.find((el) => el.id === item.foodId).name
            item.foodCategory = foodDishes.find((el) => el.id === item.foodId).category
            item.foodRestaurant = restaurants.find((el) => el.id === item.restaurantId).name
            newData.push(newItem)
        })
        setData(newData)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className='container'>
            <div className='suggested'>Suggested for you</div>
            <div className='card-container'>
                {data.map((item, index) => {
                    return (
                        <Card
                            key={index}
                            hoverable
                            style={{
                                width: 'calc(25% - 25px)',
                                marginBottom: '20px',
                                marginRight: '25px',
                            }}
                            cover={<img alt='example' src={item.url} style={{ width: '100%', height: '250px' }} />}
                        >
                            <Meta title={item.foodName} description='https://thebelgianwaffle.co' />
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}

export default Home
