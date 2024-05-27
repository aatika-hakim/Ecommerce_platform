// hero imges 
import heroImg1 from '../../public/assets/images/heroImg1.png'
import heroImg2 from '../../public/assets/images/heroImg2.png'
import sale from '../../public/assets/images/sale.png'

// product Card images
import product1 from '../../public/assets/product1.png'
import product2 from '../../public/assets/images/product5.png'
import product3 from  '../../public/assets/images/product3.png'
import product4 from '../../public/assets/images/product4.png'


// navigatin links
export const MenuItems = [
  {
    id : 1,
    name : "Female",
    link : "/#",
  },
  {
    id : 2,
    name : "Male",
    link : "/#",
  },
  {
    id : 3,
    name : "Kids",
    link : "/#",
  },
  {
    id : 4,
    name : "All Products",
    link : "/#",
  },
 
];


// Hero section data 

export const ImageList = [
  {
    id : 1,
    img : heroImg1,
    title: "Sale on Women's Wear",
    description: "Lorem ipsumIt is a long established fact that a reader will be distracted The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,"
  },
  {
    id : 2,
    img : heroImg2,
    title: "Sale on Men's Wear",
    description: "Lorem ipsumIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
  },
  {
    id : 3,
    img : sale,
    title: "Sale on All Products",
    description: "Lorem ipsum, the point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
  }
]

export const productData = [
  {
    id: 1,
    img: product1,
    title: 'Lorem ipsum',
    ratings: '5.0',
    color: 'white',
    aosDelay: '0'
  },
  {
    id: 2,
    img: product2,
    title: 'Lorem ipsum',
    ratings: '4.7',
    color: 'red',
    aosDelay: '200'
  },
  {
    id: 3,
    img: product3,
    title: 'Lorem ipsum',
    ratings: '4.2',
    color: 'blue',
    aosDelay: '400'
  },
  {
    id: 4,
    img: product4,
    title: 'Lorem ipsum',
    ratings: '3.6',
    color: 'purple',
    aosDelay: '600'
  },
]

export const footerLinks = [
  {
    name: "Home",
    url: "/"
  },
  {
    name: "About Us",
    url: "/about"
  },
  {
    name: "Contact Us",
    url: "/contact"
  },
  {
    name: "Blog",
    url: "/blog"
  }
]