import React, { useCallback } from 'react'
import styled, { css } from 'styled-components'
import Text from '../Text'
import Body from './Body'

export type Props = {
    data: Array<any>
    columns: Array<ITableColumns>
    onRowClick?: Function
    loading: boolean
    defaultRow?: number
    loader?: React.ReactNode
}

export type ITableColumns = {
    title?: string
    render?: Function
    style?: object
}

const defaultProps = {
    loading: false,
    data: Array(),
    columns: Array(),
}

const GridView = (props: Props) => {
    const { data, columns, onRowClick, loading, defaultRow, loader } = props

    return (
        <Wrapper>
            <LoaderWrapper loading={loading}>
                {loader || 'Загрузка...'}
            </LoaderWrapper>
            {!data.length && !loading && (
                <VoidBody>
                    <Text variant="body1">Записи отсутствуют</Text>
                </VoidBody>
            )}
            <TableStyled>
                {!!data.length && (
                    <thead>
                        <tr>
                            {columns.map((item: ITableColumns) => (
                                <td key={item.title} style={item.style}>
                                    {item.title}
                                </td>
                            ))}
                        </tr>
                    </thead>
                )}
                <Body
                    data={data}
                    columns={useCallback<any>(columns, [data])}
                    defaultRow={defaultRow}
                    onRowClick={onRowClick}
                />
            </TableStyled>
        </Wrapper>
    )
}

GridView.defaultProps = defaultProps

export default GridView

const Wrapper = styled.div`
    position: relative;
`

const baseTd = css`
    padding: 12px 8px;
    position: relative;
    border-bottom: none;
    vertical-align: middle;
`
const base = css`
    width: 100%;
    border-collapse: collapse;
    position: relative;
    
    thead td {
        ${baseTd}
        font-size: ${props => props.theme.typography.body2.fontSize}rem;
        font-family: ${props => props.theme.typography.body2.fontFamily};
        line-height:  ${props => props.theme.typography.body2.lineHeight};
    }

    tbody td {
        ${baseTd}
        font-size: ${props => props.theme.typography.body2.fontSize}rem;
        font-family: ${props => props.theme.typography.body2.fontFamily};
        line-height:  ${props => props.theme.typography.body2.lineHeight};
    }
`

const TableStyled = styled.table`
    ${base}
`
const hide = css`
    display: none;
`

const LoaderWrapper = styled.div<{ loading: boolean }>`
    position: absolute;
    width: 80px;
    transform: translate(-50%, -50%);
    top: 0%;
    left: 50%;
    z-index: 1;
    ${props => !props.loading && hide}
`

const VoidBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`
