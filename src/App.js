import React, { useState, useEffect } from 'react';

function RegularComponent() {
  return <h1>Eery one can see this components</h1>;
}
function SecretComponent() {
  return <h1>Secreat Information</h1>;
}

function Header(props) {
  return props.authorized ? <SecretComponent /> : <RegularComponent />;
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}
const dishes = [
  'Macroni and cheese',
  'Salmon',
  'Tofu with vegitables',
  'Minestrone'
];

const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));

function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food around.</p>
      <ul style={{ textAlign: 'left' }}>
        {props.dishes.map(dish => (
          <li className={dish.id} key={dish.id}>
            {dish.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

function App({ login }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then(response => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, [login]);

  if (loading) return <h1>Loading....</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.location}</p>
      <img src={data.avatar_url} alt={data.login} width="200" />
    </div>
  );

  return <div>No User avaiable</div>;

  /*const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  const [checked, Setchecked] = useState(false);

  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary]);

  return (
    <>
      <h1>Currunt emotion is {emotion}.</h1>
      <button onClick={() => setEmotion("happy")}>Happy</button>
      <button onClick={() => setSecondary("crabby")}>Crabby</button>
      <input type="checkbox" value="{checked}" onChange={() => Setchecked((checked) => !checked)} />
      <p>{checked ? "Checked" : "not checked"}</p>
    </>
  );*/

  /*return (
    <div className="App">
      <Header name="Cindy" authorized={true} />
      <Main adjective="amazing" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );*/
}

export default App;
