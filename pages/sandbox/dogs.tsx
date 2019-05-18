import { useStore } from 'effector-react'
import { useEffect } from 'react'

import { getRandomDog } from '../../api/sandbox/getDog'
import Layout from '../../layouts/main'
import { dogStore } from '../../store/sandbox/dogs'

export default () => {
    const dog = useStore(dogStore)

    useEffect(() => {
        getDogHandler()
    }, [])

    const getDogHandler = async () => {
        await getRandomDog({ id: 2 })
    }

    return (
        <Layout>
            <button onClick={getDogHandler}>get dog</button>
            <img src={dog} height="200px" />
        </Layout>
    )
}
