// Hold the data structures of data objects returned from the DB

// the event object
export class Evnt {
    name = '';
}

export class Booking {
    start_time = '';
    end_time = '';
    start_date = '';
    end_date = '';
}

export class Room {
    id = 0;
    name = '';
    capacity = '';
}

export const rooms: Room[] = [
    {
        id: 1,
        name: 'Training room 1',
        capacity: '15 people'
    },
    {
        id: 2,
        name: 'Training room 2',
        capacity: '20 people'
    },
    {
        id: 3,
        name: 'Training room 3',
        capacity: '15 people'
    },
    {
        id: 1,
        name: 'Dining area',
        capacity: '30 people'
    }
];
