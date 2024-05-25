export default function Place({place}) {
  return (
    <li key="{place.id}" className="place-item">
      <button>
        <img src="{place.image.src}" alt="{place.image.src}" />
        <h3>{place.title}</h3>
      </button>
    </li>
  );
}
