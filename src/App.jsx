import Profile from "./components/Profile/Profile";
import Statistics from './components/Statistics/Statistics'
import FriendList from './components/FriendList/FriendList'
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from './components/Profile/user.json'
import data from './components/Statistics/data.json'
import friends from './components/FriendList/friends.json'
import transactions from './components/TransactionHistory/transactions.json'
import "./App.css";




export const App = () => {
  return (
    <div className="container">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  )
}
