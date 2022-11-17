import { useAuthState } from '~/components/contexts/AuthContext';
import { Head } from '~/components/shared/Head';
import Landing from './landing/main/Index';
import LoggedIn from './loggedin/main/Index'

function Index() {
  const { state } = useAuthState();

  return (
      <>
      <Head title="Welcome" />
      {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <Landing /> : <LoggedIn />}
      </>
  );
}

export default Index;
