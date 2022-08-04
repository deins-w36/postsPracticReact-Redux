import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './post.scss'

const Post = () => {
    const { posts, users, tempId } = useSelector((store) => store)

    const onePost = posts.filter((item) => item.id === tempId)[0]
    const namePersone = users.filter((item) => item.id === onePost.userId)[0].name

    return (
        <section className="post">
            <div className="containerr">
                <div className="post__item">
                    <div className="post__title">{onePost.title}</div>
                    <div className="post__name">{namePersone}</div>
                    <div className="post__text">{onePost.body}</div>
                </div>
                <Link to="/">
                    <div className="post__back">
                        <span></span>
                        <span></span>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Post
