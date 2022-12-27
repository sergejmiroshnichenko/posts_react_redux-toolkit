import React from 'react';
import { FaGithubSquare as GitHub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <p>© 2022 by Sergej Miroshnichenko</p> &nbsp;
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/sergejmiroshnichenko"><GitHub
                style={{ fontSize: '28px' }}/></a>
        </footer>
    );
};

export default Footer;
