import "./footer.scss";

const Footer = ({totalSum, clearCart}) => {

    return (
        <footer>
            <hr></hr>
            <div>
                <h5>
                    Total
                    <span className="cart-total">{totalSum}</span>
                </h5>
            </div>
            <button className="btn btn-hipster" onClick={clearCart}>Clear Cart</button>
        </footer>
    )
}
export default Footer;