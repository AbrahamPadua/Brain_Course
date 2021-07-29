const Instructor = ({ name, job, img }) => {
  return (
    <div className="instructor">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{job}</p>
    </div>
  );
};

export default Instructor;
