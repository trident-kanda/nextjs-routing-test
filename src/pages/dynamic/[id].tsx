import { useRouter } from 'next/router'
const post = () => {
    const router = useRouter()
    const { pid } = router.query
    return(
        <div>
            <h1>{pid}</h1>
        </div>
    )
}

export default post