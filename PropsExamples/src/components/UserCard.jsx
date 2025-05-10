import './UserCard.css'
// import ummul from '../assets/ummul.jpg'
const UserCard = (props) => {
    return (
        <div className="User-Container" style={{ "border-radius": "10px" }}>
            <p id="username">{props.name}</p>
            <img id="user-img" src={props.image} alt={props.name}></img>
            <p id="user-desc">{props.desc}</p>
        </div>
    )
}
export default UserCard;