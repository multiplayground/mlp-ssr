import { useStore } from 'effector-react'
import Router from 'next/router'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ISignInRequest, signInUser } from '../api/signIn'
import Button from '../components/Button'
import Text from '../components/Text'
import { TextField } from '../components/TextField/index'
import { signInStore } from '../store/signIn'

const Home = props => {
    const { status, result } = useStore(signInStore)
    const [state, setState] = useState<ISignInRequest>({})

    useEffect(() => {
        if (status === 'success') {
            document.cookie = `utoken=${result.token}`
            Router.push('/')
            props.onSubmit()
        }
    }, [result])

    const submitHandle = (e: React.SyntheticEvent) => {
        e.preventDefault()
        signInUser(state)
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
        console.log(data)

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
            <FormWrapper>
                <Form onSubmit={submitHandle}>
                    <TextField
                        placeholder="Логин"
                        value={state.login}
                        variant={checkFieldStatus('login')}
                        onChange={onChangeField('login')}
                    />
                    <TextField
                        type="password"
                        placeholder="Пароль"
                        value={state.password}
                        variant={checkFieldStatus('password')}
                        onChange={onChangeField('password')}
                    />
                    <Button type="submit" fullWidth>
                        Войти
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
                </ErrorMessage>
            </FormWrapper>
        </Wrapper>
    )
}

export default Home

const Wrapper = styled.div`
    display: flex;
    background-color: aqua;
    background-color: white;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.24);
`

const FormWrapper = styled.div`
    margin: 50px 50px;
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
