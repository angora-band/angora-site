export interface SingleLiveShow {
	type: 'single';
	name: string;
	location: string;
	dateTime: Date;
    ticketLink?: string;
}

export interface TourLiveShow {
	type: 'tour';
	name: string;
	season: string;
	locations: SingleLiveShow[];
}

export const dateFormat = 'dddd, MMMM Do @ h:mma';

export const liveShows: (SingleLiveShow | TourLiveShow)[] = [
    {
        type: 'single',
        name: 'Long Live the Rabbit Live Show',
        location: 'trans-pecos: 9-15 Wycoff Ave. Queens, NY 11385',
        dateTime: new Date(2024, 7, 21, 19), // Wednesday, August 21st @ 7pm,
        ticketLink: 'https://www.venuepilot.co/events/111840/orders/new#/',
    },
    {
        type: 'single',
        name: 'angora, DAYS, and Suddenly @ Sleepwalk',
        location: 'Sleepwalk: 251 Bushwick Avenue, Brooklyn, NY 11206',
        dateTime: new Date(2024, 8, 9, 19),
        ticketLink: 'https://link.dice.fm/iqLkKqkCsMb?sharer_id=66106a9bf9a0de000181eba6',
    },
    {
        type: 'single',
        name: "Rachel Despard Album Release Show",
        location: 'Berlin: 25 Avenue A, New York, NY 10009',
        dateTime: new Date(2024, 9, 20, 19),
        ticketLink: 'https://www.ticketweb.com/event/rachel-despard-angora-shmay-berlin-tickets/13865923',
    }
];
