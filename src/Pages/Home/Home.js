import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Carousel } from 'antd'

const Home = ({ addToCart }) => {
    const [data, setData] = useState([])
    const [foodDishes, setFoodDishes] = useState([])
    const [foodTables, setFoodTables] = useState([])
    const [restaurants, setRestaurants] = useState([])

    // Fetch all data from the backend API
    const getData = async () => {
        try {
            // Fetch food dishes
            const foodDishesResponse = await fetch('http://localhost:5000/api/fooddishes')
            const foodDishesData = await foodDishesResponse.json()
            setFoodDishes(foodDishesData)

            // Fetch food tables
            const foodTablesResponse = await fetch('http://localhost:5000/api/foodtables')
            const foodTablesData = await foodTablesResponse.json()
            setFoodTables(foodTablesData)

            // Fetch restaurants
            const restaurantsResponse = await fetch('http://localhost:5000/api/restaurants')
            const restaurantsData = await restaurantsResponse.json()
            setRestaurants(restaurantsData)

            // Merge the data
            const newData = foodTablesData.map((item) => {
                const dish = foodDishesData.find((dish) => dish.id === item.foodId)
                const restaurant = restaurantsData.find((restaurant) => restaurant.id === item.restaurantId)

                return {
                    ...item,
                    foodName: dish ? dish.name : 'Unknown',
                    foodCategory: dish ? dish.category : 'Unknown',
                    foodRestaurant: restaurant ? restaurant.name : 'Unknown',
                }
            })

            setData(newData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const carouselImages = [
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
        <div className='home-container'>
            <div className='slider-container'>
                <h3 className='food-title-main'>Varieties of Food We Can Provide</h3>
                <Carousel autoplay>
                    {carouselImages.map((item, index) => (
                        <div key={index}>
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
                    {data.map((item, index) => (
                        <Col key={index} xs={24} sm={12} xl={6} xxl={3}>
                            <Card
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
                                <div className='buttons'>
                                    <button
                                        className='button'
                                        type='button' // Prevent the button from being treated as a submit button
                                        onClick={(e) => {
                                            e.preventDefault() // Prevent default behavior
                                            addToCart(item)
                                        }}
                                    >
                                        ADD TO CART
                                    </button>
                                    <button
                                        className='button'
                                        type='button' // Ensure it does not submit or reload the page
                                        onClick={(e) => e.preventDefault()} // Prevent default behavior
                                    >
                                        FAVOURITES
                                    </button>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Home
