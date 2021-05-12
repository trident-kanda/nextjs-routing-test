import { GetStaticPaths, GetStaticProps } from "next"
type props = {
    id:string
    data:any
}
const Post = ({id,data}:props) => {
    if(data.message == undefined){
        return(
            <div>
                {data.length >= 30 &&
                    <h1>{id}のレポジトリ数{data.length}以上</h1>
                }
                {data.length < 30 &&
                    <h1>{id}のレポジトリ数{data.length}</h1>
                }
            </div>
        )
    }else{
        return(
            <div>
                <h1>存在しないIDまたはエラー</h1>
            </div>
        )
    }
}

export default Post

export const getStaticPaths:GetStaticPaths = async () => {
    return {
        paths:[
            {params: {id : "trident-kanda"}},
            {params: { id: "vercel"}}
        ],
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const id = params?.id
    const repoRes = await fetch(`https://api.github.com/users/${id}/repos`)
    const data:any = await repoRes.json()
    return{
        props:{
            id,
            data
        }
    }
}