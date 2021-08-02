const Instructor = ({ name, profession }) => {
  let img;

  switch (name) {
    case 'Dr. Ronald White':
      img = '/instructors/RonaldWhite.jpg';
      break;
    case 'Dr. Arijit Bingham':
      img = '/instructors/ArijitBingham.jpg';
      break;
    case 'Dr. Manilow Mandy':
      img = '/instructors/MandyManilow.jpg';
      break;
    case 'Dr. Sara Brooks':
      img = '/instructors/SaraBrooks.jpg';
      break;
    case 'Dr. Wei Ying':
      img = '/instructors/WeiYing.jpg';
      break;
    default:
      img = '/instructors/RonaldWhite.jpg'
  }

  return (
    <div className="instructor">
      <img className="instructorImg" src={img} alt={name} />
      <div className="texts">
        <h3>{name}</h3>
        <h4>Professor</h4>
        <p>{profession}</p>
      </div>
    </div>
  )
}

export default Instructor
