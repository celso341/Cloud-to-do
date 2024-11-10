import React from "react";
import { Link } from "react-router-dom"

import { FiBell, FiSidebar, FiChevronDown, FiPlusCircle, FiSearch, FiInbox, FiCalendar, FiHash} from "react-icons/fi";
import { MdOutlineCalendarMonth, MdLabelOutline  } from "react-icons/md";

import "../styles/pages/today.css";
import photo from "../images/Me.svg";

function Today() {
    return (
        <div id="page-today">

            <div id="panelmain">

                <div id="panelprofile">

                    <div id="notification">

                        <div className="profile">
                            <img src={photo} />
                            <p className="text">Celso</p>
                            <Link to="#">
                                <FiChevronDown className="exit"/>
                            </Link>
                            
                        </div>

                        <Link to="#" className="bell">
                            <FiBell size={24} color="#666666"/>
                        </Link>

                        <Link to="#" className="sibebar">
                            <FiSidebar size={24} color="#666666"/>
                        </Link>

                    </div>
                    <div id="add-buton">
                        <FiPlusCircle className="add" size={24}/> <p>Adicionar tarefa</p>
                    </div>
                    <div className="panel-buton">
                        <FiSearch className="buton" size={24}/> <p className="buscar">Buscar</p>
                        {/*<FiInbox size={24} /> <p>Entrada</p>
                        <FiCalendar  size={24}/> <p>Hoje</p>
                        <MdOutlineCalendarMonth size={24} /> <p>Em breve</p>
                        <MdLabelOutline  size={24}/> <p>Filtros e Etiquetas</p>*/}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Today;