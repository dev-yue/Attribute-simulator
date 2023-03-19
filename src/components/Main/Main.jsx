import ProfileList from "../ProfileList/ProfileList";
import FeaturedActivities from "../FeaturedActivities/FeaturedActivities";

const Main = () => {


  const numberOfProfiles = 6;

  return (
    <div>
      <FeaturedActivities />
      <ProfileList numberOfProfiles={numberOfProfiles} />
    </div>
  );
};

export default Main;
