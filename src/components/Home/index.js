import BlogList from '../BlogList'

import './index.css'
import UserInfo from '../UserInfo'

const Home = () => (
  <div className="home-container">
    <UserInfo />
    <BlogList />
  </div>
)

export default Home
