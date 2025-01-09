import React from "react";
import {pfp} from '../assets/images'
import RowItem from "./common/RowItem.jsx";
import { details } from "../constants";

const Profile = ({name = "Amin Mohammad", profile = pfp}) => {
    return (
        <section className=" bg-white rounded-md p-3">
            <div className={"flex flex-col justify-center items-center"}>
                <h2 className="capitalize text-2xl text-center text-secondary font-semibold font-palanquin">{name}</h2>
                <div><img src={profile} width={233} className=" mt-5 object-cover aspect-square rounded-full"
                          alt="Profile Picture"/></div>
                <div className={"flex justify-center items-center w-full"}>
                    <ul className="list-none w-full mt-4 p-2">
                        {details.map((item, index) => (
                            <RowItem key={index} title={Object.keys(item)} value={Object.values(item)}/>))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Profile;
