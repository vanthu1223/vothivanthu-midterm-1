export default function Place(props) {
  return (
    <li key="{props.id}" className="place-item">
      <button>
        <img src="{props.image.src}" alt="{props.image.src}" />
        <h3>{props.title}</h3>
      </button>
    </li>
  );
}
