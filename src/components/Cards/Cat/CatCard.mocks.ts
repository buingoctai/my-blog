import { ICatCard } from './CatCard';

const base: ICatCard = {
    tag: 'Felines',
    title: `What's new in Cats`,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
    author: 'Alex',
    time: '2h ago',
    authorPhoto: 'https://i.pravatar.cc/40?img=3',
    thumb: '/time-cat.jpg',
};

export const mockCatCardProps = {
    base,
};