// Write your JS code here
import {Component} from 'react'

import BlogItem from '../BlogItem'

import './index.css'

const blogsList = {
  id: 1,
  title: 'React v16.9.0 and the Roadmap Update',
  imageUrl: 'https://miro.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png',
  avatarUrl: 'https://miro.medium.com/max/4096/1*wiOSfPd2sY0gXSNK9vv6bg.jpeg',
  author: 'Dan Abramov,',
  topic: 'React.js',
}

class BlogList extends Component {
  render() {
    return (
      <div className="blog-list-container">
        {blogsList.map(eachBlog => (
          <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
        ))}
      </div>
    )
  }
}

export default BlogList
