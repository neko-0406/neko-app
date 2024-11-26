import "../App.css"
/**
 * HeaderButton
 * @param {string} name
 * @param {string} type
 * @returns this component
 */
export default function HeaderButton( props ) {
    const index = props.name;

    return (
        <button className="app-bar-button" type="button">
            {index}
        </button>
    );
}