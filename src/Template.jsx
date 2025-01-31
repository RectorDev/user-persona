import React from 'react'
import Profile from './stacks/Profile'
import Bio from "./stacks/Bio.jsx";
import Quote from "./stacks/Quote.jsx";
import Personality from "./stacks/Personality.jsx";
import CoreNeeds from "./stacks/CoreNeeds.jsx";
import Frustrations from "./stacks/Frustrations.jsx";
import Brands from "./stacks/Brands.jsx";
import Payments from "./stacks/Payments.jsx";
import Platform from "./stacks/Platform.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

const Template = () => {
    return (
        <section className=' my-0 mx-auto max-w-5xl  bg-primary p-4 '>
            <div className={'flex flex-1 gap-4'}>
                <div className={'flex flex-col gap-4 flex-shrink-0 max-w-[26%]'}><Profile/><Quote/><Personality/></div>
                <div className={'flex flex-col gap-4 flex-1'}><Bio/><CoreNeeds/><Frustrations/><Brands/>
                    <div className={'flex-row flex gap-4 w-full'}><Payments/><Platform/></div>
                </div>
            </div>

          <div className={'absolute left-0 top-0'}><ThemeToggle/></div>
        </section>
    )
}

export default Template