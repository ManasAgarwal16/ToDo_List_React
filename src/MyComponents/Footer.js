import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top:"100vh",
        width:"100%",
        
    }
    return (
        <footer className= "bg-dark text-light py-3px " style={footerStyle}>
        <p className="text-centers">
            Copyright &copy; MyTodosList.com
        </p>
        </footer>
    )
}
