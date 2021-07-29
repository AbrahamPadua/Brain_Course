import { Header, Footer, Video, Description, Instructors } from "./HomeElems"

const Home = () => {
  return (
    <>
      <main className="landing-page">
        <Header />
        <Video />
      </main>
      <Description />
      <Instructors />
      <Footer />
    </>
  );
};

export default Home;
