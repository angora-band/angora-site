import React from 'react';
import { DisplayMode } from '../../types/display';
import PageBodyContainer from '../../Components/Containers/PageBodyContainer';
import { SingleLiveShow, liveShows } from '../../utils/live';
import DualColorContainer from '../../Components/Containers/DualColorContainer';

interface Props {
	theme: DisplayMode;
}

const Live = (props: Props) => {
	const { theme } = props;

	return (
		<PageBodyContainer theme={theme}>
			{liveShows.map((live, ind) => {
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
					<DualColorContainer theme={theme} flip={ind % 2 === 1}>
						<div className='gap-6 lg:gap-12   flex flex-col'>
							<p className='text-4xl lg:text-6xl   flex justify-center text-center'>{live.name}</p>
							{live.type === 'single' && (
								<div className='gap-2 lg:gap-4   flex flex-col'>
									<p className='text-xl lg:text-2xl   flex justify-center text-center font-semibold'>
										{live.location}
									</p>
									<p className='text-xl lg:text-2xl   flex justify-center text-center'>{live.dateTime}</p>
									{live.ticketLink && (
										<a
											href={live.ticketLink}
											target='_blank'
											rel='noopener noreferrer'
											className='text-sm lg:text-lg   flex justify-center text-center underline'
										>
											Tickets
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
															{show.location} - {show.dateTime}
														</p>
														{show.ticketLink && (
															<p className='text-xs lg:text-sm   flex'>
																(
																<a
																	href={show.ticketLink}
																	target='_blank'
																	rel='noopener noreferrer'
																	className='underline'
																>
																	Tickets
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
			<div className='my-8 lg:my-16   gap-4 lg:gap-8   flex flex-col'>
				<p className='text-4xl lg:text-8xl   flex mx-auto justify-center text-center'>
					BOOK US
				</p>
				<a href='mailto:angora@gmail.com' className='text-xl lg:text-2xl   inline-block mx-auto justify-center text-center underline'>
					angora@gmail.com
				</a>
			</div>
		</PageBodyContainer>
	);
};

export default Live;
