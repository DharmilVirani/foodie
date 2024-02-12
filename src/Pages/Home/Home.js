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
            link: 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=1060&t=st=1694236480~exp=1694237080~hmac=c705fc4be7db87ac2c812a716d1f64f1564a74aced25f3e1a3bb8e06211bf18c',
            name: 'Pizza',
        },
        {
            link: 'https://static.parentlane.com/contents/media/images/Kerala%20Parotha.jpg',
            name: 'Paratha',
        },
    ]

    return (
        <div className='container'>
            <div className='slider-container'>
                <h3 className='food-title'>Varieties of Food we can provide</h3>
                <Carousel autoplay>
                    {CarouselImg.map((item) => (
                        <div>
                            <div className='slider'>
                                <img className='slider-img' src={item.link} alt={item.name} />
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <h3 className='food-title'>Best Food in the City</h3>
            <div className='card-container'>
                <Row gutter={[16, 16]}>
                    {data.map((item, index) => {
                        return (
                            <Col xs={24} sm={12} xl={6} xxl={3}>
                                <Card
                                    key={index}
                                    hoverable
                                    cover={
                                        <img
                                            className='card-image'
                                            alt='example'
                                            src={item.url}
                                            style={{ width: '100%', height: '250px' }}
                                        />
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
