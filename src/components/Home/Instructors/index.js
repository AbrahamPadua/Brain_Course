import Instructor from "./Instructor";
import data from "./instructors";

const Instructors = () => {
  return (
    <section id="home-third" className="home-content">
      <h1>INSTRUCTORS</h1>
      <div id="instructors">
        {data.map((teacher, i) => <Instructor {...teacher} key={`${i}_${teacher.name}`} />)}
      </div>
    </section>
  );
};

export default Instructors;
