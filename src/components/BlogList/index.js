// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.blogsApiUrl()
  }

  blogsApiUrl = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    // console.log(data)
    const updateData = data.map(eachItem => ({
      id: eachItem.id,
      author: eachItem.author,
      title: eachItem.title,
      topic: eachItem.topic,
      avatarUrl: eachItem.avatar_url,
      imageUrl: eachItem.image_url,
    }))
    this.setState({blogsList: updateData, isLoading: false})
  }

  render() {
    const {blogsList, isLoading} = this.state

    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(eachList => (
            <BlogItem
              key={eachList.id}
              blogsData={eachList}
              isLoading={isLoading}
            />
          ))
        )}
      </div>
    )
  }
}

export default BlogList
