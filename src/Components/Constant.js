export const foodDishes = [
    {
        id: 'f1',
        name: 'Pizza',
        category: 'Italian',
    },
    {
        id: 'f2',
        name: 'Parotha',
        category: 'Punjabi',
    },
    {
        id: 'f3',
        name: 'Khaman',
        category: 'Gujarati',
    },
    {
        id: 'f4',
        name: 'Burger',
        category: 'Fast Food',
    },
    {
        id: 'f5',
        name: 'Sandwitch',
        category: 'Fast Food',
    },
    {
        id: 'f6',
        name: 'Gulab Jamun',
        category: 'Dessert',
    },
    {
        id: 'f7',
        name: 'Jamun Shots',
        category: 'Drinks',
    },
]

export const cities = [
    {
        id: 'GJ03',
        name: 'Rajkot',
    },
    {
        id: 'GJ01',
        name: 'Ahmedabad',
    },
    {
        id: 'GJ10',
        name: 'Jamnagar',
    },
    {
        id: 'GJ05',
        name: 'Surat',
    },
    {
        id: 'GJ06',
        name: 'Junagadh',
    },
]

export const restaurants = [
    {
        id: 'l1b1',
        cityId: 'GJ03',
        name: 'La Pinoz Pizza, Virani Chowk',
    },
    {
        id: 'l1b2',
        cityId: 'GJ03',
        name: 'La Pinoz Pizza,Big Bazar',
    },
    {
        id: 'd1b1',
        cityId: 'GJ03',
        name: 'Domino Pizza, Virani Chowk',
    },
    {
        id: 'n1b1',
        cityId: 'GJ10',
        name: 'Naples Pizza, Big Bazar',
    },
    {
        id: 'p1b1',
        cityId: 'GJ10',
        name: 'Suresh Parotha House, Irvin Hospital',
    },
    {
        id: 'p2b1',
        cityId: 'GJ03',
        name: 'Dhaba, Nana Mauva Chowk',
    },
    {
        id: 'p2b2',
        cityId: 'GJ03',
        name: 'Sunny da Dhaba, 150 feet Ring Road',
    },
    {
        id: 'a1b1',
        cityId: 'GJ03',
        name: 'Raju Cold Drinks, Mawdi Chowk',
    },
    {
        id: 's1b1',
        cityId: 'GJ03',
        name: 'Balaji Sandwitch, Indira Circle',
    },
    {
        id: 'b1b1',
        cityId: 'GJ03',
        name: 'Burger King, Crystal Mall',
    },
    {
        id: 'k1b1',
        cityId: 'GJ03',
        name: 'Jalaram Khaman House, Nana Mauva Main Road',
    },
    {
        id: 'g1b1',
        cityId: 'GJ03',
        name: 'Shiv Shakti Sweets, Mawdi Road',
    },
]

export const foodTable = [
    {
        foodId: 'f1',
        restaurantId: 'l1b1',
        ratings: 4.67468364873678,
        price: 100.48736487,
        url: 'https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=1060&t=st=1694236480~exp=1694237080~hmac=c705fc4be7db87ac2c812a716d1f64f1564a74aced25f3e1a3bb8e06211bf18c',
    },
    {
        foodId: 'f1',
        restaurantId: 'l1b2',
        ratings: 4.1,
        price: 120,
        url: 'https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg.transform/schema-16x9/image.jpg',
    },
    {
        foodId: 'f1',
        restaurantId: 'd1b1',
        ratings: 4.2,
        price: 200,
        url: 'https://www.foodandwine.com/thmb/4qg95tjf0mgdHqez5OLLYc0PNT4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
    },
    {
        foodId: 'f1',
        restaurantId: 'n1b1',
        ratings: 4.5,
        price: 220,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrxc54-MXHXMwpai66Iyx3Y_F2DJ0P3BERA&usqp=CAU',
    },
    {
        foodId: 'f2',
        restaurantId: 'p1b1',
        ratings: 4.5,
        price: 200,
        url: 'https://static.parentlane.com/contents/media/images/Kerala%20Parotha.jpg',
    },
    {
        foodId: 'f2',
        restaurantId: 'p2b1',
        ratings: 4.3,
        price: 250,
        url: 'https://foodess.com/wp-content/uploads/2009/12/MTMxNTk1Njc5OTkzNzMxNTUw.jpg',
    },
    {
        foodId: 'f3',
        restaurantId: 'k1b1',
        ratings: 4.3,
        price: 150,
        url: 'https://5.imimg.com/data5/AV/QJ/MY-19368834/vati-dal-khaman-500x500.jpg',
    },
    {
        foodId: 'f4',
        restaurantId: 'b1b1',
        ratings: 3.3,
        price: 120,
        url: 'https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F3150%2Ftrend20210603071422.jpg',
    },
    {
        foodId: 'f5',
        restaurantId: 's1b1',
        ratings: 4.9,
        price: 160,
        url: 'https://media-cdn.tripadvisor.com/media/photo-s/0c/e0/bf/73/grilled-sandwitch.jpg',
    },
    {
        foodId: 'f6',
        restaurantId: 'g1b1',
        ratings: 5,
        price: 130,
        url: 'https://cache.pardaphash.com/2023/08/1500x900_1848390-gulab-jamun-recipe.jpg',
    },
    {
        foodId: 'f7',
        restaurantId: 'a1b1',
        ratings: 3.9,
        price: 150,
        url: 'https://1.bp.blogspot.com/-n1R7LAM_v4s/XRBsiG1O3AI/AAAAAAAAAEU/I4efsXqSK2sUL-Bp3628UCi3ObwnGr_RgCK4BGAYYCw/s1600/WhatsApp%2BImage%2B2019-06-03%2Bat%2B9.18.59%2BPM.jpeg',
    },
]
