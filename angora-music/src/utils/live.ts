export interface SingleLiveShow {
	type: 'single';
	name: string;
	location: string;
	dateTime: string;
    ticketLink?: string;
}

export interface TourLiveShow {
	type: 'tour';
	name: string;
	season: string;
	locations: SingleLiveShow[];
}

export const liveShows: (SingleLiveShow | TourLiveShow)[] = [
    {
        type: 'single',
        name: 'Long Live the Rabbit Live Show',
        location: 'trans-pecos: 9-15 Wycoff Ave. Queens, NY 11385',
        dateTime: 'Wednesday, August 21st @ 7pm',
        ticketLink: 'https://www.venuepilot.co/events/111840/orders/new#/'
    }
    // sample values:
    // {
    //     type: 'single',
    //     name: 'Live Music Thursdays',
    //     location: 'Real Live Music Bar Name',
    //     dateTime: 'Thursdays at 9pm'
    // },
    // {
    //     type: 'tour',
    //     name: 'The Eras Tour lol',
    //     season: 'Spring 2024',
    //     locations: [
    //         {
    //             type: 'single',
    //             name: '',
    //             location: 'New York, NY',
    //             dateTime: '3/14/24',
    //             ticketLink: 'https://notticketmaster.com'
    //         },
    //         {
    //             type: 'single',
    //             name: '',
    //             location: 'New York, NY',
    //             dateTime: '3/15/24',
    //             ticketLink: 'https://notticketmaster.com'
    //         },
    //         {
    //             type: 'single',
    //             name: '',
    //             location: 'Baltimore, MD',
    //             dateTime: '3/20/24',
    //             ticketLink: 'https://notticketmaster.com'
    //         },
    //         {
    //             type: 'single',
    //             name: '',
    //             location: 'Baltimore, MD',
    //             dateTime: '3/21/24',
    //             ticketLink: 'https://notticketmaster.com'
    //         },
    //         {
    //             type: 'single',
    //             name: '',
    //             location: 'Philadelphia, PA',
    //             dateTime: '4/1/24',
    //             ticketLink: 'https://notticketmaster.com'
    //         }
    //     ]
    // }
];
