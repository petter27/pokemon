import React from 'react'

const Footer = ({author, year, git}) => {
  return (<footer className="footer">
        <p>Hecho con ❤️ por <a href={ git }>{ author }</a></p>
        <p>{ year }</p>
      </footer>);
}
 
export default Footer;