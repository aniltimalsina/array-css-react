import "./home.css";
function Home() {
  const names = ["Hooks", "Components", "Redux", "Context"];

  return (
    <>
      <h1>Some Contents to learn in React World</h1>
      <ul>
        {names.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Home;
