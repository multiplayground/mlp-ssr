import { useStore } from 'effector-react'
import React, { useState } from 'react'
import styled from 'styled-components'

import { ISignUpRequest, signUpUser } from '../api/signUp'
import Button from '../components/Button'
import Text from '../components/Text'
import { TextField } from '../components/TextField/index'
import { signUpStore } from '../store/signUp'

const Home = () => {
    const { status, result } = useStore(signUpStore)
    const [state, setState] = useState<ISignUpRequest>({})

    const submitHandle = (e: React.SyntheticEvent) => {
        e.preventDefault()
        signUpUser(state)
        console.log('submit')
    }

    const onChangeField = name => (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        e.persist()

        setState(state => ({
            ...state,
            [name]: e.target.value,
        }))
    }
    const errorReport = () => {
        const data = result && result
        if (status === 'error' && data) {
            let report = Array()
            for (let key in data) {
                report.push(
                    <div key={key}>{`${key}: ${data[key].join(' ')}`}</div>
                )
            }
            return report
        }
    }

    const checkFieldStatus = field => {
        if (result && status === 'error' && result && result[field]) {
            return 'danger'
        }
    }

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
                <Form onSubmit={submitHandle}>
                    <TextField
                        placeholder="Логин"
                        value={state.login}
                        variant={checkFieldStatus('login')}
                        onChange={onChangeField('login')}
                    />
                    <TextField
                        placeholder="Email"
                        value={state.email}
                        variant={checkFieldStatus('email')}
                        onChange={onChangeField('email')}
                    />
                    <TextField
                        placeholder="Телефон"
                        value={state.phone}
                        variant={checkFieldStatus('phone')}
                        onChange={onChangeField('phone')}
                    />
                    <TextField
                        type="password"
                        placeholder="Повторите пароль"
                        value={state.password1}
                        variant={checkFieldStatus('password1')}
                        onChange={onChangeField('password1')}
                    />
                    <TextField
                        type="password"
                        placeholder="Повторите пароль"
                        value={state.password2}
                        variant={checkFieldStatus('password2')}
                        onChange={onChangeField('password2')}
                    />
                    <Button type="submit" fullWidth>
                        Зарегестрироваться
                    </Button>
                </Form>
                <ErrorMessage>
                    {status === 'error' && (
                        <Text
                            variant="overline"
                            color="error"
                            colorBase="palette"
                        >
                            {errorReport()}
                        </Text>
                    )}
                    {status === 'success' && (
                        <Text
                            variant="overline"
                            color="primary"
                            colorBase="palette"
                        >
                            Вы были успешно зарегестрированы.
                        </Text>
                    )}
                </ErrorMessage>
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
    margin: 80px 50px;
    margin-bottom: 0px;
    width: 310px;
    input {
        margin-bottom: 9px;
    }
`
const Form = styled.form`
    button {
        margin-top: 18px;
    }
`

const ErrorMessage = styled.div`
    text-align: center;
`
