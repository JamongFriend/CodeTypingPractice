import { Link } from 'react-router-dom';

class TypingPages extends Component {

    stlye(){
        return (
            <div>
                <div id="header" role="banner">
                    <div classname="gotoMain">
                        <ul className ="logo">
                            <li>
                                <a href="#">
                                    <img></img>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="body" role="main">
                    <div id="groupA" className="leftSide">
                        <div className="pontSize">
    
                        </div>
                        <div className="typingBox">
    
                        </div>
                        <div className="typingSpeedGraph">
    
                        </div>
                    </div>
                    <div id="groupB" className="rightSide">
    
                    </div>
                </div>
            </div>
        );
    }
}

class TypingBox {

}

class PontSize {

}

class TypeSpeedGraph {

}

export default TypingPages;