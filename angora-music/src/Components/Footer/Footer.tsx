import React from 'react';
import { StreamingPlatformLinkKey, streamingPlatformLinks } from '../../utils/navigation';
import { images } from '../../utils/images';

interface Props {
    simplify?: boolean
}

const Footer = (props: Props) => {
    const { simplify } = props;
	return (
        <div className='p-4 lg:p-8   gap-4 lg:gap-8   flex flex-col w-full mt-auto bg-angora-dark-black text-angora-dark-white text-sm'>
            {!simplify && (
                <div className='lg:w-1/3   mx-8 lg:mx-auto   flex flex-row justify-evenly items-center'>
                    {Object.keys(streamingPlatformLinks).map((key) => (
                        <a
                            href={streamingPlatformLinks[key as StreamingPlatformLinkKey]}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-8 lg:w-12   h-8 lg:h-12'
                        >
                            <img src={images[key + '.png']} alt={key} className='grayscale hover:grayscale-0' />
                        </a>
                    ))}
                </div>
            )}
            <div className='flex flex-row items-center justify-between'>
                <a href='mailto:angora@gmail.com' className='flex my-auto underline'>
                    Contact us
                </a>
                <p className='flex my-auto'>
                    Copyright © 2024 Aaron Morrison, Sabine Kearley
                </p>
            </div>
        </div>
    );
};

export default Footer;
