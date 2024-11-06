import React, { useEffect, useState } from 'react'
import { Card, Row, Col, Carousel } from 'antd'

const Home = () => {
    const [data, setData] = useState([])
    const [foodDishes, setFoodDishes] = useState([])
    const [foodTables, setFoodTables] = useState([])
    const [restaurants, setRestaurants] = useState([])
    const userId = localStorage.getItem('uniqueId')

    // Add item to cart by sending a POST request to the backend
    const addItemToCart = async (item) => {
        const cartItem = {
            userId,
            foodId: item.foodId,
            restaurantId: item.restaurantId,
            foodName: item.foodName,
            foodRestaurant: item.foodRestaurant,
            price: item.price,
            quantity: 1,
            url: item.url,
        }

        try {
            const response = await fetch('http://localhost:5000/cart/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(cartItem),
            })

            const data = await response.json()
            if (data.success) {
                alert('Item added to cart successfully')
            } else {
                alert('Failed to add item to cart')
            }
        } catch (error) {
            console.error('Error adding item to cart:', error)
            alert('Error adding item to cart')
        }
    }

    // Fetch all data from the backend API
    const getData = async () => {
        try {
            const foodDishesResponse = await fetch('http://localhost:5000/api/fooddishes')
            const foodDishesData = await foodDishesResponse.json()
            setFoodDishes(foodDishesData)

            const foodTablesResponse = await fetch('http://localhost:5000/api/foodtables')
            const foodTablesData = await foodTablesResponse.json()
            setFoodTables(foodTablesData)

            const restaurantsResponse = await fetch('http://localhost:5000/api/restaurants')
            const restaurantsData = await restaurantsResponse.json()
            setRestaurants(restaurantsData)

            // Merge the data
            const newData = foodTablesData.map((item) => {
                const dish = foodDishesData.find((dish) => dish.customId === item.foodId)
                const restaurant = restaurantsData.find((restaurant) => restaurant.customId === item.restaurantId)

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

    return (
        <div className='home-container'>
            <div className='slider-main-container'>
                <h3 className='food-title food-main-title'>Varieties of Food We Can Provide</h3>
                <div className='slider-main-container'>
                    <Carousel className='custom-carousel' arrows autoplay draggable>
                        {data.map((item, index) => (
                            <div key={index}>
                                <div className='slider'>
                                    <img className='slider-img' src={item.url} alt={item.foodName} />
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            <h3 className='food-title'>Best Food in the City</h3>
            <div className='card-container'>
                <Row gutter={[16, 16]}>
                    {data.map((item, index) => (
                        <Col key={item.uniqueId} xs={24} sm={12} xl={6} xxl={3}>
                            <Card
                                hoverable
                                cover={
                                    <img
                                        className='card-image'
                                        alt={item.foodName}
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
                                <button
                                    className='home-button button buttons'
                                    type='button'
                                    onClick={(e) => {
                                        e.preventDefault()
                                        addItemToCart(item)
                                    }}
                                >
                                    ADD TO CART
                                </button>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>
    )
}

export default Home
