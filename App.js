const header = <h1 className="title"> Witaj na stronie </h1>;
const classBig = "big";
const handleClick = () => alert("klik!");
const main = (
  <div>
    <h1 onClick={handleClick} className="red">
      {" "}
      Pierwszy artykul{" "}
    </h1>{" "}
    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit.Harum mollitia
      quaerat, usnde excepturi commodi deleniti cumque illo quo deserunt atque
      dolorum, fuga libero molestias repellendus, ea ullam molestiae ad labore!
    </p>{" "}
  </div>
);
const stopka = "To stopka jest :)";
const footer = (
  <footer>
    <p className={classBig}> {stopka} </p>{" "}
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
