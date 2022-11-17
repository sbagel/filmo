import { Head } from '~/components/shared/Head';
import NavBar from './components/NavBar';
import Headline from './components/Headline';
import Footer from './components/Footer';

function Index() {

  return (
    <>
      <Head title="Welcome" />
      <div className="flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-eerie via-peachin to-eerie">
        <NavBar/>
        <Headline/>
        <Footer/>
      </div>
    </>
  );
}

export default Index;
