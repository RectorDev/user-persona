import React from 'react'
import Profile from './stacks/Profile'
import Bio from "./stacks/Bio.jsx";
import Qoute from "./stacks/Qoute.jsx";
import Personality from "./stacks/Personality.jsx";
import CoreNeeds from "./stacks/CoreNeeds.jsx";
import Frustrations from "./stacks/Frustrations.jsx";
import Brands from "./stacks/Brands.jsx";
import Payments from "./stacks/Payments.jsx";
import Platform from "./stacks/Platform.jsx";

const Template = () => {
    return (
        <section className='max-w-screen-wide bg-primary p-4 '>
            <div className={'flex flex-1 gap-4'}>
                <div className={'flex flex-col gap-4 flex-shrink-0'}><Profile/><Qoute/><Personality/></div>
                <div className={'flex flex-col gap-4 shrink-0 flex-1'}><Bio/><CoreNeeds/><Frustrations/><Brands/>
                    <div className={'flex gap-4 flex-'}><Payments/><Platform/></div>
                </div>
            </div>
        </section>
    )
}

export default Template