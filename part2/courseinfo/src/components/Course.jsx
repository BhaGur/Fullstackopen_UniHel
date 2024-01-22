const Course = ({course}) =>{
    return (
      <div>
        <Header course={course} />
        <Content parts={course.parts} />
        <Total parts={course.parts}/>
      </div>
    )
  }
  const Header = ({ course }) => <h2>{course.name}</h2>
  
  const Total = ({ parts }) => {
    const total = parts.reduce((a,b) => a + b.exercises, 0);
    return <b>Total of {total} exercises</b>;
  }
  
  const Part = ({ part }) => 
    <p>
      {part.name} {part.exercises}
    </p>
  
  const Content = ({ parts }) => 
    parts.map((part) => <Part key={part.id} part={part} />)

export default Course;