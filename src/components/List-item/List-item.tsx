import "./List-item.css";
import status from "./eye-16.png";

function ListItem({ name, owner, statusName, url }: any) {
  function goToUrl() {
    window.open(url, '_blank');
  }
  return (
    <div className="list-item" onClick={() => { goToUrl() }}>
      <div className="list-item__name d-flex">
        <strong>Repository Name:</strong> {name}
      </div>
      <div className="list-item__owner d-flex">
        <strong>Actor:</strong> {owner}
      </div>
      <div className="list-item__status d-flex">
        <strong>Status:</strong> {statusName ? 'Private' : 'Public'} <img src={status} alt="" />
      </div>
    </div>
  );
}

export default ListItem;


