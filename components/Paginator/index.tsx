import React, { useState } from 'react'
import styled, { css } from 'styled-components'

export type Props = {
    totalRecords: number
    pageLimit: number
    pageNeighbours: number
    onPageChanged: Function
    defaultPage: any
}

const defaultProps = {
    pageNeighbours: 3,
    defaultPage: 1,
}

const Paginator = (props: Props) => {
    const {
        totalRecords,
        pageLimit,
        pageNeighbours,
        onPageChanged,
        defaultPage,
    } = props

    const [currentPage, setCurrendPage] = useState(defaultPage)

    const pageChangeHandler = (pageIndex: Props['defaultPage']) => () => {
        setCurrendPage(pageIndex)
        onPageChanged(pageIndex)
    }

    const getTotalPages = () => {
        const result = Math.ceil(totalRecords / pageLimit)

        if (totalRecords === pageLimit) return 0
        if (result === 1) return 0
        return result
    }

    const getRange = () => {
        let totalPages = getTotalPages()
        if (totalPages === 0) return []

        const overflowBox = pageNeighbours * 2 + 2 >= totalPages
        if (overflowBox)
            return Array.from(new Array(totalPages), (_item, i) => i)

        totalPages--
        const rightBoxBoard = currentPage + pageNeighbours
        const BoxLeftCrossed = currentPage <= pageNeighbours
        const BoxRightCrossed = rightBoxBoard >= totalPages

        let prevStack = BoxLeftCrossed ? currentPage : pageNeighbours
        if (BoxRightCrossed) prevStack += rightBoxBoard - totalPages
        let nextStack = pageNeighbours * 2 - prevStack

        if (!BoxLeftCrossed) {
            prevStack--
            nextStack--
        }

        if (BoxRightCrossed) {
            prevStack++
            nextStack++
        }

        const range = [currentPage]
        for (let i = 1; i <= prevStack; i++) {
            range.unshift(currentPage - i)
        }

        for (let i = 1; i <= nextStack; i++) {
            range.push(currentPage + i)
        }

        if (!BoxLeftCrossed) {
            range.unshift('prev')
            range.unshift('first')
        }

        if (!BoxRightCrossed) {
            range.push('next')
            range.push('last')
        }

        return range
    }

    const pagePrevNextHandler = (command: string) => () => {
        if (command === 'prev') {
            setCurrendPage((state: any) => --state.currentPage)
            pageChangeHandler(currentPage)()
        }

        if (command === 'next') {
            setCurrendPage((state: any) => ++state.currentPage)
            pageChangeHandler(currentPage)()
        }
    }

    const totalPages = getTotalPages()

    if (!totalRecords || !pageLimit) return <div />

    let range = getRange() || []

    const renderButton = (index: string) => {
        switch (index) {
            case 'prev':
                return (
                    <ButtonStyled
                        key={'prev'}
                        onClick={pagePrevNextHandler('prev')}
                    >
                        {'<'}
                    </ButtonStyled>
                )
            case 'next':
                return (
                    <ButtonStyled
                        key={'next'}
                        onClick={pagePrevNextHandler('next')}
                    >
                        {'>'}
                    </ButtonStyled>
                )
            case 'first':
                return (
                    <ButtonStyled key={'first'} onClick={pageChangeHandler(0)}>
                        {1}
                    </ButtonStyled>
                )
            case 'last':
                return (
                    <ButtonStyled
                        key={'last'}
                        onClick={pageChangeHandler(totalPages - 1)}
                    >
                        {totalPages}
                    </ButtonStyled>
                )
            default:
                return (
                    <ButtonStyled
                        key={index}
                        active={currentPage === index}
                        onClick={pageChangeHandler(index)}
                    >
                        {index + 1}
                    </ButtonStyled>
                )
        }
    }

    return <>{range.map(pageIndex => renderButton(pageIndex))}</>
}

Paginator.defaultProps = defaultProps

export default React.memo(Paginator)

type IButtonStyled = {
    invisible?: boolean
    active?: boolean
}

const hide = css`
    display: 'none';
`
const active = css`
    margin-top: 7px;
`
const ButtonStyled = styled.button<IButtonStyled>`
    ${props => props.invisible && hide}
    ${props => props.active && active}
`
