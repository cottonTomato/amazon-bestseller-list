import img1 from '../images/img_001.jpg';
import img2 from '../images/img_002.jpg';
import img3 from '../images/img_003.jpg';
import img4 from '../images/img_004.jpg';
import img5 from '../images/img_005.jpg';
import img6 from '../images/img_006.jpg';

export type BookProp = {
    imgSrc: string;
    title: string;
    author: string;
    id: string;
};

const bookProps: BookProp[] = [
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        imgSrc: img1,
        id: '1',
    },
    {
        author: 'Morgan Housel',
        title: 'The Psychology Of Money',
        imgSrc: img2,
        id: '2',
    },
    {
        author: 'Joseph Nguyen',
        title: "Don't Believe Everything You Think",
        imgSrc: img3,
        id: '3',
    },
    {
        author: 'Francesc Miralles',
        title: 'Ikigai',
        imgSrc: img4,
        id: '4',
    },
    {
        author: 'Joseph Murphy',
        title: 'The Power of Your Subconscious Mind',
        imgSrc: img5,
        id: '5',
    },
    {
        author: 'Robert T. Kiyosaki',
        title: 'Rich Dad Poor Dad',
        imgSrc: img6,
        id: '6',
    },
];

export default bookProps;
