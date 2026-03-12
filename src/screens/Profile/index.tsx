import { SafeAreaView } from 'react-native';
import { ProfilePage } from '../../modules/Profile';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <ProfilePage />
    </SafeAreaView>
  );
};
export default Profile;
