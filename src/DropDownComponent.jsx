import "./App.css";

export default function DropDownComponent() {
  return (
    <div class="dropdown">
      <button
        class="btn btn-sm btn-outline-primary mt-2"
        type="button"
      >
        Acciones
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">
          Action
        </a>
        <a class="dropdown-item" href="#">
          Another action
        </a>
        <a class="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
}
