import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'antd'
import { Carousel } from 'antd'
import { foodDishes, foodTable, restaurants } from '../../Components/Constant'

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

    const CarouselImg = [
        {
            link: 'https://static.parentlane.com/contents/media/images/Kerala%20Parotha.jpg',
            name: 'Paratha',
        },
        {
            link: 'https://static.parentlane.com/contents/media/images/Kerala%20Parotha.jpg',
            name: 'Paratha',
        },
        {
            link: 'https://static.parentlane.com/contents/media/images/Kerala%20Parotha.jpg',
            name: 'Paratha',
        },
    ]

    return (
        <div className='container'>
            <div className='food-title'>Varieties of Food we can provide</div>
            <div className='slider-container'>
                <Carousel autoplay>
                    {CarouselImg.map((item) => (
                        <div>
                            <div className='slider'>
                                <div id='slider-pizza'>
                                    <img
                                        src={item.link}
                                        alt={item.name}
                                        style={{
                                            opacity: 0.8,
                                            border: '2px solid black',
                                            height: '340px',
                                            width: '100%',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className='food-title'>Best Food in the City</div>
            <div className='card-container'>
                <Row gutter={[16, 16]}>
                    {data.map((item, index) => {
                        return (
                            <Col xs={24} sm={12} xl={6} xxl={3}>
                                <Card
                                    key={index}
                                    hoverable
                                    cover={
                                        <img alt='example' src={item.url} style={{ width: '100%', height: '250px' }} />
                                    }
                                >
                                    <div className='flex-display-card'>
                                        <div
                                            style={{
                                                fontWeight: 'bold',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {item.foodName}
                                        </div>
                                        <div>₹{parseFloat(item.price).toFixed(2)}</div>
                                    </div>
                                    <div className='flex-display-card'>
                                        <div
                                            style={{
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                whiteSpace: 'nowrap',
                                            }}
                                        >
                                            {item.foodRestaurant}
                                        </div>
                                        <div
                                            style={{
                                                borderRadius: '20%',
                                                padding: '0px 5px',
                                                color: 'white',
                                                backgroundColor:
                                                    item.ratings >= 4 ? 'green' : item.ratings <= 2 ? 'red' : 'orange',
                                                height: 'fit-content',
                                            }}
                                        >
                                            {parseFloat(item.ratings).toFixed(1)}
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </div>
    )
}

export default Home
