export default function CardGame(props) {
  const { img, title, short_description } = props;

  return (
    <div>
      <img src={img}
           alt={title} />

      <h1>{title}</h1>
      <br />
      <p>{short_description}</p>
    </div>
  );
}
