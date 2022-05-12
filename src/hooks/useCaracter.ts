import { useState } from "react"
import { CharacterSides } from '../types/CharacterSides'

export const useCaracter = () => {

    const [pos, setPos] = useState({ x: 3, y: 5 })
    const [side, setSide] = useState<CharacterSides>('down')


    const moveLeft = () => {
        setPos(pos => ({
            x: pos.x -1,
            y: pos.y
        }))
        setSide('left')
    }
    const moveRight = () => {
        setPos(pos => ({
            x: pos.x +1,
            y: pos.y
        }))
        setSide('right')
    }
    const moveDown = () => {
        setPos(pos => ({
            x: pos.x ,
            y: pos.y + 1
        }))
        setSide('down')
    }
    const moveUp = () => {
        setPos(pos => ({
            x: pos.x ,
            y: pos.y - 1
        }))
        setSide('up')
    }

    return {
        x: pos.x,
        y: pos.y,
        moveLeft,
        moveDown,
        moveRight,
        moveUp,
        side
    }
}