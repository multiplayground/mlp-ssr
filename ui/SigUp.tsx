import styled from 'styled-components'
import Button from '../components/Button'
import Text from '../components/Text'
import { TextField } from '../components/TextField/index'

const Home = () => {
    return (
        <Wrapper>
            <Greeting>
                <Text variant="h4" colorBase="palette">
                    Регистрация
                </Text>
                <Text variant="h6" colorBase="palette">
                    Начни свой путь с практики
                </Text>
            </Greeting>
            <FormWrapper>
                <TextField placeholder="Email" />
                <TextField placeholder="Пароль" />
                <TextField placeholder="Повторите пароль" />
                <Button color="info" fullWidth>
                    Зарегестрироваться
                </Button>
            </FormWrapper>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    display: flex;
    min-height: 460px;
    background-color: aqua;
    background-color: white;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.24);
`
const Greeting = styled.div`
    background-color: #48bbff;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 415px;
`
const FormWrapper = styled.div`
    margin: 100px 50px;
    width: 310px;
    input {
        margin-bottom: 9px;
    }
`
