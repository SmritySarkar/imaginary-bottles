import './Bottle.css'
const Bottle = ({bottle}) => {
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Bottle title: {name}</h3>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Bottle;