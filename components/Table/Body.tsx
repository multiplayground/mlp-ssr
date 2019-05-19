import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export type Props = {
    data: Array<any>
    columns: Array<any>
    onRowClick?: Function
    defaultRow?: number
}

export type IRowProps = {
    active: boolean
    hovered: boolean
}

const defaultProps = {
    data: Array(),
    columns: Array(),
}

const Body = (props: Props) => {
    const { data, columns, onRowClick, defaultRow } = props

    const [activeRow, setActiveRow] = useState(defaultRow)

    const rowClickHandle = (row: any, i: number) => () => {
        if (onRowClick) {
            setActiveRow(i)
            onRowClick(row, i)
        }
    }

    return (
        <tbody>
            {data.map((row, rowIndex) => (
                <RowStyled
                    key={row.id}
                    onClick={rowClickHandle(row, rowIndex)}
                    active={rowIndex === activeRow}
                    hovered={!!onRowClick}
                >
                    {columns.map(item => (
                        <td key={item.title + row.id} style={item.style}>
                            {item.render(row, rowIndex)}
                        </td>
                    ))}
                </RowStyled>
            ))}
        </tbody>
    )
}

Body.defaultProps = defaultProps

export default React.memo(Body)

const active = css`
    background-color: hsl(258, 49%, 93%);
`

const hoveredRow = css`
    cursor: pointer;

    :hover {
        background-color: hsl(258, 49%, 93%);
    }
`
const RowStyled = styled.tr<IRowProps>`
    ${props => props.active && active}
    ${props => props.hovered && hoveredRow}
`
