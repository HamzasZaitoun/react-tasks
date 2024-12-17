import profilePic from './assets/Hamza.png'
function Card()
{
return(
    <div className="card">
        <img
        className='card-img' alt="hamza zaitoun" src={profilePic}>
        </img>
        <h2 className='card-title'>
            Hamza
        </h2>
        <p className='card-text'>
            full stack web developer
        </p>
    </div>
)

}
export default Card;