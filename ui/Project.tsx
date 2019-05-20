import styled from 'styled-components'
import Text from '../components/Text'
import ProjectTile from './ProjectTile'
import PeopleSvg from '@material-ui/icons/People'

import { IProject } from '../api/project'

export type Props = {
    data: IProject
}

const Project = (props: Props) => {
    const {
        title,
        full_description,
        preview,
        number_of_people,
        technologies,
    } = props.data

    const previewProps = {
        name: title,
        stack: technologies.map((tech: any) => tech.title).join(', '),
        preview: preview || undefined,
    }

    return (
        <Wrapper>
            <ImageBox>
                <ProjectTile {...previewProps} />
                <Title variant="h4" colorBase="palette">
                    {title}
                </Title>
            </ImageBox>
            <Content>
                <Members variant="body1" colorBase="palette" align="right">
                    <PeopleSvg />
                    {number_of_people}
                </Members>
                <Description variant="body1" colorBase="palette">
                    {full_description}
                </Description>
            </Content>
        </Wrapper>
    )
}

export default Project

const Wrapper = styled.div`
    margin: 100px;
    margin-bottom: 0px;
    display: flex;
`
const ImageBox = styled.div`
    position: relative;
    width: 280px;
    height: 320px;
`
const Content = styled.div`
    margin-left: 100px;
    svg {
        vertical-align: bottom;
        margin-right: 5px;
    }
`
const Title = styled(Text)`
    position: absolute;
    top: 0;
    padding: 5px 6px;
    background-color: black;
    transform: translate(196px, 30px);
`
const Description = styled(Text)``
const Members = styled(Text)`
    margin-bottom: 90px;
`
