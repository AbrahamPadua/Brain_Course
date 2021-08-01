import { Header, Video, Description, Instructors } from "./HomeElems"

const Home = () => {
  return (
    <>
      <main className="landing-page">
        <Header />
        <Video />
      </main>
      <Description />
      <Instructors />
    </>
  );
};

export default Home;
