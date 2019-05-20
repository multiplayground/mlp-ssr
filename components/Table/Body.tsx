import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export type Props = {
    data: Array<any>
    columns: Array<any>
    onRowClick?: Function
    defaultRow?: number
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
    background-color: #ecf8ff;
`

const RowStyled = styled.tr<{ active: boolean; hovered: boolean }>`
    ${props => props.active && active}
`
