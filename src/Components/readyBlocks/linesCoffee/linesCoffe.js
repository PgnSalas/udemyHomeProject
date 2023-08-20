import './linesCoffee.scss';


const LinesCoffee = (url, top, left) => {
    return (
        <div className="linesCoffee__block">
            <span className="linesCoffee__block_line"></span>
            <div className="linesCoffee__block_image">
                <img src={url} alt="" />
            </div>
            <span className="linesCoffee__block_line"></span>
        </div>
    )
}

export default LinesCoffee;