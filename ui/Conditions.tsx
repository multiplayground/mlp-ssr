import React from 'react'
import styled from 'styled-components'
import Text from '../components/Text'

const Conditions = () => {
    return (
        <Wrapper>
            <Article>
                <Title variant="h3" colorBase="palette">
                    #Условия
                    <Subline />
                </Title>
                <Text variant="body1" colorBase="palette">
                    От Вас требуется не менее одно раза в неделю делать
                    PullRequest и писать небольшой отчет о том что делаете.
                    Отчеты публикуются в канале #мотивация и служат одновременно
                    мотивацией для других участников проекта Devs.
                </Text>
                <Text variant="body1" colorBase="palette">
                    Если вы реально что-то делаете, но не получается (не можете
                    опубликовать код), то мы продолжаем с Вами работать.
                </Text>
            </Article>
            <Article>
                <Title variant="h3" colorBase="palette">
                    #Проекты
                    <Subline />
                </Title>
                <Text variant="body1" colorBase="palette">
                    Чтобы начать, Вам нужно определиться с проектом для участия.
                    У нас их несколько, и количество постоянно растет.
                </Text>
            </Article>
        </Wrapper>
    )
}

export default Conditions

const Wrapper = styled.div`
    padding: 60px 240px 0px 480px;
`

const Article = styled.article`
    padding-top: 30px;
    margin-bottom: 40px;
`
const Title = styled(Text)`
    background-color: black;
    position: absolute;
    padding: 8px 45px;
    transform: translate(-345px, -20px);
`
const Subline = styled.div`
    width: 65px;
    border-bottom: 0.5px solid white;
    bottom: 5px;
    left: 5px;
    transform: translateX(-30px);
`
