import user from '../DataBase/user';
import { Profile } from './Profile/Profile';
import data from '../DataBase/data';
import { Statistics } from './Statistics/Statistic';
import friends from '../DataBase/friends';
import { FriendList } from './FriendList/FriendList';
import transactions from '../DataBase/transactions';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { Container } from './Container/Container.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
