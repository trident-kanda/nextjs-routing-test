import { GetServerSideProps } from "next"
type props = {
    id:string
    data:any
}
const Post = ({id,data}:props) => {
    console.log(data)
    if(data.message == undefined){
        return(
            <div>
                <h1>{id}のレポジトリ数{data.length}</h1>
            </div>
        )
    }else{
        return(
            <div>
                <h1>存在しないID</h1>
            </div>
        )
    }
}
export default Post

export const getServerSideProps: GetServerSideProps = async (props) => {
    const id = props.query.id
    const repoRes = await fetch(`https://api.github.com/users/${id}/repos`)
    const data:any = await repoRes.json()
    return{
        props:{
            id,
            data
        }
    }
}