import {
  Header,
  Hero,
  Service,
  CardPost,
  Bichver,
  Case,
  Learn,
  Process,
  Grid,
  Team,
  TeamCard,
  See,
  Client,
  Navigation,
  Contact,
  ContactCard,
  Footer1,
  Logos,
} from "./_components";

const Home = () => {
  return (
    <div className="mx-auto w-full max-w-[1440] px-25">
      <Header />
      <Hero />
      <Logos />
      <Service />
      <CardPost />
      <Bichver />
      <Case />
      <Learn />
      <Process />
      <Grid />
      <Team />
      <TeamCard />
      <See />
      <Client />
      <Navigation />
      <Contact />
      <ContactCard />
      <Footer1 />
    </div>
  );
};

export default Home;
