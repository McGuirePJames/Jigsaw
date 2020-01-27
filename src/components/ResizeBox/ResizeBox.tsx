import React, { useState, MouseEvent as ReactMouseEvent } from 'react'
import './ResizeBox.scss'

export interface ResizeBoxProps {
    height?: number
    width?: number
}

export const ResizeBox: React.FC<ResizeBoxProps> = props => {
    let mouseX = 0
    
    const [height] = useState<number>(props.height!)
    const [width, setWidth] = useState<number>(props.width!)

    const handleMouseDownOnBorder = (e: ReactMouseEvent) => {
        mouseX = e.clientX

        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMouseMove)
        })

        document.addEventListener('mousemove', handleMouseMove)
    }

    const handleMouseMove = (e: MouseEvent) => {
        const pixelsMoved = mouseX - e.clientX
        setWidth(width - pixelsMoved)
    }

    return (
        <div className="resize-box-component">
            <div
                className="resize-box"
                style={{ height: height, width: width }}
            >
                <div className="resize-box__border resize-box__border-top" />
                <div
                    className="resize-box__border resize-box__border-right"
                    onMouseDown={handleMouseDownOnBorder}
                />
                <div className="resize-box__border resize-box__border-bottom" />
                <div className="resize-box__border resize-box__border-left" onMouseDown={handleMouseDownOnBorder}/>

                {props.children}
            </div>
        </div>
    )
}

ResizeBox.defaultProps = {
    height: 300,
    width: 300,
}

export default ResizeBox
