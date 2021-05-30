import { useFetchimg } from "../Hooks/useFetchimg";
import Card from "./Card";
import Formimg from "./Formimg";
import Loading from "./Loading";

const Cards = () => {
  const [images, loading, handleSubmit] = useFetchimg();
  return (
    <div>
      <Formimg handleSubmit={handleSubmit} />

      <hr></hr>

      {/* LOADING */}

      {loading && <Loading />}

      <div className="row">
        {images.map((img) => {
          return (
            <div key={img.id} className="col">
              <Card img={img.urls.regular}></Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
