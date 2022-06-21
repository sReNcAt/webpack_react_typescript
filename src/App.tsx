import React, { useEffect } from 'react'

export default function App() {
    async function test() {
        await new Promise<void>((resolve) => {
            setTimeout(() => {
                resolve()
            }, 1000)
        })

        console.log('done')
    }

    useEffect(() => {
        test()
    }, [])

    return <h1>Hello World!</h1>
}