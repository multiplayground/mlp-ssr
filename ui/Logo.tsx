import Link from 'next/link'
import styled from 'styled-components'

export default () => (
    <Wrapper>
        <Link href='/'>
            <a>MLP</a>
        </Link>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    
    a {
        text-decoration: none;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        font-size: 18px;
        color: white;
        margin-right: 18px;

        :last-of-type {
            margin-right: 0px;
        }
    }
`