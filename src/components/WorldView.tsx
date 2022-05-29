import './WorldViewStyles.scss';
import worlddata from '../game/world/worlddata';
const textNode = <div id="text"></div>



const optionOneSelect = () => {
    alert("Change")
}
const optionTwoSelect = () => {

}
const optionThreeSelect = () => {

}
const optionFourSelect = () => {

}
const WorldView = () => {
    return (
        <div>
            <h1>
                {worlddata.house.sceneName}
            </h1>
            <img src={worlddata.house.src} className="scene" alt="" />
                <div className="container">
                    <div id ="text">{worlddata.house.textNode}</div>
                    <div id="option-buttons" className="btn-grid">
                        <button className="btn">{worlddata.house.option1}</button>
                        <button className="btn">{worlddata.house.option2}</button>
                        <button className="btn">{worlddata.house.option3}</button>
                        <button className="btn">{worlddata.house.option4}</button>                     
                    </div>
                </div>
        </div>
    )
}

export default WorldView