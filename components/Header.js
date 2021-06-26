import Image from 'next/image';
import HeaderItem from './HeaderItem';
import Nav from './Nav';
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import React from 'react';

function Header() {
    return (
        <React.Fragment>
            
            <header className='flex flex-col sm:flex-row justify-between'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItem Icon={HomeIcon} title='HOME' />
                <HeaderItem Icon={LightningBoltIcon} title='TRENDING' />
                <HeaderItem Icon={BadgeCheckIcon} title='VERIFIED' />
                <HeaderItem Icon={CollectionIcon} title='COLLECTIONS' />
                <HeaderItem Icon={SearchIcon} title='SEARCH' />
                <HeaderItem Icon={UserIcon} title='ACCOUNT' />
            </div>
            <Image className="object-contain" src='https://links.papareact.com/ua6' width={200} height={100} />
            </header>

        </React.Fragment>
       
    )
}

export default Header
