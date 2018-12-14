import * as Types from './../constants/ActionType';

var initialState = [
    {   
        id: 1,
        src_img: process.env.PUBLIC_URL + 'images/hot1.jpg',
        price: 775,
        place: 'Istanbul, Turkey'
    },
    {
        id: 2,
        src_img: process.env.PUBLIC_URL + 'images/hot2.jpg',
        price: 775,
        place: 'Istanbul, Turkey'
    },
    {
        id: 3,
        src_img: process.env.PUBLIC_URL + 'images/hot1.jpg',
        price: 775,
        place: 'Istanbul, Turkey'
    },
    {
        id: 4,
        src_img: process.env.PUBLIC_URL + 'images/hot2.jpg',
        price: 775,
        place: 'Istanbul, Turkey'
    }
];

const tours = (state = initialState, action) => {
    var { tour, id } = action;
    var index = -1;
    switch (action.type) {
        case Types.FETCH_TOURS:
            return [...action.tours];
        case Types.ADD_TOUR:
            state.push(tour);
            return [...state];
        case Types.UPDATE_TOUR:
            index = findIndex(state, tour.id);
            state[index] = tour;
            return [...state];
        case Types.DELETE_TOUR:
            index = findIndex(state, id);
            state.splice(index, 1);
            return [...state];
        default: return [...state];
    }
};

var findIndex = (tours, id) => {
    var result = -1;
    tours.forEach((tour, index) => {
        if (tour.id === id) {
            result = index;
        }
    });
    return result;
}

export default tours;