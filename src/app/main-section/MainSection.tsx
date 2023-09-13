import "./main.scss";
import Table from "../tabble/Table";

const Main: React.FC = () => {
  return (
    <main className="main">
      <section className="main-section ">
        <div className="text-container">
          <h3 className="text-head">embed RK1K2bCg4J8</h3>
          <p className="text-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut culpa
            deserunt dignissimos enim ?
          </p>
          <p>
            <a
              className="text-link"
              href="https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s"
              target="_blank"
            >
              https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s
            </a>
          </p>
        </div>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/watch?v=RK1K2bCg4J8&t=2414s"
            className="video"
          ></iframe>
        </div>
      </section>
      <Table />
    </main>
  );
};

export default Main;
