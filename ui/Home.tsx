import styled from 'styled-components'
import Button from '../components/Button'
import Text from '../components/Text'
import ProjectTile from './ProjectTile'
import { IProjectList } from '../api/projectList'
import Link from 'next/link'

const Home = (props: IProjectList) => {
    const projectList = props.results.map((item: any) => {
        return {
            key: item.slug,
            name: item.title,
            preview: item.preview || undefined,
            stack:
                item.technologies &&
                item.technologies.map((tech: any) => tech.title).join(', '),
        }
    })

    return (
        <Wrapper>
            <GreetingWrapper>
                <Text variant="body1" color="primary">
                    Начни карьеру разработчика
                </Text>
                <Text variant="h4" color="primary">
                    Обучение программированию через практику
                </Text>
                <Text variant="body2" color="primary">
                    Те кто работает остаются в проекте, остальные вылетают
                </Text>
                <BtnWrapper>
                    <Link href="/project-list">
                        <Button color="info" size="large" roundCorner>
                            Проекты
                        </Button>
                    </Link>
                    <Link href="/conditions">
                        <Button color="white" size="large" roundCorner>
                            Условия
                        </Button>
                    </Link>
                </BtnWrapper>
            </GreetingWrapper>
            <TilesWrapper>
                {projectList.map((item: any) => (
                    <ProjectTile {...item} />
                ))}
            </TilesWrapper>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const GreetingWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    max-width: 380px;
    margin-top: 160px;
    margin-left: 110px;

    & > * {
        font-family: 'Roboto Mono', sans-serif;
        font-weight: bold;
        margin: 10px 0;
    }
`

const BtnWrapper = styled.div`
    margin-top: 40px;
    & > * {
        margin-right: 28px;
    }
`

const TilesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 600px;
    height: 800px;
    margin-top: 20px;
    transform: translateX(80px);

    & > div {
        margin-bottom: 25px;
    }

    & > div:nth-child(-n + 2) {
        transform: translateY(120px);
    }

    & > div:nth-child(n + 3) {
        transform: translateY(50px);
    }
`
