import './title.scss';

const Title = (props) => {
    const { text, mgB } = props;
    return (
        <div className="title" style={{ marginBottom: mgB }}>
            <h1>{text}</h1>
        </div>
    )
}

export default Title;