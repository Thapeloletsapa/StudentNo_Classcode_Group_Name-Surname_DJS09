const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')



import { showReviewTotal, populateUser } from './utils'
let isOpen: boolean

//Reviews

const reviews :{
    name: string;
    stars: number;
    loyaltyUser:boolean;
    date: string
} [] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    isReturning: true,
    age: 35,
    stayedAt: ['Florida-home', 'oman-flat', 'tokyo-bungalow']
}