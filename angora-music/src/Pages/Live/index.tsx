import React, { useMemo } from 'react';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';
import { SingleLiveShow, dateFormat, liveShows } from '../../utils/live';
import DualColorContainer from '../../Components/Containers/DualColorContainer';
import moment from 'moment';

const Live = () => {
	const futureShows = useMemo(() => {
		return liveShows.filter(show => {
			if (show.type === 'single') {
				return show.dateTime >= new Date();
			} else {
				return show.locations.some(single => single.dateTime >= new Date());
			}
		})
	}, []);
	return (
		<PageBodyContainer>
			{futureShows.length > 0 && futureShows.map((live, ind) => {
				const tourDatePairs: (SingleLiveShow | SingleLiveShow[])[] = [];
				if (live.type === 'tour') {
					for (let i = 0; i < live.locations.length; i += 2) {
						if (live.locations[i + 1]) {
							tourDatePairs.push([live.locations[i], live.locations[i + 1]]);
						} else {
							tourDatePairs.push(live.locations[i]);
						}
					}
				}
				return (
					<DualColorContainer flip={ind % 2 === 1}>
						<div className='gap-6 lg:gap-12   flex flex-col'>
							<p className='text-4xl lg:text-6xl   flex justify-center text-center'>{live.name}</p>
							{live.type === 'single' && (
								<div className='gap-2 lg:gap-4   flex flex-col'>
									<p className='text-xl lg:text-2xl   flex justify-center text-center font-semibold'>
										{live.location}
									</p>
									<p className='text-xl lg:text-2xl   flex justify-center text-center'>
										{moment(live.dateTime).format(dateFormat)}
									</p>
									{live.ticketLink && (
										<a
											href={live.ticketLink}
											target='_blank'
											rel='noopener noreferrer'
											className='text-2xl lg:text-4xl   flex justify-center text-center font-bold underline'
										>
											TICKETS
										</a>
									)}
								</div>
							)}
							{live.type === 'tour' && (
								<div className='flex flex-col gap-4 lg:gap-8'>
									<p className='text-2xl lg:text-4xl   flex justify-center text-center'>{live.season}</p>
									<div className='gap-2 lg:gap-4   flex flex-col'>
										{tourDatePairs.map((showPair) => (
											<div
												className={`flex-col lg:flex-row   w-fit lg:w-3/4 xl:w-2/3 3xl:w-1/2   justify-center ${
													Array.isArray(showPair) ? 'lg:justify-between' : 'lg:justify-center'
												}   flex mx-auto gap-y-2 text-center`}
											>
												{(Array.isArray(showPair) ? showPair : [showPair]).map((show) => (
													<div className='gap-1 lg:gap-2   flex flex-row items-center'>
														<p className='text-xl lg:text-2xl   flex'>
															{show.location} - {moment(show.dateTime).format(dateFormat)}
														</p>
														{show.ticketLink && (
															<p className='text-2xl lg:text-4xl   flex font-bold'>
																(
																<a
																	href={show.ticketLink}
																	target='_blank'
																	rel='noopener noreferrer'
																	className='underline'
																>
																	TICKETS
																</a>
																)
															</p>
														)}
													</div>
												))}
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</DualColorContainer>
				);
			})}
			{futureShows.length === 0 && (
				<DualColorContainer>
					<div className='flex flex-col justify-center items-center'>
						<p className='text-4xl lg:text-8xl   flex mx-auto'>MORE SHOWS COMING SOON</p>
						<p className='text-xl lg:text-2xl   flex mx-auto'>Stay tuned...</p>
					</div>
				</DualColorContainer>
			)}
			<div className='my-8 lg:my-16   gap-4 lg:gap-8   flex flex-col'>
				<p className='text-4xl lg:text-8xl   flex mx-auto justify-center text-center'>BOOK US</p>
				<a
					href='mailto:its@angora.band'
					className='text-xl lg:text-2xl   inline-block mx-auto justify-center text-center underline'
				>
					its@angora.band
				</a>
			</div>
		</PageBodyContainer>
	);
};

export default Live;
