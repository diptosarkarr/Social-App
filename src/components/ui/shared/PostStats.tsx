import { Models } from "appwrite"

type PostStateProps = {
    post: Models.Document
    userId: string;
}

const PostStats = ({ post, userId }: PostStateProps) => {
    return (
        <div>PostStats</div>
    )
}

export default PostStats