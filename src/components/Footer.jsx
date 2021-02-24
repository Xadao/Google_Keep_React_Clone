//jshint esversion: 6
import { getAllByPlaceholderText } from '@testing-library/react'
import React from 'react'

function Footer() {
    const currYear = new Date().getFullYear()
    return <footer><p>Copryright {currYear}</p></footer>
}

export default Footer