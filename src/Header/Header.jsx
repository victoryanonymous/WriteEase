import React, { Component } from 'react';
import GallaryImage from './GallaryImage';

export default function Header() {
    const images = [
        '../assets/logo.png',
        '../assets/Use Cases.png'
    ];
    return (
        <div className="header">
            <GallaryImage images={images} />
        </div>
    )           
}
