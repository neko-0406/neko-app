import "../App.css"
import HeaderButton from "./HeaderButton";
import icon from "../assets/32x32.png"

/**
 * Header Menu
 * @returns React Component
 */
export default function Header() {

    return (
        <div className="app-bar">
            <HeaderIcon></HeaderIcon>
            <HeaderButton name="ファイル"></HeaderButton>
            <HeaderButton name="編集"></HeaderButton>
            <HeaderButton name="ヘルプ"></HeaderButton>
        </div>
    );
}

function HeaderIcon() {
    return(
        <div className="header-icon" style={{marginLeft: '10px', marginRight: '15px'}}>
            <img src={icon} alt="icon"/>
        </div>
    );
}