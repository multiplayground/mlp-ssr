import styled from 'styled-components'
import Text from '../components/Text'

export type Props = {
    name?: string,
    stack?: string,
    preview?: string,
}

const defaultProps = {
    name: 'Discord Bot',
    stack: 'PHP, LIVIA, CI, CD',
    preview: '/static/images/project-1.png',
};

const ProjectTile = (props: Props) => {
    const { name, stack, preview } = props

    return (
        <Wrapper>
            <ImageBox>
                <img src={preview} />
                <Title>
                    <Text variant="h6" align="right" fontWeight="bold">{name}</Text>
                    <Text variant="h6" align="right" colorBase="palette" color="error">{stack}</Text>
                </Title>
            </ImageBox>
        </Wrapper>
    )
}

ProjectTile.defaultProps = defaultProps

export default ProjectTile

const Wrapper = styled.div`
    width: 280px;
    background-color: white;
`

const ImageBox = styled.div`
    padding: 14px;

    img {
        width: 100%;
    }
`

const Title = styled.div`
    padding-top: 5px;
    margin-bottom: 10px;
`