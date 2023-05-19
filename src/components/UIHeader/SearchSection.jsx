import React from 'react';
import '../HeaderComponents/Header.scss';

export default function SearchSection (props){
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    )
}