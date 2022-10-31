import { padding } from '@mui/system';
import React from 'react'
import prime_logo from "./img/primeVideoLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faBars,
    faSearch,
    faHouseDamage,
    faShoppingBag,
    faDownload,
    faUser
} from "@fortawesome/free-solid-svg-icons";

export const container_menu = {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
};

export const container_menu_child1 = {
    display: "flex",
    width: "100%",
    height: "40px",
    marginTop: "60px",
    marginBottom: "20px"
};

export const container_menu_childs = {
    display: "flex",
    width: "100%",
    height: "40px",
    marginBottom: "10px"
};

export const container_menu_child_final = {
    display: "flex",
    position: "absolute",
    bottom: "0",
    width: "100%",
    height: "60px",
    boxShadow: "-1px -1px 3px 0px #000000"
};

export const container_menu_child_left = {
    width: "20%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems : "center"
};

export const container_menu_child_right = {
    width: "80%",
    height: "100%",
    display: "flex",
};

export const container_menu_child_right_search = {
    width: "90%",
    height: "100%",
    display: "flex",
    margin: "0px 20px 0px 10px"
};

export const container_menu_child_right_final = {
    width: "20%",
    height: "100%",
};

export const container_menu_child_center_final = {
    width: "60%",
    height: "100%",
};

export const prime_logo_style = {
    width: "55%",
    height: "100%",
    margin: "0px 0px 0px 30px"
};

export const input_menu_search = {
    flexGrow: "1",
    width: "80%",
    border: "1px solid #627083",
    backgroundColor: "transparent",
    borderRadius: "4px",
    padding: "10px",
    outline: "none",
    fontSize: "17px",
    fontWeight: "600",
    color: "#627083"            
}

export const input_select1 = {
    display: "flex",
    position: "absolute",
    margin: "0px 0px 0px -6px",
    width: "75%",
    border: "none",
    backgroundColor: "transparent",
    outline: "none",
    fontSize: "17px",
    fontWeight: "600",
    color: "#627083"            
};

export const span_navbar = {
    fontSize: "17px",
    fontWeight: "600",
    color: "#627083"
};

export const icon_menu = {
    with: "100%",
    fontSize: "34px",
    color: "#627083"
};

export const icon_search = {
    with: "100%",
    fontSize: "22px",
    color: "#627083",
    margin: "5px 0px 0px 10px"
};

export const icons_menu = {
    with: "100%",
    fontSize: "22px",
    color: "#627083"
};

export const MenuLeft = () => {
    return (
        <div className="container-menu" style={container_menu}>

            <div className="container-menu-child" style={container_menu_child1}>
                <div className="container-menu-child-left" style={container_menu_child_left}>
                    <FontAwesomeIcon style={icon_menu} className="icon-menu" icon={faBars}/>
                </div>
                <div className="container-menu-child-right" style={container_menu_child_right}>
                    <img src={prime_logo} style={prime_logo_style}/>
                </div>
            </div>
            <div className="container-menu-child" style={container_menu_childs}>
                <div className="container-menu-child-left" style={container_menu_child_left}>
                   <FontAwesomeIcon style={icon_search} className="icon-menu" icon={faSearch}/>
                </div>
                <div className="container-menu-child-right" style={container_menu_child_right_search}>
                    <input id="input-menu-search" style={input_menu_search} type="text" placeholder="Buscar"></input>
                </div>
            </div>
            <div className="container-menu-child" style={container_menu_childs}>
                <div className="container-menu-child-left" style={container_menu_child_left}>
                    <FontAwesomeIcon style={icons_menu} className="icon-menu" icon={faHouseDamage}/>
                </div>
                <div className="container-menu-child-right" style={container_menu_child_right}>
                    <span style={span_navbar}>Inicio</span>
                </div>
            </div>
            <div className="container-menu-child" style={container_menu_childs}>
                <div className="container-menu-child-left" style={container_menu_child_left}>
                    <FontAwesomeIcon style={icons_menu} className="icon-menu" icon={faShoppingBag}/>
                </div>
                <div className="container-menu-child-right" style={container_menu_child_right}>
                    <span style={span_navbar}>Tienda</span>
                </div>
            </div>
            <div className="container-menu-child" style={container_menu_childs}>
                <div className="container-menu-child-left" style={container_menu_child_left}></div>
                <div className="container-menu-child-right" style={container_menu_child_right}>
                    <span style={span_navbar}>Canales</span>
                </div>
            </div>
            <div className="container-menu-child" style={container_menu_childs}>
                <div className="container-menu-child-left" style={container_menu_child_left}></div>
                <div className="container-menu-child-right" style={container_menu_child_right}>
                    <select style={input_select1}>
                        <option>Categorías</option>
                    </select>
                </div>
            </div>
            <div className="container-menu-child" style={container_menu_childs}>
                <div className="container-menu-child-left" style={container_menu_child_left}>
                    <FontAwesomeIcon style={icons_menu} className="icon-menu" icon={faDownload}/>
                </div>
                <div className="container-menu-child-right" style={container_menu_child_right}>
                    <span style={span_navbar}>Descargas</span>
                </div>
            </div>
            <div className="container-menu-child" style={container_menu_childs}>
                <div className="container-menu-child-left" style={container_menu_child_left}>
                    <FontAwesomeIcon style={icons_menu} className="icon-menu" icon={faUser}/>
                </div>
                <div className="container-menu-child-right" style={container_menu_child_right}>
                    <span style={span_navbar}>Mi espacio</span>
                </div>
            </div>
            <div className="container-menu-child" style={container_menu_child_final}>
                <div className="container-menu-child-left" style={container_menu_child_left}></div>
                <div className="container-menu-child-center" style={container_menu_child_center_final}></div>
                <div className="container-menu-child-right" style={container_menu_child_right_final}></div>
            </div>
            
        </div>
    )
};