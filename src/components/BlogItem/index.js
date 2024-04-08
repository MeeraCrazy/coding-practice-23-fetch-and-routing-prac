// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <div className="blog-item-container">
      <img src={imageUrl} alt={`item${id}`} className="blog-item-image" />
      <div className="details-container">
        <p className="topic">{topic}</p>
        <h1 className="title">{title}</h1>
        <div className="avatar-container">
          <img src={avatarUrl} alt={`avatar${id}`} className="avatar-image" />
          <p className="author">{author}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
